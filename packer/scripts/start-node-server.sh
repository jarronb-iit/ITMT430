#/bin/bash

#Start app
sudo chown vagrant:vagrant /home/vagrant/.pm2/rpc.sock /home/vagrant/.pm2/pub.sock
pm2 start /home/vagrant/hello.js