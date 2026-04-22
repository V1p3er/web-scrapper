import json
import re

from pathlib import Path
from models.site import Site


BASE_SAVE_PATH = Path("saves")


class StorageManager:

    def __init__(self):
        BASE_SAVE_PATH.mkdir(exist_ok=True)

    def site_path(self, site_name: str) -> Path:
        path = BASE_SAVE_PATH / site_name
        path.mkdir(exist_ok=True)
        return path

    def json_path(self, site_name: str) -> Path:
        return self.site_path(site_name) / "site.json"

    def save_site(self, site: Site):

        path = self.site_path(site.name)
        json_file = path / "site.json"

        with open(json_file, "w", encoding="utf-8") as f:
            json.dump(site.to_dict(), f, indent=4)

    def load_site(self, site_name: str):

        json_file = self.json_path(site_name)

        if not json_file.exists():
            return None

        with open(json_file, "r", encoding="utf-8") as f:
            data = json.load(f)

        return Site.from_dict(data)

    def list_sites(self):

        sites = []

        for folder in BASE_SAVE_PATH.iterdir():

            if not folder.is_dir():
                continue

            json_file = folder / "site.json"

            if not json_file.exists():
                continue

            with open(json_file, "r", encoding="utf-8") as f:
                data = json.load(f)

            sites.append(Site.from_dict(data))

        return sites

    def save_file(self, site_name: str, filename: str, content: bytes):

        # FIX: sanitize filename FIRST
        filename = clean_filename(filename)

        path = self.site_path(site_name) / filename

        with open(path, "wb") as f:
            f.write(content)

def clean_filename(filename: str) -> str:
    # Remove illegal chars:  ?  *  :  "  <  >  |  \
    filename = re.sub(r'[\\/*?:"<>|]', "_", filename)
    return filename