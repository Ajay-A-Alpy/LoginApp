const mongoose=require('mongoose');
const connect= ()=>{
    
try{

    const con= mongoose.connect('mongodb://localhost:27017',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       
    }).then(()=>{
        console.log("Mongodb connected")
    })
    
}
catch(err){
    console.log(err)
    process.exit(1)
}


}
module.exports= connect;



