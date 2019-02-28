#!/bin/bash

# Destroy and Remove VMS if exist
bash ./remove-vms.sh

# Build each Server
cd ../vanilla-install/ || exit 1

packer build all-servers.json || exit 1 

cd ../build/ || exit 1

# Add servers

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server || exit 1

vagrant box add ./node-application-server-virtualbox.box --name node-application-server || exit 1

vagrant box add ./mongodb-server-virtualbox.box --name mongodb-server || exit 1