# Gulp AllinOne Live Server
This is a full Gulp live server, Sass processor and css minifier in one.
 
# Usage
Install using `npm i gulp-allinone-server`
 
```javascript
var gulpLiveServer = require("gulp-allinone-server");
 
```

Then to access them in another file:

var myFunctions = require("./lib/index.js")

And then you can call each function by calling:

```
myFunctions.processHtml
myFunctions.processSass
myFunctions.watch
myFunctions.server
```
