## Building project
- [API documentation](https://illinoistech-itm.github.io/2019-team-09f/)

### First generate an rsa key

1. [Generate a new ssh key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux)

2. Add your deploy key to your to this repo's settings by coping your \*.pub file

### Build vms

1. Make sure your have already forked and clones this repo
2. cd into the project
3. Add you rsa private key in the node-application-server directory

   ![Node directory screenshot](images/node-directory.PNG)

4. Install Vagrant Plugin:

```
vagrant plugin install vagrant-vbguest
```

5. Run build script:

```
bash bulid-everything.sh
```
