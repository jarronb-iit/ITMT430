#!/bin/bash

# Git clone
rm -rf /vagrant/repo/
git clone git@github.com:illinoistech-itm/2019-team-09f.git /vagrant/repo/

cd /vagrant/repo/
git pull origin jarron-dev

# cd /vagrant/repo/app/server/; sudo npm install

# cd /vagrant/repo/app/client/; sudo npm install

cd /vagrant/repo/app/server
sudo npm run npm-install-linux

sudo chown vagrant:vagrant /home/vagrant/.pm2/rpc.sock /home/vagrant/.pm2/pub.sock

# # #Start app
# # # sudo chown vagrant:vagrant /home/vagrant/.pm2/rpc.sock /home/vagrant/.pm2/pub.sock
# sudo pm2 stop 0
# sudo NODE_ENV=production pm2 start /vagrant/repo/app/server/server.js

sudo npm run production-server