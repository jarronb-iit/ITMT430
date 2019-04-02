<# Destroy VMS if exist #>

<# Destroy & rebuild node server #>
cd ../../vms/node-application-server/ -or

Write-Host y | vagrant destroy
Write-Host "[NODE] Server destroyed..."


<# Destroy & rebuild nginx server #>
cd ../../nginx-web-server/ -or

Write-Host y | vagrant destroy
Write-Host "[NGINX] Server destroyed..."


<# Destroy & rebuild mongodb server #>
cd ../../mongodb-server/ -or

Write-Host y | vagrant destroy
Write-Host "[MONGODB] Server destroyed..."

<# Destroy & rebuild mongodb rep1 server #>
cd ../../mongodb-rep1-server/ -or

Write-Host y | vagrant destroy
Write-Host "[MONGODB REP1] Server destroyed..."

<# Destroy & rebuild redis server #>
cd ../../redis-caching-server/ -or

Write-Host y | vagrant destroy
Write-Host "[REDIS] Server destroyed..."

<# Remove servers if exist #>
vagrant box remove nginx-web-server
Write-Host "[NGINX] Vagrant box removed..."

vagrant box remove node-application-server
Write-Host "[NODE] Vagrant box removed..."

vagrant box remove mongodb-server
Write-Host "[MONGODB] Vagrant box removed..."

vagrant box remove mongodb-rep1-server
Write-Host "[MONGODB REP1] Vagrant box removed..."

vagrant box remove redis-caching-server
Write-Host "[REDIS] Vagrant box removed..."
