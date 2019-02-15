#/bin/bash

sudo apt update
sudo apt install apache2 -y
sudo ufw allow in "Apache Full"

# Apache installed

sudo apt install mysql-server -y
sudo mysql_secure_installation


# MySQL Server installed

wait 5

sudo service apache2 restart
