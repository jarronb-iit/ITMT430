# Sprint 6 Report

## Project Overview

For our project, our intial scope was to create a full fledged real-estate/roommate application. Over the course of a few weeks, we soon realized that this was a larger scope for us to fulfill than we originally had time to deal with. As such, we focused primarily on working on what would be able to serve as a fully functioning mvp of the original idea.

Our focus was to ensure that we incorperated all of the 13 requirements while creating something that could have potential use outside of the classroom. It was a long journey, but we have something that fulfills our basic requirements, that also helped the entire team to learn what it takes to develop an application. Additionally, we created the base of a project that has real world potential, should any of us pursue it further.

## Roles

- Junior Developer - [Giancarlo Barillas](https://github.com/giancarlobarillas)
- Lead Developer - [Erick Cabrera](https://github.com/ecabrera796)
- UI/UX - [Jarron Bailey](https://github.com/jarronb)
- Project Manager - [Antoine Foggs](https://github.com/AFoggs)
- IT Operations - [Theo Economos](https://github.com/teconomo)

## Sprint 6 Goals

- Connect API to work for admin page
- Connect API to listing view
- Connect API to creating a new listing
- Create Template for listing view
- Insert Test data
- Complete Admin page.
- Redesign homepage and connect all pages to homepage.
- Install resource monitoring tool.
- Create navigation menu for homepage.

## Completed goals

- Connect API to listing view
  - Users are now able to view listings that have been created.
- Connect API to create a new listing.
  - Users are now able to create new listings for the platform.
- Create Template for listing view.
  - Users are able to complete a basic template in order to upload listings.
- Image Preview
  - Users are able to preview images they upload to see how it looks before uploading listings.
- Install resource monitoring tool
  - [NetData](https://github.com/netdata/netdata) has been utilized to handle resource monitoring. It allows for real time granular monitoring of a servers resources. It collects as much data as possible automatically in real time to allow for accurate diagnosis.

## Sprint 6 Rubric Info

1. The language we are using is Javascript
2. The operating system that we are using is Linux and Windows for development. We have some developers that are using Linux as their native development envirment and current we have implemented a npm linux start for the react application. The frameworks that we are using are Node js and React js. We are using node to build the application and routing while we are using react to build the components of the application
3. The database that we are using is Mongodb
4. The Data encryption at rest os JWT
5. We have disabled master/slave relationships in favor of replica sets. We are using a redis caching server. We are also using api that can manage the call to the database
6. We are using React js to manage responsive design and we recently connect to material ui to manage buttons and any componenet elements
7. We do have self signing cert with CertBot to generate a self signed certificate. We have change the permissions of the web server to change to https.
8. We have will have to manage the user authentification and currently we have implemented authenticated for the servers and the API calls will check the authentification of the calls.
9. Our development enviroments are done by running the npm start dev from the server. The server is located in the app folder. Once this is running we are allowed to see the react application
10. All our designs can be seen in the design files along with the video of the application
11. Currently our flowcharts of the application are in the reports and in the images folder. These contain the current database relationships.
    ![DB Schema](ERD_roomie.JPG)
12. Our trello is currently accurate with the completed tasks.
13. Currently we have not implemented our 15 test data since we need to first completely connect the api calls to the react components.

## Trello Board

Include screenshots of Trello board.

## Github issues

Include screenshots of github issues.

#### Team Members

[Antoine Foggs](https://github.com/AFoggs)

[Theo Economos](https://github.com/teconomo)

[Jarron Bailey](https://github.com/jarronb)

[Erick Cabrera](https://github.com/ecabrera796)

[Giancarlo Barillas](https://github.com/giancarlobarillas)
