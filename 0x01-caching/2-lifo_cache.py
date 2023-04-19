#!/usr/bin/env python3
"""FIFOCache
"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """class FIFO
    """

    def __init__(self):
        """Calling the super class
        """
        super().__init__()
        self.cache_item_order_list = []

    def put(self, key, item):
        """assigns to the dictionary self.cache_data the
            item value for the key key.
            If key or item is None, this method should
            not do anything.
            If the number of items in self.cache_data is
            higher that BaseCaching.MAX_ITEMS:
            discard the first item put in cache (FIFO algorithm)
            prints DISCARD: with the key discarded
            and following by a new line

             Args:
            key: Key to be assigned a value
            value: Value to be assigned to the key

            Returns:
                None
        """
        if key and item:
            if key in self.cache_data:
                self.cache_item_order_list.remove(key)
                self.cache_data[key] = item
                self.cache_item_order_list.append(key)
            if len(self.cache_data) < self.MAX_ITEMS:
                self.cache_item_order_list.append(key)
                self.cache_data[key] = item
            else:
                oldest_key = self.cache_item_order_list.pop(-1)
                del self.cache_data[oldest_key]
                self.cache_data[key] = item
                self.cache_item_order_list.append(key)
                print("DISCARD: {}".format(oldest_key))

    def get(self, key):
        """Return the value associated with a
            key in the cache, or None if not found

        Args:
            key: Key for which the value is requested

        Returns:
            The value associated with the key, or None if not found
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
