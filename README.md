# GoLearn

GoLearn is platform to register a course as an instructor to be available for enrollment. It is a small and very basic interface for 
  - Adding courses
  - Viewing all added courses
  - Enroll for a course (Not implementaed yet)
  
### Tech

GoLearn uses a number of open source projects to work properly:

* [Angular 4] - HTML enhanced for web apps!
* [Visual Studio Code Editor] - awesome web-based text editor
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [NPM] - the streaming build system
* [jQuery] - duh
* [Java] - best applicaton language out there
* [Spring Boot] - really great assistive application framework
* [Mongo DB] - an unstructured No-SQL DB

### Installation
There are two microservices i this system -
#1 Frontend (Angular 4)
#2 Backend (Java + Spring Boot + Mongo)

#### Frontend Usage
#1 GoLearn requires [Node.js](https://nodejs.org/) v6.11.x to run.
#2 Install Angular CLI 1.4.3
#3 Go to Frontend project directory and run -
```sh
$ npm install
```
#4 Install the dependencies and devDependencies and start the server -
```sh
$ ng serve --port 4200
```

### Backend Usage
#1 Install Mongo Db Server and start it
#2 run folloeing commands on the cmd-let where you started mongo server
```sh
$ use dbs goLearn
$ db.createCollection("course")
$ db.createCollection("module")
```
[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [AngularJS]: <http://angularjs.org>