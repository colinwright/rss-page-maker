# RSS Page Maker

A simple, beautiful, and distraction-free tool to create your own personal web page populated by items from RSS feeds you choose. It is designed to be lightweight, high-quality, and completely free of subscriptions, trackers, or fluff.

Try it online: **[colinwright.github.io/rss-page-maker](https://colinwright.github.io/rss-page-maker/)**

---

## Features

- **No Setup or Code Required**: No database, database configuration, or build steps. It generates a zip folder of static files (`index.html`, `style.css`, `script.js`, `settings.js`) that you can host anywhere for free in under a minute.
- **Clean, Minimalist Design**: A responsive, readable layout that looks great on mobile, tablets, and desktop screens.
- **Drag-and-Drop Reordering**: Easily rearrange your RSS feeds and navigation links in the creator sidebar by dragging them into place before exporting.
- **Visitor Dark Mode**: The generated page has a built-in sun/moon toggle button in the header that lets your site visitors switch between light and dark themes (Cream Paper, Charcoal, Sepia, Slate, and Monochrome). Their preference is stored locally.
- **Privacy First**: The generator runs 100% in your browser; no feed URLs or personal settings ever leave your computer.

---

## How to Create Your Page

You can use the tool online or offline:

### Option A: Use it Online (Recommended)
1. Go to **[colinwright.github.io/rss-page-maker](https://colinwright.github.io/rss-page-maker/)**.
2. Customize your header details, navigation links, and theme in the left sidebar.
3. Manage and reorder your RSS feeds (drag them by the `⋮⋮` handles to sort).
4. Click **Generate Website** to download the `upload_these_files.zip` folder.

### Option B: Use it Offline (Local)
1. Download this repository or the `index.html` file to your computer.
2. Double-click the file to open it in your default web browser.
3. Customize your site and click **Generate Website** to download the ZIP folder.

---

## How to Publish Your Page

Once you have unzipped the downloaded files (which include `index.html`, `style.css`, `script.js`, and `settings.js`), you need to upload them to a web host to make them live on the internet. Here are two excellent, free hosting options (though there are plenty of good paid options out there—I personally use KnownHost).

### Option 1: Netlify

Netlify is the easiest way to get your site online. It takes less than a minute.

1. **Create an Account**: Go to [app.netlify.com](https://app.netlify.com) and sign up for a free account.
2. **Deploy Manually**: On your dashboard, scroll down to the bottom where it says "Want to deploy a new site without connecting to Git?".
3. **Upload**: Drag-and-drop your unzipped `upload_these_files` folder directly into the box, or click **browse to upload** and select the folder. You will see a "Deploy success!" message.
4. **Configure Domain**: Your site is now live at a random address (e.g. `random-name.netlify.app`). You can change this address or add a custom domain by going to **Site Configuration** -> **Domain Management**.

### Option 2: GitHub Pages

GitHub Pages is another great free option, especially if you already have a GitHub account.

1. **Create a Repository**: Create a new, public repository on GitHub. Call it whatever you like (e.g., `my-links`).
2. **Upload Your Files**: Go into your new repository, click **Add file**, and select **Upload files**.
3. **Drag and Drop**: Open your unzipped folder on your computer, select all four files (`index.html`, `style.css`, `script.js`, and `settings.js`), and drag them into the upload box.
4. **Commit**: Scroll to the bottom of the page and click the green **Commit changes** button.
5. **Enable Pages**: 
   - Go to your repository **Settings** tab.
   - Click **Pages** in the left sidebar.
   - Under **Build and deployment**, select **Deploy from a branch**, set the branch to `main` (or `master`) and `/ (root)`.
   - Click **Save**.
6. **Live Link**: After a minute, your website will be live at `https://your-username.github.io/your-repo-name`.
