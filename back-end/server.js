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
                  metaphor_present: "yes",
                },
              },
            ],
          },
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
  const meaning = await req.query.meaning;
  const metaphorical_term = await req.query.metaphorical_term;

  let queryBody = {
    index: "sinhala-metaphor-poems",
    body: {
      size: 100,
      query: {
        bool: {
          should: [],
        },
      },
    },
  };

  if (metaphorical_term) {
    queryBody.body.query.bool.should.push({
      match: {
        metaphorical_term: metaphorical_term,
      },
    });
  }

  if (meaning) {
    queryBody.body.query.bool.should.push({
      match: {
        meaning: meaning,
      },
    });
  }

  if (queryBody.body.query.bool.should.length === 0) {
    queryBody.body.query = {
      bool: {
        must: [
          {
            match: {
              metaphor_present: "yes",
            },
          },
        ],
      },
    };
  }

  client
    .search(queryBody)
    .then((response) => {
      res.json(response.hits.hits);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving meaning" });
    });
});

app.post('/insert', async (req, res) => {
  try {
    const document = req.body;

    const response = await client.index({
      index: "sinhala-metaphor-poems",
      body: document,
    });

    res.json({ result: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error inserting document into Elasticsearch.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
