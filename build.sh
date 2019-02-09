#/bin/bash

cd packer/vms/node-application-server/ || exit 1

echo y | vagrant destroy

cd ../nginx-web-server/ || exit 1

echo y | vagrant destroy

cd ../../vanilla-install/ || exit 1

packer build nginx-node-servers.json || exit 1 

cd ../build/ || exit 1

vagrant box remove nginx-web-server

vagrant box remove node-application-server

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server || exit 1

vagrant box add ./node-application-server-virtualbox.box --name node-application-server || exit 1