const express = require("express")
const path = require('path')
const mustache = require('mustache')
const config = require("./config")
const users = require("./routes/users")
const fs = require('fs')


const app = express()

// Set  :: Public folder as default static path
app.use(express.static(path.join(__dirname,'public')));

// Set :: View Engine
app.engine('html', function (filePath, options, callback) { 
    fs.readFile(filePath, function (err, content) {
        if (err)
            return callback(err)        
        var rendered = mustache.to_html(content.toString(),options);
        return callback(null, rendered)
    })
  })
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

// Index Page default Route set
app.get('/',(req,res)=>{        
    res.render('index',{title:'Index Page'});
});


// Users route for login and register 
app.use('/users',users)


// Server Listen on default port
app.listen(config.port,()=>{
    console.log('Server start on port :: '+config.port);
});