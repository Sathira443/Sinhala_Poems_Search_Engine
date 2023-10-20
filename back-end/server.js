const express = require("express");
const elasticsearch = require("elasticsearch");
const path = require("path");

const app = express();

const port = 5000;

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
});

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello, World!");
});

app.get("/getAll", (req, res) => {
  client
    .search({
      index: "sinhala-metaphor-poems",
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
      res.status(500).json({ error: "Error retrieving all the data" });
    });
});

app.post("/searchByMeaning", async (req, res) => {
  const meaning = await req.body.meaning;

  client
    .search({
      index: "sinhala-metaphor-poems",
      body: {
        query: {
          match: {
            "meaning": meaning,
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

app.post("/searchByMetaphoricalTerm", async (req, res) => {
  const metaphoricalTerm = await req.body.metaphorical_term;
  
  client
    .search({
      index: "sinhala-metaphor-poems",
      body: {
        query: {
          match: {
            "metaphorical_term": metaphoricalTerm,
          }
        }
      }
    })
    .then((response) => {
      res.json(response.hits.hits);
      // const hits = response.hits.hits;
      // const poems = hits.map((hit) => hit._source.poems_text);
      // res.json({ poems });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving metaphorical term" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
