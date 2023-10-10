const express = require('express');
const app = express();
const port = 3000;
const elasticsearch = require('elasticsearch'); // Import the elasticsearch library

const client = new elasticsearch.Client({
  host: 'http://localhost:9200', // Adjust the Elasticsearch server URL as needed
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create a new route to retrieve data from Elasticsearch
app.get('/amazon-reviews', (req, res) => {
  // Use the Elasticsearch client to perform a match_all query
  client.search({
    index: 'amazon-reviews',
    body: {
      query: {
        match_all: {},
      },
    },
  })
    .then((response) => {
      res.json(response.hits.hits);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving data from Elasticsearch' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
