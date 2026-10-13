# MyAiS Official Website — GitHub Pages Replacement R001

**Prepared 2026-10-13** for the public repository `MyAis-ME/myais-website` and domain `myais.ae`.

## Delivery

This folder is a **complete, static GitHub Pages replacement**. It contains `index.html`, `style.css`, `script.js`, `assets/`, `CNAME`, `robots.txt`, and `sitemap.xml`.

It requires **no framework, npm, API keys, database, forms backend or third-party account**. Pages should publish the root `index.html` automatically. Google Fonts are progressive enhancement: if the font service is unavailable, system fonts display.

## Safe publishing steps

1. Sign in to GitHub and open `https://github.com/MyAis-ME/myais-website` > **main**.
2. Make a backup of the present repository using **Code > Download ZIP** before changing anything. The existing history remains available in GitHub.
3. Upload the files **from inside this delivery folder** to the **repository root**. Do **not** upload this outer ZIP as one file: GitHub Pages will not turn an uploaded ZIP into a website. Do not add a `MyAiS_Website_20261013_R001/` subfolder.
4. Confirm the root contains `index.html`, `style.css`, `script.js`, `CNAME`, `robots.txt`, `sitemap.xml` and an `assets/` directory with all the delivered images.
5. Keep `CNAME` exactly as `myais.ae`. Do not change DNS or Microsoft domain MX/TXT records to deploy the website.
6. Commit to `main`, then review **Settings > Pages** for a successful build. Open `https://myais.ae/` and reload without cache (Ctrl+Shift+R).
7. Test mobile navigation, all section links, both email calls to action and favicon. GitHub Pages deployment may take several minutes.

**Alternative:** Use GitHub Desktop/git to replace the six root files and asset directory in one commit, preserving Git history.

## Business email configuration

The working **public website contact remains `contact@myais.me` until an `@myais.ae` inbox is activated and tested**. To change later, edit precisely one line near the top of `script.js`:

`const WEBSITE_CONTACT_EMAIL = 'contact@myais.me';`

Change it to the verified inbox (for example `contact@myais.ae`). The script updates the email address and both `mailto:` buttons together. To also update the email displayed without JavaScript, replace the three hardcoded fallback `contact@myais.me` occurrences in `index.html` after verifying the new email. Do not publish an address until Microsoft 365 send/receive works.

GitHub Pages uses website DNS records (A/AAAA/CNAME); Microsoft 365 email uses MX, TXT and other verification records. Add mail DNS without deleting the website records.

## Public-content evidence standard

- Ai.S, S.Ai, Mobile, MMI and six role servers are real project source packages; their completion and live-acceptance levels vary.
- Website includes **explicit ongoing integration** and describes current local demonstrations, not global customer traction.
- Mobile dispatches directly to online Providers; MMI issues the Mobile configuration. It is not falsely diagrammed as running every Mobile request through MMI.
- S.Ai↔OneDrive synchronization is already demonstrated; complete Mobile 2-way background sync and Ai.S interoperability remain targets.
- MMI 8100 is the target authority; role servers previously used MMI 8101 during tests.
- KNW NoVa knowledge environment is not fully configured; website speaks of design capability, not accepted production operation.
- No public financial ask, investor interest claim, revenue figure or regulatory certification claim is made.
- Office image is labelled as a **concept**, not actual premises.

## Files

- `index.html` — all public content, accessibility, SEO/social metadata.
- `style.css` — responsive layout / branding.
- `script.js` — mobile menu, copyright year and one-line contact configuration.
- `assets/myais-brand-symbol.png`, `assets/myais-official-logo.png` — crops/optimizations from founder-supplied official logo artwork; no AI-generated substitute.
- `assets/headquarters-vision.webp` — illustrative conceptual office image.
- `assets/architecture-concept.webp` — optional architecture reference retained for future reuse, not currently shown.
- `assets/social-preview.jpg` — social sharing preview.

## Scope of this handoff

No code was pushed directly to GitHub. This is a replacement package for owner review and publication; remote editing requires a connected GitHub account with appropriate permissions.
