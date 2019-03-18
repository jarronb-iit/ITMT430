#/bin/bash

# Halt VMS
cd ../vms/node-application-server/

vagrant halt

echo "node-application-server shutdown..."


# Halt nginx server
cd ../nginx-web-server/

vagrant halt

echo "nginx-web-server shutdown..."

# Halt mongodb server
cd ../mongodb-server/

vagrant halt

echo "mongodb server shutdown..."

# Halt mongodb rep1 server
cd ../mongodb-rep1-server/

vagrant halt

echo "mongodb rep1 server shutdown..."

# Halt redis caching server
cd ../mongodb-server/redis-caching-server/

vagrant halt

echo "mongodb server shutdown..."
