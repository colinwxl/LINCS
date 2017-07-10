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
  - The code is written in ES6, but we use [Babel](https://babeljs.io/) to compile it ES5 for cross-browser support.
  - [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
  - [ES6 equivalents in ES6](https://github.com/addyosmani/es6-equivalents-in-es5)
- React
  - React is a JavaScript library for modularizing user interfaces into easy-to-manage components. Each component is a combination of JavaScript and HTML, which makes it easy to see the data, behavior, and view all in a single file. React handles rendering the component through the lifecycle of the application.
  - [Facebook's React tutorial](https://facebook.github.io/react/docs/tutorial.html) is a good place to start.
- Redux
  - Redux is a JavaScript library for making the state of an application easier to reason about. Using Redux, the state of an application is represented by an immutable "store". Each time part of the application changes, Redux recomputes the store and rerenders the application.
  - [These Redux videos](https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo#/tab-code) are very good. We recommend watching all of them.
  - Install the [Redux DevTools Chrome Extension](https://github.com/zalmoxisus/redux-devtools-extension).
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
- [Bookshelf.js](http://bookshelfjs.org/) for an ORM

### Deployment
- [Docker](https://www.docker.com/). Follow the instructions for installing the [Docker Toolbox](https://www.docker.com/products/docker-toolbox) if you do not have it installed already.

## Building and Deploying

### Running in Development

Execute

```
npm run dev
```

### Building the Application for Development

With docker-machine installed, you'll need to create a new machine. I would delete the current 'default' machine by running `docker-machine rm default`. Following the answer from [this StackOverflow answer](http://stackoverflow.com/questions/30654306/allow-insecure-registry-in-host-provisioned-with-docker-machine),
run the following command to create a machine with our insecure registry:
```shell
docker-machine create --driver virtualbox --engine-insecure-registry REPLACE_WITH_ELIZABETH_IP:5000 default
```

After creating the machine, follow the instructions found by running `docker-machine env default` to set up your shell properly.

Now that you have docker-machine configured, you are ready to run this in production. It is very simple to do so. First, determine the severity of the changes you have made since the last release. Normally, these are very minor. The deployment process uses the `npm version (patch|minor|major)` (details found [here](https://docs.npmjs.com/cli/version)) to increment the version of the application, create a docker vm with the same new version, push it to our repository, and tell Marathon to restart the application with the new vm. You can find the commands described in the npm docs (version and postversion) in the package.json file.

If the deployment process finishes without errors, visit http://amp.pharm.mssm.edu/LINCS to view the updated product.

### Launching App on production

Once the dev version on http://amp.pharm.mssm.edu/LINCS looks fine, we can launch our application onto production. To do so,
ssh into the LINCS AWS server. For credentials/key, ask Alex or Sherry using `ssh -i ~/path/to/key.pem ubuntu@ip_address_of_server`. Pull the Docker image from Docker hub with the newest version tag such as `sudo docker run -p 80:3000 --name="lincs" -d -e "NODE_ENV=production" --net="host" -v /data/serverconf/serverConf.js:/usr/src/serverConf.js -v /data/datasets:/usr/src/dist/files/datasets maayanlab/lincs:8.18.25`. Then kill and remove old image `sudo docker kill lincs && sudo docker rm lincs`. Run the `sudo docker run -p 80:3000 --name="lincs" -d -e "NODE_ENV=production" --net="host" -v /data/serverconf/serverConf.js:/usr/src/serverConf.js -v /data/datasets:/usr/src/dist/files/datasets maayanlab/lincs:8.18.25
` command once again and check if the development site is deployed onto the live site.

If for any reason you need to revert to an older version on the live site, you can simply run the command above with an older version tag such as `maayanlab/lincs:8.18.24`.

## Developers and maintainers

- [Sherry Jenkins](https://github.com/sherry-jenkins) (content)
- [Moshe Silverstein](https://github.com/MosheSilverstein) and [Sherry Jenkins](https://github.com/sherry-jenkins) (current developers)
- [Michael McDermott](https://github.com/michaelgmcd) (original developer)
- [Gregory Gundersen](https://github.com/gwgundersen) and [Ned He](https://github.com/NedYork)  (previous developers)
