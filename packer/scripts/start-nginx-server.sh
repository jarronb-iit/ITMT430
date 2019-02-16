#/bin/bash

# Start nginx web server
sudo systemctl stop nginx.service
sudo nginx

echo "Nginx server running..."
echo "website running at: 192.168.50.11:80"