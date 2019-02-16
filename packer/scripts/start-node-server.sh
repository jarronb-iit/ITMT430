#/bin/bash

# Git clone
cd /home/vagrant
mkdir repo
cd repo
git clone git@github.com:illinoistech-itm/2019-team-09f.git


#Start app
sudo chown vagrant:vagrant /home/vagrant/.pm2/rpc.sock /home/vagrant/.pm2/pub.sock
pm2 start /home/vagrant/repo/app/index.js