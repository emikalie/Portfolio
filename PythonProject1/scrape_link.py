import requests
from bs4 import BeautifulSoup
import os

url = "http://www.textfiles.com/directory.html"
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all links in the page
    links = soup.find_all('a')

    for link in links:
        href = link.get('href')
        if href and href.endswith('.txt'):
            full_url = url + href  # Make sure the URL is complete
            print(f"Downloading: {full_url}")

            file_response = requests.get(full_url)
            if file_response.status_code == 200:
                filename = os.path.basename(href)  # get just the filename
                with open(filename, "w", encoding="utf-8") as f:
                    f.write(file_response.text)
                print(f"✅ Saved: {filename}")
            else:
                print(f"❌ Failed to download {full_url}")
else:
    print("Failed to fetch the directory page.")
