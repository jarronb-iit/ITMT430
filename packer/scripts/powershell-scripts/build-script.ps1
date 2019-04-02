<# Destroy and Remove VMS if exist #>
./remove-vms.ps1

<# Build each Server #>
cd ../../vanilla-install/ -or

packer build -force all-servers.json -or
Write-Host "[PACKER] build finished..."
