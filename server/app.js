const express= require ('express');
const dotenv = require ('dotenv');
// const User = require('./models/userSchema');
const cookieParser = require ('cookie-parser')



const app = express();

app.use(express.json());
dotenv.config()

app.use(cookieParser())

//!mongoDB connection
require('./db/conn');

//! router
app.use(require('./router/auth'));

//! Routes

app.get('/contact',(req,res)=>{
    
    res.send('contact page')
})





//!server running on port

//!server running on port 5000
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})