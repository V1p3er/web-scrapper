from dataclasses import dataclass
from datetime import datetime


@dataclass
class Site:
    name: str
    url: str
    created_at: str

    def to_dict(self):
        return {
            "name": self.name,
            "url": self.url,
            "created_at": self.created_at
        }

    @classmethod
    def from_dict(cls, data: dict):
        return cls(
            name=data.get("name"),
            url=data.get("url"),
            created_at=data.get("created_at")
        )

    @staticmethod
    def create(name: str, url: str):
        return Site(
            name=name,
            url=url,
            created_at=datetime.utcnow().isoformat()
        )