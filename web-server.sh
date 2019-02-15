#/bin/bash

sudo apt update
sudo apt install apache2
sudo ufw allow in "Apache Full"
sudo service apache2 restart
