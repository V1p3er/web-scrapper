import os
from models.site import Site
from storage.storage import StorageManager
from scraper.scraper import WebScraper
import re


def cls():
    os.system('cls' if os.name == 'nt' else 'clear')


cls()
print("Welcome To Particle Web Scraper\n\n")


# Main Menu
def userMainGuide():
    while True:
        try:
            print("Please select which operation you want to do: ")
            print(" 0. Exit program")
            print(" 1. Scrape new site")
            print(" 2. See list of scraped sites\n")

            userOption = int(input("Enter a choice you want: "))
            cls()

            if userOption == 0:
                print("Thank you for using our web scraper!")
                return 0

            if userOption < 1 or userOption > 2:
                print(f"You have entered wrong choice! {userOption} is not in the options!\n")
                continue

            return userOption

        except ValueError:
            cls()
            print("The choice you have entered is not a number!!!\n")


# URL VALIDATION
def validate_url(url: str) -> bool:
    pattern = re.compile(
        r'^(https?://)'
        r'([a-zA-Z0-9.-]+)'
        r'(\.[a-zA-Z]{2,})'
        r'(:\d+)?'
        r'(\/.*)?$'
    )
    return bool(pattern.match(url))


# Scrape Menu
def newScrape():
    print('Enter "cancel" any time to stop and go back.\n')

    def ask(prompt):
        value = input(prompt).strip()
        if value.casefold() == "cancel":
            print("\nOperation canceled. Returning to menu...\n")
            return None
        return value

    raw_name = ask("Enter a name (leave empty for auto-name): ")
    if raw_name is None:
        return None

    name = raw_name if raw_name else None

    # URL
    while True:
        raw_url = ask("\nEnter URL (Example: https://google.com): ")
        if raw_url is None:
            return None

        if not raw_url:
            print("URL cannot be empty.\n")
            continue

        if validate_url(raw_url):
            url = raw_url
            break
        else:
            print("\n[ERROR] Invalid URL format.\n")
            continue

    cls()

    print("New Scrape Job Created!\n")
    print(f" Name: {name if name else '[AUTO DETECT]'}")
    print(f" URL:  {url}\n")

    return {"name": name, "url": url}


# List Menu
def listMenu(storage: StorageManager):
    sites = storage.list_sites()

    print("0. Go back\n")

    if not sites:
        print("(No scraped sites yet)\n")
        return

    for index, site in enumerate(sites, 1):
        print(f"{index}. {site.name} - {site.url}")

    print()



# MAIN PROGRAM FLOW

storage = StorageManager()
scraper = WebScraper()

while True:
    option = userMainGuide()

    if option == 0:
        break

    # Scrape new site
    elif option == 1:
        data = newScrape()
        if not data:
            continue

        # if no name → generate name from domain
        site_name = data["name"]
        if site_name is None:
            domain = data["url"].replace("https://", "").replace("http://", "")
            domain = domain.split("/")[0]
            site_name = domain

        # Create Site object
        site = Site.create(site_name, data["url"])

        # Save site metadata
        storage.save_site(site)

        # Scrape process
        print("\nScraping started...\n")
        scraper.scrape(site)
        print("\nScraping completed!\n")

    # List saved sites
    elif option == 2:
        listMenu(storage)