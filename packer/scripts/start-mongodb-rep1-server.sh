#!/bin/bash

sudo mongod --fork --logpath /var/log/mongodb.log --config /etc/mongod.conf --replSet rs0 --enableMajorityReadConcern