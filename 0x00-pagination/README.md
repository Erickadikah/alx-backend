# Pagination

* [simple_pagination.py](simple_pagination.py) - Simple pagination example
* [Hypermedia pagination](2-hypermedia_pagination.py) - Hypermedia pagination example
* [Deletion-resilient hypermedia pagination](3-deletion_resilient_hypermedia_pagination.py) - Deletion-resilient hypermedia pagination example
* [Pagination with Node.js](4-pagination_with_nodejs.py) - Pagination with Node.js example

## Simple pagination

The simplest way to paginate is to use the `skip` and `limit` parameters. For example, to get the first 10 results:

    GET /users?skip=0&limit=10