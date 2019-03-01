#!/bin/bash

# Destroy VMS if exist

# Destroy & rebuild node server
cd ../vms/node-application-server/ || exit 1

echo y | vagrant destroy
echo "Node-application-server destroyed..."


# Destroy & rebuild nginx server
cd ../nginx-web-server/ || exit 1

echo y | vagrant destroy
echo "Nginx-web-application destroyed..."


# Destroy & rebuild mongodb server
cd ../mongodb-server/ || exit 1

echo y | vagrant destroy
echo "Mongodb-server destroyed"

# Remove servers if exist then add them again
vagrant box remove nginx-web-server

vagrant box remove node-application-server

vagrant box remove mongodb-server