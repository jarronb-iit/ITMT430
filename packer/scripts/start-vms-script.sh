#/bin/bash

cd ../vms/node-application-server/

vagrant up --provision

cd ../nginx-web-server/

vagrant up --provision
echo "Web application can be viewed here: http://192.168.50.12:80"