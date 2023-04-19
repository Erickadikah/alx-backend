#!/usr/bin/env python3
"""Class MRUCache
    we are finding the index of the MRU and deleting it from the array
"""

from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """Class MRU cache keeps track of the oder in which items ara
        accesed
    """

    def __init__(self):
        """Class constructor
        """
        super().__init__()
        self.data = []

    def put(self, key, item):
        """Most Recent Used deletes the least recent used data
           which is stored at the begining of the array
           then pop() is performed on the data key and its key is deleted
        """
        if key is None or item is None:
            return
        if key in self.cache_data:
            self.data.remove(key)
        else:
            if len(self.cache_data) >= self.MAX_ITEMS:
                mru_key = self.data.pop(3)
                del self.cache_data[mru_key]
                print("DISCARD: {}".format(mru_key))

        self.cache_data[key] = item
        self.data.append(key)

    def get(self, key):
        if key in self.cache_data:
            self.data.remove(key)
            self.data.append(key)
            return self.cache_data[key]
        else:
            return None
