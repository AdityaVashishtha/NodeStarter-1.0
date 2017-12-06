const express = require("express")
const path = require('path')
const config = require("./config")
const users = require("./routes/users")


const app = express()

// Set  :: Public folder as default static path
app.use(express.static(path.join(__dirname,'public')));

// Set :: View Engine Mustache
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// Index Page default Route set
app.get('/',(req,res)=>{        
    res.render('index',{title:'Home'});
});


// Users route for login and register 
app.use('/users',users)


// Server Listen on default port
app.listen(config.port,()=>{
    console.log('Server start on port :: '+config.port);
});