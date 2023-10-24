# Sinhala Kavi Sanchaya - Sinhala Poems Search Engine

Sinhala Kavi Sanchaya is an innovative application that aims to provide a user-friendly metaphor search engine for poets and literary enthusiasts in the Sinhala-speaking community. This README file will provide an overview of the project and how to set it up and use it.

## Frontend
The frontend of the Sinhala Poems Search Engine is hosted at [https://sinhala-poems-search-engine-frontend.onrender.com](https://sinhala-poems-search-engine-frontend.onrender.com). This is the user interface where you can search for Sinhala poems using metaphors.

## Backend
The backend of the Sinhala Poems Search Engine is hosted at [https://sinhala-poems-search-engine-backend.onrender.com](https://sinhala-poems-search-engine-backend.onrender.com). The backend is responsible for handling user requests, communicating with the Elasticsearch cluster, and returning search results to the frontend.

## Elasticsearch
Elasticsearch (ES) is a powerful and scalable search engine that is used to store and search Sinhala poems based on metaphors. The Elasticsearch cluster for this project is hosted at the following URL: [https://aava9ugu07:dc99jwhfa@sinhala-poem-search-8504946134.us-east-1.bonsaisearch.net/](https://aava9ugu07:dc99jwhfa@sinhala-poem-search-8504946134.us-east-1.bonsaisearch.net)


This Elasticsearch cluster is the heart of the search engine, where Sinhala poems are indexed and can be searched using metaphors.

## Setting Up the Sinhala Poems Search Engine

To set up the Sinhala Poems Search Engine locally or deploy it to your own environment, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/sinhala-poems-search-engine.git
```

2. Configure the Elasticsearch connection:

Replace the Elasticsearch cluster URL in the backend configuration with your own if needed.

3. Navigate to the frontend directory and run the frontend application:

```bash
cd front-end
npm install
npm start
```

4. Navigate to the backend directory and run the backend application:
```bash
cd back-end
npm install
npm run dev
```

5. Open your web browser and go to http://localhost:3000 to access the frontend.

## Contact

For any questions or inquiries about the Sinhala Poems Search Engine, you can contact me at liyanapathiranasathira@gamil.com
