#!/bin/bash

# Git clone
rm -rf /vagrant/repo
mkdir /vagrant/repo
git clone -b jarrono-dev git@github.com:illinoistech-itm/2019-team-09f.git /vagrant/repo/

cd /vagrant/repo/app/server
sudo npm run npm-install-linux

#Start app
# sudo chown vagrant:vagrant /home/vagrant/.pm2/rpc.sock /home/vagrant/.pm2/pub.sock
# sudo pm2 stop 0
# sudo pm2 start /vagrant/repo/app/index.js
cd server;
npm run production-server