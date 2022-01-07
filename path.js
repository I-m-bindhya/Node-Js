
const path = require('path');
   
// Normalizing of the final path

// Used for path joining in which ".." is used to go backward
path1 = path.join("users", "..", "files", "readme.md");
console.log(path1)

// Joining with zero-length paths
path3 = path.join("users", "", "", "index.html");
console.log(path3);

// Getting the directory path one folder above
console.log("Current Directory: ", __dirname);
path3 = path.join(__dirname, "..");
console.log("Directory above:", path3);


path3 = path.normalize("/users/admin/../comments")
console.log(path3);
   

// Include process module
const process = require('process');
  
// Printing process.execPath
console.log(process.execPath);