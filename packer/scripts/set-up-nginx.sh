#!/bin/bash

# Steps captured from https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04vagr
# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04

# Set-up Nginx reverse proxy web server

# #update the apt-get package lists
sudo apt-get update
sudo apt install net-tools

# Install Nginx
# https://askubuntu.com/questions/394746/apt-get-purge-install-nginx-reports-success-but-not-installed-12-04
sudo apt-get purge nginx-common -y
sudo apt-get install nginx -y

# This profile opens only port 80 (normal, unencrypted web traffic)
# sudo ufw allow 'Nginx Full'

# # Enable firewall
# echo y | sudo ufw enable

# echo | sudo ufw status

# command to retuen ip address
# ip addr show enp0s8 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'

# Add derver to hostname
sudo chown vagrant /etc/hosts
echo "192.168.50.11  nginx-web-server" >> /etc/hosts
echo "192.168.50.12  node-application-server" >> /etc/hosts
echo "192.168.50.13  mongodb-server" >> /etc/hosts

# # Accessing http://10.0.2.15:5000 via a web browser would send the request to
# # the application server's private IP address on port 8080, which would be
# # received and replied to by the Node.js application.

# https://www.scaleway.com/docs/how-to-configure-nginx-reverse-proxy/

sudo chown vagrant /etc/nginx/sites-available/
sudo unlink /etc/nginx/sites-enabled/default

cd /etc/nginx/sites-available
sudo touch reverse-proxy.conf

# Give ownership over file
sudo chown vagrant /etc/nginx/sites-available/reverse-proxy.conf

# Create reverse proxy config
cat <<EOT > /etc/nginx/sites-available/reverse-proxy.conf
server {
    listen nginx-web-server:80;

    server_name nginx-web-server;

    location / {
        proxy_pass http://node-application-server:8080;
        proxy_http_version 1.1;
        proxy_set_header Connection 'upgrade';
    }
}
EOT

echo "Nginx reverse-proxy config done..."

# Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled using a symbolic link.
sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
echo "Symbolic link created..."

#Add repository for certbot
sudo add-apt-repository ppa:certbot/certbot

#Install certbot
sudo apt install python-certbot-nginx

#Allow HTTPS traffic
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

#Certify server_name silently with https redirect
sudo certbot --nginx -d nginx-web-server -d www.nginx-web-server.com --non-interactive --agree-tos -m sp19.itmd430.capstone@gmail.com -2

#Test renewal process
sudo certbot renew --dry-run
