# Running Roomie Project

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

### Project apis

- [API documentation](https://illinoistech-itm.github.io/2019-team-09f/)

### First generate an rsa key

1. [Generate a new ssh key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux)

2. Add your deploy key to your to this repo's settings by copying your \*.pub file

3. Name your private key **id_rsa_github_deploy_key** and remember its location.

___

### Build VMS

1. Make sure your have already forked and clones this repository
2. Change into the project folder
3. Add you rsa private key in the node-application-server directory

   ![Node directory screenshot](images/node-directory.PNG)

   ```
   cd packer/vms/node-application-server
   cp location-of-rsa ./
   ```

4. Install Vagrant Plugin:

```
vagrant plugin install vagrant-vbguest
```

5. Run build script:

```
bash bulid-everything.sh
```

Initial Build time is around 45-90 minutes. After the project, install all the proper dependencies.

### Running The Project

After the project builds, it is time to run. Switch to the directory containing the server for the project and install dependencies to verify your file is ready to run.

```
cd app/server
npm install
```
In the event that any errors pop up after running npm install, run

```
npm audit
```

Lastly, run the following command:

```
npm run dev
```
If on a linux device, use the following command instead:
```
npm run dev-linux
```
The project should then open in your default browser.



In the event that the project still refuses to run after the initial install and audit, change to app/client and run

```
npm install
npm audit
```

before returning back to app/server and running

```
npm run dev
```
