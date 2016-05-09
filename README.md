# LINCS
The homepage of the NIH LINCS Program.

> Note: There is a file missing that you will need to run this application, however it has sensitive data. Email me at michael@mgmcdermott.com and I can send it to you. The file lives in the server folder and it is called serverConf.js

## Getting Started

To get started with this project, you will need to have [Node.js](https://nodejs.org) installed.
```shell
# Download the .zip of the project or clone the project using git:
git clone https://github.com/MaayanLab/LINCS.git
cd LINCS
# Install dependencies
npm install
# Create the SQL tables in the development database
npm run migrate
# Seed the created SQL tables in the development database
npm run seed
# Start the application
npm run dev
```

## Learning the Codebase

### Client Side
There are only a few libraries and technologies used on the front-end of this project. The most important of these is [React](https://facebook.github.io/react/). If you have a grasp on React, I think this project should be very easy to follow.

The second-most important technology used in this project is [Redux](http://redux.js.org/). Once you understand the concept behind Redux, writing code using the library is very simple as its APIs and documentation are very straight-forward. I **strongly recommend** watching [this video tutorial series](https://egghead.io/series/getting-started-with-redux) by the creator of Redux to get an understanding of what is going on in this project.

The two best repos to look to as examples are the [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) and the [examples found in the Redux repo](https://github.com/reactjs/redux/tree/master/examples)
(especially the real-world example). This project was originally a fork of the react-redux-starter-kit and a good portion of code was taken from the redux examples.

### Server Side
This project uses Node.JS on the server side. There are two libraries important to understanding the backend code. The first of these is [Koa](http://koajs.com/). Koa 2 (which this project uses) makes use of the ES7 async/await. Again, there are many technologies that may seem new but the learning curves are not as big as you may think.

To understand Koa 2 and async/await, you first need to understand [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). [Here is a good example](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html) of how promises are used and async/await. In a few words, you can call `const result = await someFuncThatReturnsAPromise();` and after the promise is resolved, the value
of result will be whatever the promise resolves to. This means you can write code that seems synchronous in the sense that you don't have any `.then()` calls or callbacks.

For manipulating and querying the MySQL database that this app is built on top of, [Bookshelf.js](http://bookshelfjs.org/) is used as an ORM. This library is promise-based so it plays very nicely with Koa 2 and async/await. To go through a small example, the following code is taken directly from [server/routes/datasets.js](https://github.com/MaayanLab/LINCS/blob/master/server/routes/datasets.js):

```js
import Router from 'koa-router';
import { Dataset } from '../models/Dataset';
...
const router = new Router({
  prefix: '/LINCS/api/v1/datasets',
});
...
router.get('/', async (ctx) => {
  let withRelated = [];
  // ctx.query is an object of the query parameters.
  // ctx.query.include would look like /LINCS/api/v1/datasets?include=center,cells
  // withRelated as a result looks like ['center', 'cells']
  if (ctx.query.include) {
    withRelated = ctx.query.include.split(',');
  }
  // Error handling is done using a try catch. If anything here fails, send the user
  // a 500 error with ctx.throw()
  try {
    // Here we see the 'await' keyword and the Bookshelf.js query syntax.
    // Looking at the docs here: http://bookshelfjs.org/#Model-instance-fetchAll we see
    // that Dataset.fetchAll() returns a Promise that resolves to a Bookshelf.js Collection.
    // Once that is resolved, the resulting collection is set to the datasets variable.
    let datasets = await Dataset.fetchAll({ withRelated });
    // By default Bookshelf.js includes a _pivot_ key on every object that is added
    // as a relationship. In this project, it is usually omitted by default.
    const includePivot = !!ctx.query.includePivot;
    // Bookshelf.js Collections have a .toJSON() method to convert them to a traditional
    // JavaScript object. We do this before sending it in the response.
    datasets = datasets.toJSON({ omitPivot: !includePivot });
    // Setting ctx.body will initiate a 200 response with whatever it is set to.
    // Here we send the datasets array.
    ctx.body = datasets;
  } catch (e) {
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});
```

### Migrating and Seeding the Database
> Note: I am working on implementing a set of Python scripts to migrate and seed the database.
> For now, they are all written in JavaScript (Node.js executables)

To update entries in the database, you may do so without recreating it using phpMyAdmin. This is accessed by going to Marathon (elizabeth:8080) and clicking on the computer where the phpMyAdmin instance is running. From here, it is very easy for you to make small changes to text, add entries, or remove them.

If you would like to rebuild the database from scratch using the original data files, then there are two different processes you'll need to prepare the data:

For **datasets**, **cell lines**, and **tools**:

1. In the resources folder, located the .csv file of the entity you'd like to edit. Open it in
your favorite editor.
  * I tend to use Google Sheets as it ensures that all characters are utf-8, otherwise some problems may come up in the next step.
2. Open the python file associated with the .csv file you edited (i.e. datasets.py). If the columns are the same, there is no need to edit the Python script.
  * Note that the Python script converts the csv to a JavaScript file that contains an array
  of objects, where each object has the schema specified in
  [server/data/schema.js](https://github.com/MaayanLab/LINCS/blob/master/server/data/schema.js).
3. After running the Python script, a new JavaScript file will be created in the seed folder.

For **publications**, **webinars**, **workshops**, **funding opportunities**, and **symposia**:

1. Edit the JavaScript file in the seed folder directly. These files are much smaller than the others, making them easy to maintain. Make sure that each object has the same schema as its database table found in [server/data/schema.js](https://github.com/MaayanLab/LINCS/blob/master/server/data/schema.js).

Once the data is updated and the seed folder contains the correct JavaScript files, run `npm run migrate` to recreate the database tables in development, and `npm run migrate:prod` to  recreate the database tables in production. Changing server/serverConf.js will change where the databases are located depending on your environment. Currently, the development database is an SQLite file found in the root folder (lincs.sqlite) and the production database is a MySQL instance running on our internal servers. If an error occurs, try re-running the commands.

After recreating the tables in the database, run `npm run seed` or `npm run seed:prod` for development and production. This may take some time and an error may occur here if any of the files in the seed folder are incorrect.

After making any changes to the production database, run `npm run elastic` to update the elasticsearch index. This technology may be removed in favor of SQL queries for simplicity.

All three commands, `npm run migrate`, `npm run seed`, and `npm run elastic`, contain files written in ES6 (they live in the [server/data](https://github.com/MaayanLab/LINCS/tree/master/server/data) folder). Therefore, the [babel-node](https://babeljs.io/docs/usage/cli/#babel-node) package is used to run them. For `npm run seed`, however, the babel-node process runs out of memory because the files in the seed folder are too large. To overcome this, the entire server folder is compiled to regular JavaScript (ES5), regular `node` is run with the `--max-old-space-size=15360` flag to increase the allotted memory, and then the compiled files are removed. The command can be found in the package.json file:
```shell
npm run server-es5 && node --max-old-space-size=15360 server-es5/data/seed && rm -rf server-es5
```

### Building and Deploying

#### Running in Development
To run the application in development, first install the [Redux DevTools Chrome Extension](https://github.com/zalmoxisus/redux-devtools-extension). It makes viewing changes in your data over the lifetime of your app very easy. Once installed, start the application with `npm run dev`. This may take some time as webpack needs to compile the application. If any problems arise in this part of the process, I would review the [react-redux-starter-kit](https://www.github.com/davezuko/react-redux-starter-kit) as the webpack configs are almost identical to the ones there.

#### Building the Application for Production
This application is built using Docker. In order to build it for production, you must first have docker-machine installed. Follow the instructions on the [Docker website](https://www.docker.com/products/docker-toolbox) for installing the Docker Toolbox (which contains docker-machine amongst other things).

With docker-machine installed, you'll need to create a new machine. I would delete the current 'default' machine by running `docker-machine rm default`. Following the answer from [this StackOverflow answer](http://stackoverflow.com/questions/30654306/allow-insecure-registry-in-host-provisioned-with-docker-machine),
run the following command to create a machine with our insecure registry:
```shell
docker-machine create --driver virtualbox --engine-insecure-registry REPLACE_WITH_ELIZABETH_IP:5000 default
```

After creating the machine, follow the instructions found by running `docker-machine env default` to set up your shell properly.

Now that you have docker-machine configured, you are ready to run this in production. It is very simple to do so. First, determine the severity of the changes you have made since the last release. Normally, these are very minor. The deployment process uses the `npm version (patch|minor|major)` (details found [here](https://docs.npmjs.com/cli/version)) to increment the version of the application, create a docker vm with the same new version, push it to our repository, and tell Marathon to restart the application with the new vm. You can find the commands described in the npm docs (version and postversion) in the package.json file.

If the deployment process finishes without errors, visit http://amp.pharm.mssm.edu/LINCS to view the updated product.
