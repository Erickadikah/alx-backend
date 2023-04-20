# Back-End Implementation

The back-end is implemented in Python using the Flask framework. The back-end is responsible for the following:

* Serving the front-end
* Serving the API
* Pagination
* Caching

# Pagination

The pagination is implemented using the `offset` and `limit` parameters. The `offset` parameter is the number of items to skip and the `limit` parameter is the number of items to return. The `offset` parameter is optional and defaults to 0. The `limit` parameter is optional and defaults to 10. The `limit` parameter is capped at 100.

# Caching

The caching is implemented using the `Cache-Control` header. The `Cache-Control` header is set to `max-age=3600` which means that the response will be cached for 1 hour. The `Cache-Control` header is set to `no-cache` when the `offset` parameter is set. This means that the response will not be cached when the `offset` parameter is set.

## Task 1

[]: # Path: README.md

## Task 2

[]: # Path: README.md

## Task 3

[]: # Path: README.md

## Task 4

[]: # Path: README.md


## Pagination

[]: # Path: README.md

# API



The API is implemented using the `api` blueprint. The API is responsible for the following:
