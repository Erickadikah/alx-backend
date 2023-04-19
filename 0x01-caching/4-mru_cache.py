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
            Args:
                key(str): key of the item to add
                item: item to add
        Returns: None
        """
        if key and item:
            self.cache_data[key] = item
        if key not in  self.data:
            self.data.append(key)
        else:
            self.data.remove(key)
            self.data.append(key)
        if len(self.data) > BaseCaching.MAX_ITEMS:
            mru = self.data.pop(-2)
            del self.cache_data[mru]
            print("DISCARD: {}".format(mru))

    def get(self, key):
        """return the value in self.cache_data linked to key
            key is None or if the key doesn’t exist in
            self.cache_data, return None
        """
        if key:
            if key in self.cache_data:
                self.data.remove(key)
                self.data.append(key)
                return self.cache_data[key]
            return None
