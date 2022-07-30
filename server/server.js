const  express= require('express');
const app=express();
const connect=require('./database/database')
const cors=require('cors')


app.use(express.json());
app.use(cors())
app.listen(4000,()=>{
    console.log("server is running on http://localhost:4000")
});

connect();
app.use('/api',require('./Router/router'));