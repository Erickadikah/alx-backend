#!/usr/bin/env python3
"""FIFOCache
"""

from base_caching import BaseCaching

class FIFOCache(BaseCaching):
    """class FIFO
    """

    def __init__(self):
        """Calling the super class
        """
        super().__init__()
        self.item_order = []

    def put(self, key, item):
        """assigns to the dictionary self.cache_data the item value for the key key.
            If key or item is None, this method should not do anything.
            If the number of items in self.cache_data is higher that BaseCaching.MAX_ITEMS:
            discard the first item put in cache (FIFO algorithm)
            prints DISCARD: with the key discarded and following by a new line
        """
        if key is None or item is None:
            return
        if len(self.cache_data) >= self.MAX_ITEMS:
            oldest_key = self.item_order.pop(0)
            del self.cache_data[oldest_key]
            print("DISCARD: {}".format(oldest_key))

        self.cache_data[key] = item
        self.item_order.append(key)

    def get(self, key):
        if key in self.cache_data:
            self.item_order.remove(key)
            self.item_order.append(key)
            return self.cached_data[key]
        else:
            return None
