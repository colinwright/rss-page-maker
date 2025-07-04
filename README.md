# Setup

1. Download the RSSPageMaker.zip file and unzip it. Inside you'll find the RSSPageMaker.html file. Double-click this file to open it in your default web browser (or drag/right-click to open in your browser of choice).

2. Use the siderbar on the left to customize the live preview on the right. Add a page title, header title, and subtitle, tweak your color and font schemes, and add some links (which will appear as menu items at the top) if you like.

3. Add your RSS feeds—the name is the title that will display at the top of each feed item, the URL is the RSS feed URL/address that provides the items to display. This URL is often something like 'your-domain.com/RSS' or 'your-domain.com/feed' (for Substack accounts, for instance, it's 'your-domain.substack.com/feed'). Enter the proper RSS URL and then click away so the site knows to update what's in the preview, and you'll see your most recent posts/episodes populate the preview (that's what you'll see on the resulting web page).

## How to Publish Your Page

Once you have the folder containing your website files (like index.html, style.css, etc.), you need to upload it to a web host to make it live on the internet. Here are two excellent, free options for hosting your static site (though there are plenty of good paid options out there—I personally use KnownHo
st).

## Option 1: Netlify

Netlify is the easiest way to get your site online. It takes less than a minute.

1. Create an Account: Go to app.netlify.com and sign up for a free account.

2. Click 'skip this step for now' on the 'Deploy your first project' page.

3. Scroll down a little and you'll see an option to deploy manually. Click 'browse to upload,' choose your 'upload_these_files' folder, and you should see a popup saying 'Deploy success!'

4. Your site is now hosted by Netlify. Click the 'Permalink' button to see your site—that's your current URL in the browser address bar—it'll be something random and possibly funny plus netlify.app (mine was 'bucolic-croissant-9c0a50.netlify.app'). You can change this to something else by finding the 'Domain Management' option in the 'Project navigation' menu (I changed mine to 'colinwrightsomnifeed.netlify.app').

5. You can point a domain you already own to this address, or you can buy a domain from Netlify (or someone else; I use Cloudflare, Porkbun, and Namecheap to buy my domains). You can also just use this free address forever; it's up to you, but your site is now live.

## Option 2: GitHub Pages

GitHub Pages is another great free option, especially if you already have a GitHub account.

1. Create an Account: Go to github.com and sign up for a free account if you don't have one.

2. Create a Repository: Create a new, public repository. Call it whatever you like, but 'rss-feed' or something along those lines would work well.

3. Upload Your Files: Go into your new repository and click the Add file (or plus-sign) button, then select Upload files.

4. Drag the files (not the folder) into the upload box. Open the folder containing your website on your computer, select all the files inside it (e.g., index.html, style.css, script.js, and settings.js) to be uploaded. Scroll to the bottom of the page and click the green 'Commit changes' button. You don't need to add a description.

5. Wait a minute or two for GitHub to process the files. Your new website will be live at: https://your-username.github.io/your-repo-name (mine, for instance, is at https://colinwright.github.io/rss-page-maker/)
