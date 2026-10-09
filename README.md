# Qarex Labs website

A static company website for Qarex Labs Ltd. Open `index.html` in a browser to preview it. No build tools or package installation are needed.

## Publish with Cloudflare Workers

This repository is connected to Cloudflare Workers Builds. A push to the configured production branch triggers the build and deployment. The site is static, with no package installation or local build step; its HTML, CSS and other assets are kept in this repository.

After a deployment, check `/`, `/ucatgenius`, `/ucatgenius/privacy`, `/ucatgenius/terms`, and the legacy `/privacy` and `/terms` redirects. Cloudflare Workers serves individual `.html` files at extensionless paths by default and reads redirect rules from `_redirects`.

## Product pages and legal pages

Give each product a top-level page and keep its legal pages under the same product path. For example, UCAT Genius uses `ucatgenius.html` for `/ucatgenius`, plus `ucatgenius/privacy.html` and `ucatgenius/terms.html` for `/ucatgenius/privacy` and `/ucatgenius/terms`. Add the product links to the homepage and its own footer. Keep any older shared legal URLs as redirects in `_redirects` so existing links continue to work.

## Before a release

Check that the contact email, company details and product descriptions are current. The company number and registered office address match the [Companies House listing](https://find-and-update.company-information.service.gov.uk/company/17503258). Review product policies when app features or service providers change, and update that product's legal links in its page and the homepage.
