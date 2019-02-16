#/bin/bash

# Git clone
cd /vagrant
mkdir repo
cd repo
git remote add team git@github.com:illinoistech-itm/2019-team-09f.git
git pull team master --force


#Start app
sudo chown vagrant:vagrant /home/vagrant/.pm2/rpc.sock /home/vagrant/.pm2/pub.sock
sudo pm2 stop 0
sudo pm2 start /vagrant/repo/app/index.js