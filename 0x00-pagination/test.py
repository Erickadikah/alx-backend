import requests

DATA_FILE = "Popular_Baby_Names.csv"

r = requests.get(DATA_FILE)

data = r.json()

print(data)
