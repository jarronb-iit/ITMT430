<# Add Servers #>
cd ../../build/

vagrant box add ./nginx-web-server-virtualbox.box --name nginx-web-server
Write-Host "[NGINX] vagrant box added..."

vagrant box add ./node-application-server-virtualbox.box --name node-application-server
Write-Host "[NODE] vagrant box added..."

vagrant box add ./mongodb-server-virtualbox.box --name mongodb-server
Write-Host "[MONGODB] vagrant box added..."

vagrant box add ./mongodb-server-virtualbox.box --name mongodb-rep1-server
Write-Host "[MONGODB REP1] vagrant box added..."

vagrant box add ./redis-caching-server-virtualbox.box --name redis-caching-server
Write-Host "[REDIS] vagrant box added..."
