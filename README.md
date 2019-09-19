# Master Ember.js 
  Ember.js is Model-View-ViewModel pattern. Model layer stores the state of application; view layer represents the UI of the application;ViewModel binds UI interface actions to Moeal layer behaviors.
## Notes from Ember Guides(Super-rental) 
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
9. There is a place that we can define our API endpoints and how can we get data. For json api, there is a the JSON-API specification to form the format of data
10.  An Adapter: is an object that Ember Data uses to determine how we communicate with our backend. 
11. Ember Data makes a GET request to endpoint, 不一定有真正的network request（from reading mirage add-on）
12. Ember Data: 
 - Ember comes with a data management library called Ember Data to help deal with persistent application data， a powerful set of tools for formatting requests, normalizing responses, and efficiently managing a local cache of data.
 - Ember Data requires you to define the structure of the data you wish to provide to your application by extending `DS.Model`.
 - `Ember Data Store service` is injected into all routes and their corresponding controllers in Ember. It is the main interface you use to interact with Ember Data. In this case, call the `findAll` function on the store and provide it with the name of correspoding model class(`rental` model here), so that Ember Data will attempt to fetch rentals from `/api/rentals`.
13. The whole workflow after typing URL is:
  Users type URL of `/rentals` --> router.js --> route handler(rental.js) execute `model` hook --> the hook calls `this.store.findAll('rental')` --> this fetch rentals from `/api/rentals`  --> Mirage return the json data without initing a real network request
14. Controllers:
- contain actions and properties available to the template of its corresponding route
- Ember will know that a controller with the name of rentals will apply to the route with the same name.
15. Service:
- A Service is an Ember object that lives for the duration of the application, and can be made available in different parts of your application.
- To access a service, you can inject it in any container-resolved object such as a component or another service using the inject function from the @ember/service module. 
16. Nested route
- Having a parent route means that any content on our parent route template will be present as we browse down through our child routes. We use `{{outlet}}` helper to indicate the place where active nested route will be rendered.

## Ember.js Notes from Course
### 1. Objects,Classs, instance
  - Always extend `Ember.Object` when defining classes(ember.object support **obeservation** of property value changes)
  ```javascript
  const Parentclass = Ember.Object.extend({
    method1(para) {
    }
  });
  ```
  - When creating subclasses, call extend method on the parent class
  - On a subclass, we can use `this._super()` to access the parent class properties and functions
  ```javascript 
  const ChildClass = ParentClass.extend({
    method1(para) {
      // just to demo that we can change para of kid 
      // and then pass into parents method1
      const para2 = para + "xxx";
      this._super(para2);
    }
  });
  ```
  ### 2. Computed properties, Observers & bindings
  - These are three ways to use obeservation in ember
  - Computed property: Always use a computed property's `get()` or `set()` function to get the parasm; Observable features will not work without get()/set(); Only recomputed when the property is called
  - Obeserver: embers observers is sychronous so that they are fired immediately when observe changes

```javascript
   const Surfer = Ember.object.extend({
     name: null,
     board: null,

     nameAndBoard: Ember.computed('name', 'board', function(){
       return `My name is ${this.get('name')} and I ride a ${this.get('board')}`;
     });

     nameChanged: Ember.observer('name', function(){
       console.log(`name changed to: ${this.get('name')}`);
     })

     let kook = Sufer.creat({
       name: 'Lawrence',
       board: 'fomy',
     });

     kook.get('nameAndBoard');
   })
   ```
  - bindings: 2-ways binding use `computed.alias()` and just run once when all code is running;and 1-one binding use `computed.oneWay()`
    


