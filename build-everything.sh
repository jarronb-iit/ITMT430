#/bin/bash

vagrant plugin install vagrant-vbguest
cd packer/scripts/
bash build-script.sh
bash add-all-vms.sh
bash start-vms-script.sh