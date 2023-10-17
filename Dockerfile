# Use the official Elasticsearch and Kibana images as the base image
FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.0 AS elasticsearch
FROM docker.elastic.co/kibana/kibana:7.10.0 AS kibana

USER 0

# Set environment variables for Elasticsearch and Kibana
ENV ELASTICSEARCH_URL=http://elasticsearch:9200

# Install any plugins or configure settings as needed
# COPY elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml
# COPY kibana.yml /usr/share/kibana/config/kibana.yml

# Copy your mapping and data JSON files to appropriate locations
COPY mapping_file.json /usr/share/elasticsearch/mapping_file.json
COPY data_file_sinhala.json /usr/share/elasticsearch/data_file_sinhala.json

# Create an entry script to start Elasticsearch and perform data setup
COPY entry.sh /usr/share/elasticsearch/entry.sh
RUN chmod +x /usr/share/elasticsearch/entry.sh

# Start Elasticsearch using the entry script
CMD ["/usr/share/elasticsearch/entry.sh"]