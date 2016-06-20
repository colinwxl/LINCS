# Homepage for the NIH LINCS Program

## Getting Started

To get started, you need:

1. A config file, `serverConf.js`. It contains sensitive data and is not committed to this repo. Search Confluence for this file or ask one of the active developers. Once you have it, place it in the `server` directory.
2. [Node.js](https://nodejs.org) installed locally. **Please ensure that your version of Node.js is at least 4.0**.

Then just run:

```shell
# Download the .zip of the project or clone the project using git:
git clone https://github.com/MaayanLab/LINCS.git
cd LINCS
# Install dependencies
npm install
# Start the application
npm run dev
```

## Learning the Codebase
There are a number of technologies you need to learn in order to manage this website. We **strongly** recommend you go through the React and Redux tutorials before proceeding any further. Some cursory knowledge of [ECMAScript 6](https://en.wikipedia.org/wiki/ECMAScript) is useful for mentally parsing the code, but you can probably pick this up along the way.

### Client side

- ECMAScript 6
  - [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
  - [ES6 equivalents in ES6](https://github.com/addyosmani/es6-equivalents-in-es5)
- React
  - [Facebook's React tutorial](https://facebook.github.io/react/docs/tutorial.html)
- [Redux](https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo#/tab-code)
- `await` keyword
  - Allow asynchronous code to be written in a synchronous fashion
  - [Twilio explanation](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html)
- Putting it all together
  - [Full stack tutorial](https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/)
  - [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
  - [Examples from the Redux repo](https://github.com/reactjs/redux/tree/master/examples)

### Server side

- [Node.js](https://nodejs.org/en/) web server
- [Koa](http://koajs.com/) for a web framework
- [Bookshelf.js](http://bookshelfjs.org/) ORM

## Building and Deploying

### Running in Development
To run the application in development, first install the [Redux DevTools Chrome Extension](https://github.com/zalmoxisus/redux-devtools-extension). It makes viewing changes in your data over the lifetime of your app very easy. Once installed, start the application with `npm run dev`. This may take some time as webpack needs to compile the application. If any problems arise in this part of the process, I would review the [react-redux-starter-kit](https://www.github.com/davezuko/react-redux-starter-kit) as the webpack configs are almost identical to the ones there.

### Building the Application for Production
This application is built using Docker. In order to build it for production, you must first have docker-machine installed. Follow the instructions on the [Docker website](https://www.docker.com/products/docker-toolbox) for installing the Docker Toolbox (which contains docker-machine amongst other things).

With docker-machine installed, you'll need to create a new machine. I would delete the current 'default' machine by running `docker-machine rm default`. Following the answer from [this StackOverflow answer](http://stackoverflow.com/questions/30654306/allow-insecure-registry-in-host-provisioned-with-docker-machine),
run the following command to create a machine with our insecure registry:
```shell
docker-machine create --driver virtualbox --engine-insecure-registry REPLACE_WITH_ELIZABETH_IP:5000 default
```

After creating the machine, follow the instructions found by running `docker-machine env default` to set up your shell properly.

Now that you have docker-machine configured, you are ready to run this in production. It is very simple to do so. First, determine the severity of the changes you have made since the last release. Normally, these are very minor. The deployment process uses the `npm version (patch|minor|major)` (details found [here](https://docs.npmjs.com/cli/version)) to increment the version of the application, create a docker vm with the same new version, push it to our repository, and tell Marathon to restart the application with the new vm. You can find the commands described in the npm docs (version and postversion) in the package.json file.

If the deployment process finishes without errors, visit http://amp.pharm.mssm.edu/LINCS to view the updated product.

## Developers

- [Michael McDermott](https://github.com/mgmcdermott) (lead developer)
- [Gregory Gundersen](https://github.com/gwgundersen) (current maintainer)