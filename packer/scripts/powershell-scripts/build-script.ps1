# Destroy and Remove VMS if exist
./remove-vms.ps1

# Build each Server
cd ../../vanilla-install/ || exit 1

packer build -force all-servers.json || exit 1
echo "[PACKER] build finished..."
