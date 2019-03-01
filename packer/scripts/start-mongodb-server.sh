#!/bin/bash


# Create mongodb config
sudo chown vagrant /etc/mongod.conf
sudo cat <<EOT > /etc/mongod.conf
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1, mongodb-server


# how the process runs
processManagement:
  timeZoneInfo: /usr/share/zoneinfo

#security:

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options:

#auditLog:

#snmp:

setParameter:
   enableLocalhostAuthBypass: false

EOT

sudo cat <<EOT > ~/mongofile.js
use admin
db.createUser({
  user: "production-root",
  pwd: "production-root",
  roles: ["root"]
});

db = db.getSiblingDB("production-db");
db.createUser({
  user: "production-user",
  pwd: "production-password",
  roles: ["readWrite"]
});
db.createCollection("sample");
db.sample.insert({ word: "hi" });
EOT

mongod --fork --logpath /var/log/mongodb.log --config /etc/mongod.conf 

mongo < ~/mongofile.js