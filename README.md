<img alt="npm" src="https://img.shields.io/npm/v/allinone-gulp-server">

![GitHub repo size](https://img.shields.io/github/repo-size/openiva/GulpLiveServer)![GitHub contributors](https://img.shields.io/github/contributors/openiva/GulpLiveServer)![GitHub stars](https://img.shields.io/github/stars/openiva/GulpLiveServer?style=social)![GitHub forks](https://img.shields.io/github/forks/openiva/GulpLiveServer?style=social)
# AllinOne Gulp Server
This is a full Gulp live server, Sass processor and css minifier in one.
 
The Folder structure is auto-generated upon download from npm.

####2.1.0 acts as the full release for the now deprecated alpha:
[gulp-allinone-server](https://www.npmjs.com/package/gulp-allinone-server "gulp-allinone-server")

# Usage
### Install using 
* 'npm init'
* `npx allinone-gulp-server`
 
##### Run this command in terminal to use the server:
* npm start 

(make sure your index.html is being exported to the dist folder)

To import/access them in another file:

```javascript
var gulpLiveServer = require("allinone-gulp-server");
 
```

And then you can call each function by calling:

```
myFunction.processHtml
myFunction.processSass
myFunction.watch
myFunction.server
```


```
Potentials in the future:
Babel support
User Requests
```

Feel free to contribute to this open-source project or use it under the MIT license. 

thanks to [@BrianEmilius](https://github.com/BrianEmilius "Brian's Github") for guidance

Made with ♡ in Roskilde, Denmark

