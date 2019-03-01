#!/bin/bash

# Add servers
cd ../build/ || exit 1

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server || exit 1

vagrant box add ./node-application-server-virtualbox.box --name node-application-server || exit 1

vagrant box add ./mongodb-server-virtualbox.box --name mongodb-server || exit 1