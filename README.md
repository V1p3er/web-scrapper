# Web Scraper

I built this project as a simple command-line web scraper for saving a website's main page plus its linked CSS/JS assets.

It is intentionally lightweight and easy to read, so it is a good small project if you are learning Python scraping basics.

## What it does

- Lets you create a scrape job from the terminal
- Validates URL format before starting
- Downloads the page HTML and saves it as `index.html`
- Finds asset links from:
  - `<link href="...">`
  - `<script src="...">`
- Downloads those assets and stores everything in a per-site folder
- Saves site metadata (`name`, `url`, `created_at`) in `site.json`
- Shows a list of previously scraped sites

## Project structure

```text
WebScraper/
|- main.py                # CLI flow and menus
|- scraper/scraper.py     # Fetching, parsing, downloading assets
|- storage/storage.py     # File and metadata storage logic
|- models/site.py         # Site data model
|- saves/                 # Output folder (generated after scraping)
```

## Requirements

- Python 3.10+ (3.11+ recommended)
- `requests`
- `beautifulsoup4`

Install dependencies:

```bash
pip install requests beautifulsoup4
```

## Run the scraper

From the project root:

```bash
python main.py
```

Then choose from the menu:

1. Scrape new site
2. See list of scraped sites
0. Exit

If you leave the site name blank, the scraper auto-uses the domain name.

## Output format

Each scrape is stored under:

```text
saves/<site_name>/
```

Typical output:

```text
saves/example.com/
|- index.html
|- site.json
|- app.css
|- app.js
|- ...
```

`site.json` includes:

- `name`
- `url`
- `created_at` (UTC ISO format)

## Notes and limitations

- This scraper currently handles only linked CSS/JS assets from HTML tags (`link` and `script`).
- It does not crawl multiple pages.
- It does not rewrite URLs inside HTML/CSS for full offline browsing.
- Some sites block scraping or require JavaScript rendering; those may not scrape fully.


