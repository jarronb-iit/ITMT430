<# Destroy and Remove VMS if exist #>
./remove-vms.ps1

<# Build each Server #>
cd ../../vanilla-install/

packer build -force all-servers.json
Write-Host "[PACKER] build finished..."
