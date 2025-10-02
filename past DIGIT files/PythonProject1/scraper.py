import requests

url = "http://www.textfiles.com/apple/apples.txt"
response = requests.get(url)

if response.status_code == 200:
    text_content = response.text
    print(text_content[:500])  # just showing first 500 characters
    with open("apples.txt", "w", encoding="utf-8") as f:
        f.write(text_content)
else:
    print("❌ Failed to fetch the file")
