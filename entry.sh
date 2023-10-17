#!/bin/bash

# Start Elasticsearch in the background
elasticsearch &

# Function to check if Elasticsearch is ready
wait_for_elasticsearch() {
  until curl -s "http://localhost:9200" | grep "number_of_nodes" > /dev/null; do
    echo "Waiting for Elasticsearch to start..."
    sleep 5
  done
}

# Wait for Elasticsearch to start
wait_for_elasticsearch

# Start Kibana in the background
kibana &

# Function to check if Kibana is ready
wait_for_kibana() {
  until curl -s "http://localhost:5601/status" | grep "Kibana server is not ready yet" > /dev/null; do
    echo "Waiting for Kibana to start..."
    sleep 5
  done
}

# Wait for Kibana to start
wait_for_kibana

# Delete the existing index, create a new index with a mapping, and insert data
curl -X DELETE "http://localhost:9200/sinhala-metaphor-poems?pretty" && \
curl -X PUT "http://localhost:9200/sinhala-metaphor-poems?pretty" -H "Content-Type: application/json" -d @/usr/share/elasticsearch/mapping.json && \
curl -X POST "http://localhost:9200/sinhala-metaphor-poems/_bulk?pretty" -H "Content-Type: application/json" --data-binary @/usr/share/elasticsearch/data.json

# Keep the script running
tail -f /dev/null
