<# Halt VMS #>
cd ../../vms/node-application-server/

vagrant halt

Write-Host "[NODE] server shutdown..."


<# Halt nginx server #>
cd ../../nginx-web-server/

vagrant halt

Write-Host "[NGINX] server shutdown..."

<# Halt mongodb server #>
cd ../../mongodb-server/

vagrant halt

Write-Host "[MONGODB] server shutdown..."

# Halt mongodb rep1 server
cd ../../mongodb-rep1-server/

vagrant halt

Write-Host "[MONGODB REP1] server shutdown..."

<# Halt redis caching server #>
cd ../../redis-caching-server/

vagrant halt

Write-Host "[REDIS] server shutdown..."
