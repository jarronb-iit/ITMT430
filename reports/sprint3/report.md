# Sprint 3 Report

## Roles

- Junior Developer - [Jarron Bailey](https://github.com/jarronb), [Theo Economos](https://github.com/teconomo)
- Lead Developer - [Giancarlo Barillas](https://github.com/giancarlobarillas)
- UI/UX - [Johnathan Garcia](https://github.com/)
- Project Manager - [Erick Cabrera](https://github.com/ecabrera796)
- Lead Developer - [Antoine Foggs](https://github.com/AFoggs)

## Sprint 3 Goals

Our goal for Sprint 3 was to finalize all that we need to start making our artboard designs come to life. We wanted to ensure we implement security now so we could have it ready for when we start creating our web pages. We also wanted to have our database schema drawn out so we could start building the database and populate it as we are building the web pages.

- Configure Node environment with [pm2](http://pm2.keymetrics.io/)
  - pm2 is an advanced process manger for Node.js with a built in load balance. It allows you to keep applications alive forever, to reload them without downtime and facilitate common DevOps tasks.  
    ![pm2 screenshot](../../images/sprint2/pm2.PNG)
- Database Schema Creation
  - Decide on database Schema and input types
- Login authentication with [Passport.js](http://www.passportjs.org/)
  - Passport.js is a middleware for Node.js that can be used for many authentication methods such as Google, Facebook, Twitter, or Local Strategies
- Set-up slave database
- Create self-signed certs for Nginx web server
- Continue to improve designs
- Deploy Version 1.0 of the application with core functionality
  - HTML Files
  - CSS Files
  - JS Files

## Completed goals

- Build project environment on all machines
  - We started off Sprint 3 by ensuring that our product environment successfully built on all of our machines. We were able to do this, with the exception of one of our team members who had was absent for a while due to a personal emergency.
- pm2
  -
- Database Schema
  - We took a closer look at how we are going to set up our database and seeing which types of entries we would need. We carefully came up with our schema making sure to keep the database clean, organized, and have little to no redundancy so that we could start building out our database as we are creating the web pages.
- Security
  - We decided to utilize Passport.js to help us set up our login authentication. We are going with both local authentication as well as Facebook authentication.
- Slave database
  -
- Improved designs
  ![Bed and Bath Filter](../../design-files/snippet-pictures/filter-bedbathprice.JPG)
  - Last week we received feedback on making a type of side swipe option button when it came to selecting the number of beds, baths, etc. However, we decided it was best to keep it this way because we will offer the choice for a user to select multiple options so that those options come up in their search. For example, if I want to look for an apartment with 2 baths, but I would also be open to finding one with 1 bath, then I have the option to select both the 2 and the 1 option so my search will be populated by both.


#### Team Members

[Antoine Foggs](https://github.com/AFoggs)

[Theo Economos](https://github.com/teconomo)

[Jarron Bailey](https://github.com/jarronb)

[Erick Cabrera](https://github.com/ecabrera796)

[Johnathan Garcia](https://github.com/)

[Giancarlo Barillas](https://github.com/giancarlobarillas)
