import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

from storage.storage import StorageManager


class WebScraper:

    def __init__(self):
        self.storage = StorageManager()

    def fetch(self, url: str):

        response = requests.get(url, timeout=10)
        response.raise_for_status()

        return response.text

    def parse_assets(self, html: str, base_url: str):

        soup = BeautifulSoup(html, "html.parser")

        assets = []

        for link in soup.find_all("link"):
            href = link.get("href")
            if href:
                assets.append(urljoin(base_url, href))

        for script in soup.find_all("script"):
            src = script.get("src")
            if src:
                assets.append(urljoin(base_url, src))

        return assets

    def download_asset(self, url: str):

        try:
            r = requests.get(url, timeout=10)

            if r.status_code == 200:
                return r.content

        except Exception:
            pass

        return None

    def scrape(self, site):

        html = self.fetch(site.url)

        self.storage.save_file(site.name, "index.html", html.encode())

        assets = self.parse_assets(html, site.url)

        for asset in assets:

            content = self.download_asset(asset)

            if not content:
                continue

            filename = asset.split("/")[-1]

            if not filename:
                continue

            self.storage.save_file(site.name, filename, content)
