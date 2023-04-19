#!/usr/bin/env python3
"""
Basic Caching
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """caching system that inherits from BaseCaching.
    """

    def put(self, key, item):
        """adding a key/value pair to the cache
        """
        if key or item:
            self.cache_data[key] = item

    def get(self, key):
        """
        Retrieveing a value from the cache
        """
        if key in self.cache_data:
            return self.cache_data[key]
        else:
            return None
