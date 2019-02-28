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
