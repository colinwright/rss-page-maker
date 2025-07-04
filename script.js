
const feedContainer = document.getElementById('feed-container');
const apiEndpoint = 'https://api.rss2json.com/v1/api.json?rss_url=';
const CACHE_KEY = 'feed_data';
const CACHE_DURATION_MS = 60 * 60 * 1000;

function getSources() {
    return window.feedSources || (typeof feedSources !== 'undefined' ? feedSources : []);
}
function applyCustomizations() {
    if (typeof colorScheme !== 'undefined' && colorScheme !== 'system') document.documentElement.setAttribute('data-theme', colorScheme);
    if (typeof fontScheme !== 'undefined' && fontScheme !== 'system') document.documentElement.setAttribute('data-font', fontScheme);
}
function setupNavigation() {
    const nav = document.querySelector('.site-nav');
    const toggleButton = document.getElementById('nav-toggle-button');
    const navLinks = document.getElementById('nav-links');
    if (!nav || !navLinks) return;
    if (navLinks.children.length === 0) { nav.style.display = 'none'; return; }
    if (toggleButton) {
        toggleButton.addEventListener('click', e => { e.stopPropagation(); navLinks.classList.toggle('active'); });
        document.addEventListener('click', () => navLinks.classList.remove('active'));
    }
}
function renderItems(items) {
    if (!items || items.length === 0) {
        if (getSources().length === 0) feedContainer.innerHTML = '<p class="error-message">No RSS feeds have been added.</p>';
        return;
    }
    items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    feedContainer.innerHTML = '';
    items.forEach(item => feedContainer.appendChild(createFeedItemElement(item)));
}
function createFeedItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'feed-item';
    const metaDiv = document.createElement('div');
    metaDiv.className = 'item-meta';
    metaDiv.innerHTML = `<span>${item.sourceName}</span><span class="separator">•</span><span>${new Date(item.pubDate).toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})}</span>`;
    const titleH2 = document.createElement('h2');
    titleH2.className = 'item-title';
    titleH2.innerHTML = `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a>`;
    const summaryP = document.createElement('p');
    summaryP.className = 'item-summary';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = item.description;
    summaryP.textContent = tempDiv.textContent.split(' ').slice(0, 50).join(' ') + '…';
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'item-actions';
    const readButton = document.createElement('a');
    readButton.href = item.link;
    readButton.target = '_blank';
    readButton.rel = 'noopener noreferrer';
    readButton.className = 'action-button';
    readButton.textContent = 'Read';
    actionsDiv.appendChild(readButton);
    const copyButton = document.createElement('button');
    copyButton.className = 'action-button';
    copyButton.textContent = 'Copy Link';
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(item.link).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => { copyButton.textContent = 'Copy Link'; }, 2000);
        });
    });
    actionsDiv.appendChild(copyButton);
    if (navigator.share) {
        const shareButton = document.createElement('button');
        shareButton.className = 'action-button';
        shareButton.textContent = 'Share';
        shareButton.addEventListener('click', async () => {
            try { await navigator.share({ title: item.title, url: item.link }); } catch (err) { console.error('Share failed:', err); }
        });
        actionsDiv.appendChild(shareButton);
    }
    itemDiv.appendChild(metaDiv);
    itemDiv.appendChild(titleH2);
    itemDiv.appendChild(summaryP);
    itemDiv.appendChild(actionsDiv);
    if (item.enclosure?.link && item.enclosure.type.startsWith('audio/')) {
        const audioPlayer = document.createElement('audio');
        audioPlayer.className = 'item-audio';
        audioPlayer.controls = true;
        audioPlayer.src = item.enclosure.link;
        itemDiv.appendChild(audioPlayer);
    }
    return itemDiv;
}
window.fetchFreshData = async function() {
    try {
        const sources = getSources();
        if (sources.length === 0) { renderItems([]); return; }
        const fetchPromises = sources.map(source =>
            fetch(apiEndpoint + encodeURIComponent(source.url))
                .then(res => res.json())
                .then(data => {
                    if (data.status !== 'ok') { console.error('rss2json error for ' + source.name + ':', data.message); return []; }
                    return (data.items || []).map(item => ({ ...item, sourceName: source.name }));
                })
        );
        const allFeeds = await Promise.all(fetchPromises);
        const allItems = allFeeds.flat();
        if (allItems.length > 0) {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), items: allItems }));
            renderItems(allItems);
        } else if (!getCachedData()) {
            throw new Error("No content could be loaded. Check feed URLs.");
        }
    } catch (error) {
        console.error('Failed to render feeds:', error);
        if (!getCachedData()) { feedContainer.innerHTML = '<p class="error-message">Could not load content. ' + error.message + '</p>'; }
    }
}
function getCachedData() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { timestamp, items } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION_MS) { localStorage.removeItem(CACHE_KEY); return null; }
    return items;
}
function main() {
    applyCustomizations();
    setupNavigation();
    const cachedItems = getCachedData();
    if (cachedItems) renderItems(cachedItems);
    fetchFreshData();
}
main();