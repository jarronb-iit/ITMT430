#/bin/bash

# Destroy VMS if exist

# Destroy & rebuild node server
cd ../vms/node-application-server/ || exit 1

echo y | vagrant destroy


# Destroy & rebuild nginx server
cd ../nginx-web-server/ || exit 1

echo y | vagrant destroy


# Destroy & rebuild mongodb server
cd ../mongodb-server/ || exit 1

echo y | vagrant destroy


# Build each Server
cd ../../vanilla-install/ || exit 1

packer build all-servers.json || exit 1 

cd ../build/ || exit 1


# Remove servers if exist then add them again
vagrant box remove nginx-web-server

vagrant box remove node-application-server

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server || exit 1

vagrant box add ./node-application-server-virtualbox.box --name node-application-server || exit 1

vagrant box add ./mongodb-server-virtualbox.box --name mongodb-server || exit 1