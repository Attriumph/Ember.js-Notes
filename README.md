# Ember笔记
## Ember Guides 笔记
1. application.hbs: 'app/templates/application.hbs' is always on screen while the user has your application loaded.
2. '{{outlet}}' means that any nested route will be rendered in that place.
3. About route:
   - it has template to render
   - It need data to render the template, which can be done by model()
   - model() method: can return whatever data you want to make available to the template. If you need to fetch data asynchronously, the model() method supports any library that uses **JavaScript Promises**； a hook is used to load the model on a route
   - After getting the data, we need use template enginee(handelebar) to tell ember how to use these data
4. About template:
  - Templates can also display properties provided to them from their context, which is either a component or a route's controller
5. About Model：
  - A model typically persists（存留） information to a web server
6. Promise：`.then()` always returns a new Promise, so it’s possible to chain Promises with precise control over how and where errors are handled.