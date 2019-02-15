#/bin/bash

cd ../vms/node-application-server/

vagrant up --provision

cd ../nginx-web-server/

vagrant up --provision