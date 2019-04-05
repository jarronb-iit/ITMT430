vagrant plugin install vagrant-vbguest
cd packer/scripts/powershell-scripts
& .\build-script.ps1
& .\add-all-vms.ps1 -or exit 1
& .\start-vms-script.ps1
