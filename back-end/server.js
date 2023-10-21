const express = require("express");
const elasticsearch = require("elasticsearch");
const path = require("path");

const app = express();

const port = 5000;

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
});

app.use(express.json());

app.get("/getAll", (req, res) => {
  client
    .search({
      index: "sinhala-metaphor-poems",
      body: {
        size: 100,
        query: {
          bool: {
            must: [
              {
                match: {
                  metaphor_present: "yes"
                }
              }
            ]
          }
        },
      },
    })
    .then((response) => {
      res.json(response.hits.hits);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving all the data" });
    });
});

app.get("/search", async (req, res) => {
  console.log(req.query);
  const meaning = await req.query.meaning;
  const metaphorical_term = await req.query.metaphorical_term;

  client
    .search({
      index: "sinhala-metaphor-poems",
      body: {
        query: {
          bool:{
            should:[
              {
                match:{
                  metaphorical_term: metaphorical_term
                }
              },
              {
                match:{
                  meaning: meaning
                }
              }
            ]
          }
          
        }
      }
    })
    .then((response) => {
      res.json(response.hits.hits);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving meaning" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
