# Qarex Labs website

A static company website for Qarex Labs Ltd. Open `index.html` in a browser to preview it. No build tools or package installation are needed.

## Publish with GitHub and Cloudflare Pages

1. The empty GitHub repository `Zia97/qarexlabs-website` is already connected to this folder using SSH, the same method used by other projects on this computer.
2. In a terminal opened in this folder, run:

   ```powershell
   git push -u origin main
   ```

3. In Cloudflare, open **Workers & Pages → Create application → Pages → Import an existing Git repository**. Connect GitHub and select `qarexlabs-website`.
4. Set the production branch to `main`, framework preset to **None**, build command to **blank**, and build output directory to `.` (the repository root). Deploy.
5. Open the `*.pages.dev` address Cloudflare gives you and check the site.
6. In the Pages project, open **Custom domains → Set up a domain** and enter `qarexlabs.co.uk`. If the domain is already a Cloudflare zone in the same account, Cloudflare should create the needed DNS record. Wait until Cloudflare marks the domain active, then visit `https://qarexlabs.co.uk/`.
7. If you want `www.qarexlabs.co.uk` to redirect to the main domain, follow Cloudflare's [www to apex redirect guide](https://developers.cloudflare.com/pages/how-to/www-redirect/). This uses a Bulk Redirect and a proxied DNS record. Do this after the main domain works.

Cloudflare automatically deploys future pushes to `main`. To update the site, edit the files, then run `git add .`, `git commit -m "Describe the change"`, and `git push`.

## Before publishing

Check the contact email and UCAT Genius description. The company number and registered office address match the [Companies House listing](https://find-and-update.company-information.service.gov.uk/company/17503258). These details are public on the website. As of 8 October 2026, `qarexlabs.co.uk` serves a page that sends visitors to `/lander`; connecting the custom domain will replace that site at the root address. Check existing Cloudflare DNS records before changing them, especially email MX, SPF, DKIM, and DMARC records; the website setup should not require removing those.
