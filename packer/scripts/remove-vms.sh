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

# Destroy & rebuild mongodb rep1 server
cd ../mongodb-rep1-server/ || exit 1

echo y | vagrant destroy
echo "Mongodb-rep1-server destroyed"

# Destroy & rebuild redis server
cd ../redis-caching-server/ || exit 1

echo y | vagrant destroy
echo "Redis-caching-server destroyed"

# Remove servers if exist
vagrant box remove nginx-web-server

vagrant box remove node-application-server

vagrant box remove mongodb-server

vagrant box remove mongodb-rep1-server

vagrant box remove redis-caching-server