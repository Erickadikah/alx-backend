# Caching

The caching is implemented using the `Cache-Control` header. The `Cache-Control` header is set to `max-age=3600` which means that the response will be cached for 1 hour. The `Cache-Control` header is set to `no-cache` when the `offset` parameter is set. This means that the response will not be cached when the `offset` parameter is set.
## Example

The following example shows the `Cache-Control` header when the `offset` parameter is not set:

```bash
$ curl -I http://localhost:5000/api/v1/resources/books/all
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 1000
Server: Werkzeug/0.14.1 Python/3.6.5
Date: Mon, 18 Mar 2019 19:00:00 GMT
Cache-Control: max-age=3600
```

The following example shows the `Cache-Control` header when the `offset` parameter is set:

```bash
$ curl -I http://localhost:5000/api/v1/resources/books/all?offset=10
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 1000
Server: Werkzeug/0.14.1 Python/3.6.5
Date: Mon, 18 Mar 2019 19:00:00 GMT
Cache-Control: no-cache
```
