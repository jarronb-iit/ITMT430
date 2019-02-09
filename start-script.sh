#/bin/bash

cd packer/vms/node-application-server/

vagrant up --provision

cd ../nginx-web-server/

vagrant up --provision