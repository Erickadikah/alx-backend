const express = require('express');
const app = express();

const users = [
    { id: 1, name:'Users 1'},
    { id: 2, name:'Users 2'},
    { id: 3, name:'Users 3'},
    { id: 4, name:'Users 4'},
    { id: 5, name:'Users 5'},
    { id: 6, name:'Users 6'},
    { id: 7, name:'Users 7'},
]

//middleware
app.get('/posts', paginatedResults(posts) (req, res) => {
});
app.get('/users', (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(request.query.limit);

  // start index and end index
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  //check if there is a next page
  if (endIndex < users.length) {

    results.next = {
      page: page + 1,
      limit: limit
    }
  }

  //check if there is a previous page
  if (startIndex > 0) {
  results.previous = {
    page: page - 1,
    limit: limit
  }
}
  //querry index
  results.resultsUsers = users.slice(startIndex, endIndex);
  res.json(results);
});


//middleware function
function paginatedResults(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    // start index and end index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    //check if there is a next page
    if (endIndex < model.length) {

      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    //check if there is a previous page
    if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }
    //querry index
    results.results = model.slice(startIndex, endIndex);
    res.paginatedResults = results;
    next();
  }
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
