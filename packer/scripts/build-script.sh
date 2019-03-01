#!/bin/bash

# Destroy and Remove VMS if exist
bash ./remove-vms.sh

# Build each Server
cd ../vanilla-install/ || exit 1

packer build all-servers.json || exit 1 

# Add all vms to Vagrant
bash ./add-all-vms.sh

