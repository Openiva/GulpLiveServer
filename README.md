# Gulp AllinOne Live Server
This is a full Gulp live server, Sass processor and css minifier in one.
 
# New in 1.1.4
Folders are auto-generated upon download from npm (Allegedly).

# Usage
Install using 
* 'npm init'
* `npx gulp-allinone-server`
 
```javascript
var gulpLiveServer = require("gulp-allinone-server");
 
```

Then to access them in another file:

var myFunction = require("./lib/file.js")

And then you can call each function by calling:

```
myFunctions.processHtml
myFunctions.processSass
myFunctions.watch
myFunctions.server
```

### Include this folder structure:
create a folder called 'src' that contains subfolders: 'html', 'js', 'sass' in root directory.

Root directory
 - 'src' folder
   - 'html' subfolder
   - 'sass' subfolder
   - 'js' subfolder
 - gulpfile.js (placed outside of src in root directory)

