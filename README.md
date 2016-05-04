# LINCS
The homepage of the NIH LINCS Program.

## Learning the Codebase
### Client Side
There are only a few libraries and technologies used on the front-end of this project.
The most important of these is [React](https://facebook.github.io/react/). If you have a
grasp on React, I think this project should be very easy to follow.

The second-most important technology used in this project is [Redux](http://redux.js.org/).
Once you understand the concept behind Redux, writing code using the library is very simple as
its APIs and documentation are very easy to follow. I **strongly recommend** watching
[this video tutorial series](https://egghead.io/series/getting-started-with-redux) by the
creator of Redux to get and understanding of what is going on in this project.

The two best repos to look to as examples are
the [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) and the
[examples found in the Redux repo](https://github.com/reactjs/redux/tree/master/examples)
(especially the real-world example). This project was originally a fork of the
react-redux-starter-kit
and a good portion of code was taken from the redux examples.

### Server Side
This project uses Node.JS on the server side. There are two libraries important to understanding
the backend code. The first of these is [Koa](http://koajs.com/). Koa 2 (which this project uses)
makes use of the ES7 async/await. Again, there are many technologies that may seem new but the
learning curves are not as big as you may think.

To understand Koa 2 and async/await, you first need to understand [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
[Here is a good example](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html)
of how promises are used and async/await. In a few words, you can call
`const result = await someFuncThatReturnsAPromise();` and after the promise is resolved, the value
of result will be whatever the promise resolves to. This means you can write code that seems
synchronous in the sense that you don't have any `.then()` calls or callbacks.

For manipulating and querying the MySQL database that this app is built on top of,
[Bookshelf.js](http://bookshelfjs.org/) is used as an ORM. This library is promise-based so it
plays very nicely with Koa 2 and async/await. To go through a small example, the following code is
taken directly from
[server/routes/datasets.js](https://github.com/MaayanLab/LINCS/blob/master/server/routes/datasets.js)

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

### Building and Deploying
