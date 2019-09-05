# Ember笔记
## Ember Guides 笔记
1. application.hbs: 'app/templates/application.hbs' is always on screen while the user has your application loaded.
2. '{{outlet}}' means that any nested route will be rendered in that place.
3. About route:
   - Three parts: 
    i. entry in ember router  
    ii. js file -- route handler: sets up what should happen when that route is loaded 
    iii. template
   - It need data to render the template, which can be done by model()
   - model() method: can return whatever data you want to make available to the template. If you need to fetch data asynchronously, the model() method supports any library that uses **JavaScript Promises**； a hook is used to load the model on a route
   - After getting the data, we need use template enginee(handelebar) to tell ember how to use these data
4. About template:
  - Templates can also display properties provided to them from their context, which is either a component or a route's controller
5. About Model：
  - A model typically persists（存留） information to a web server
6. Promise：`.then()` always returns a new Promise, so it’s possible to chain Promises with precise control over how and where errors are handled.
7. node_modules -- package.json: The package.json file maintains the list of current npm dependencies for the app. Any Ember CLI addons you install will also show up here. Packages listed in package.json are installed in the node_modules directory.
8. If ember add-on is npm package, we need to use `npm install` to install the adds-on, which will install them in the node_modules directory, and makes an entry in package.json. Under such situation, we need to restart server.
9. There is a place that we can define our API endpoints and our data. For json api, there is a the JSON-API specification to form the format of data
10.  An Adapter: is an object that Ember Data uses to determine how we communicate with our backend. 
11. Ember Data makes a GET request to endpoint, 不一定有真正的network request（from mirage）