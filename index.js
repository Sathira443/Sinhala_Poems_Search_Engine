const express = require("express");
const elasticsearch = require("elasticsearch");

const app = express();

const port = 3000;

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
});

app.use(express.json());

app.get("/metaphor-search-engine", (req, res) => {
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

app.get("/searchByTarget", async (req, res) => {
  const targetMetaphore = await req.body.targetMetaphore;

  client
    .search({
      index: "sinhala-metaphor-poems",
      body: {
        query: {
          match: {
            "target_metaphor": targetMetaphore,
          }
        }
      }
    })
    .then((response) => {
      res.json(response.hits.hits);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving target data" });
    });
});

app.get("/searchBySource", async (req, res) => {
  const sourceMetaphore = await req.body.sourceMetaphore;
  
  client
    .search({
      index: "sinhala-metaphor-poems",
      body: {
        query: {
          match: {
            "source_metaphor": sourceMetaphore,
          }
        }
      }
    })
    .then((response) => {
      res.json(response.hits.hits);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving source data" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
