## Assumptions

1. We are assuming that when running this program, you are utilizing a terminal that enables bash. If you are using a Windows Computer, we recommend installing [Git Bash Terminal](http://www.techoism.com/how-to-install-git-bash-on-windows/)

2. If you are Launching this on a Linux OS, there are a few issues that may arise if the following specific versions of a program isn't installed.
  - Vagrant Version 2.2.4 or Higher [Install Tutorial](https://computingforgeeks.com/install-latest-vagrant-on-ubuntu-18-04-debian-9-kali-linux/)
  - No Program Configured to run Vagrant
    - If Another program is configured to be presented as an option for vagrant, I.E. Ruby, please remove or reconfigure your vagrant settings.


3. The following Software is available on your host machine:
  - Packer
  - Vagrant
  - VirtualBox    
____

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
