#!/usr/bin/env python3
"""this function returns a tuple of two size two containing start index
    and an end index
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> tuple:
    """Calculating the starting and the endng indexes of the dataset
        page -1 : calculates the starting index of the data for a given page
        python index starts from 0 thats why we subtract 1
        therefore shifting th number by 1 before multyplying the pages
    """

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
