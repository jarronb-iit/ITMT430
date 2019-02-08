#/bin/bash

cd packer/vanilla-install/ || exit 1

packer build nginx-node-servers.json || exit 1 

cd ../build/ || exit 1

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server || exit 1

vagrant box add ./node-application-server-virtualbox.box --name node-application-server || exit 1

cd ../vms/node-application-server/ || exit 1

vagrant up || exit 1

cd ../nginx-web-server/ || exit 1

vagrant up || exit 1
