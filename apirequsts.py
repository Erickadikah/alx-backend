import requests
import pandas as pd


baseurl = 'https://rickandmortyapi.com/api/'
endpoint = 'character'

def main_requests(baseurl, endpoint, x):
    r = requests.get(baseurl + endpoint + f'?page={x}')
    return r.json()

def get_pages(response):
    pages = data['info']['pages']
    return pages


def parse_json(response):
    charlist = []
    for item in response['results']:
        char = {
            'id': item['id'],
            'name': item['name'],
            'no_episodes': (item['episode']),
        }#printint in dictionary

        charlist.append(char)
    return charlist

mainlist = []
data = main_requests(baseurl, endpoint, 1)
for x in range(1, get_pages(data)+1):#get page data
    print(x)
    mainlist.extend(parse_json( main_requests(baseurl, endpoint, x)))

df = pd.DataFrame(mainlist)

print(df.head(), df.tail())

df.to_csv('charlist.csv', index=False)
