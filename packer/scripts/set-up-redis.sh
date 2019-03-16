#!/bin/bash

# Update the apt-get package lists
sudo apt-get update
sudo apt install build-essential
sudo apt install net-tools


# Add derver to hostname
sudo chown vagrant /etc/hosts
echo "192.168.50.11  nginx-web-server" >> /etc/hosts
echo "192.168.50.12  node-application-server" >> /etc/hosts
echo "192.168.50.13  mongodb-server" >> /etc/hosts
echo "192.168.50.14  mongodb-rep1-server" >> /etc/hosts
echo "192.168.50.15  redis-caching-server" >> /etc/hosts