#!/bin/bash

cd ../vms/nginx-web-server/

vagrant up --provision

cd ../mongodb-server/

vagrant up --provision

cd ../mongodb-rep1-server/

vagrant up --provision

cd ../node-application-server/

vagrant up --provision

cd ../redis-caching-server/

vagrant up --provision

echo "Web application can be viewed here: http://localhost:8080"