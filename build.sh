#/bin/bash

cd packer/vanilla-install/

packer build nginx-node-servers.json

cd ../build/

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server

vagrant box add ./node-application-server-virtualbox.box --name node-application-server

cd ../vms/node-application-server/

vagrant up

cd ../nginx-web-server/

vagrant up