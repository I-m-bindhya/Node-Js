var fs = require("fs");

fs.readFile("calc.js","utf-8", function(err, data){
    console.log(data);
});

fs.writeFile("calc1.js", "console.log('done again');", function(err){
    console.log("File Saved");
})

fs.appendFile("calc1.js", "console.log('done...')", function(err){
    console.log("File Saved");

    //  Truncating
    fs.truncateSync("calc1.js",10,(err, data)=>{
        console.log("File truncated ")
    })
});

// fs.unlink("calc1.js", function(){

// });

// Include fs and path module
const path = require('path');
  
fs.mkdir(path.join(__dirname, 'test'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

// fs.rmdir("test" , ()=>{})


  getCurrentFilenames();
  
// function to get current filenames in directory
function getCurrentFilenames() {
  console.log("Current filenames:");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
}

const os = require('os');

console.log(fs.mkdtempSync(
  path.join(os.tmpdir(), 'foo-')));