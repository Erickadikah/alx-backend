#!/usr/bin/python3

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """Class LRU cache keeps track of the oder in which items are
        accesed
    """

    def __init__(self):
        """Calling super class
        """
        super().__init__()
        self.data = []

    def put(self, key, item):
        """Least Recent Used deletes the least recent used data
           which is stored at the begining of the array
           then pop() is performed on the data key and its key is deleted
        """
        if key is None or item is None:
            return
        if len(self.cache_data) >= self.MAX_ITEMS:
            oldest_key = self.data.pop(0)
            del self.cache_data[oldest_key]
            print("DISCARD: {}".format(oldest_key))

        self.cache_data[key] = item
        self.data.append(key)

    def get(self, key):
        """key is None or if the key doesn’t exist 
            in self.cache_data, return None.
        """
        if key in self.cache_data:
            self.data.remove(key)
            self.data.append(key)
            return self.cache_data[key]
        else:
            return None
