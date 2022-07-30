const jwt=require('jsonwebtoken');
const auth=(req,res,next)=>{
    const token= req.header("x-access-token");
    if(!token){
        return res.status(406).json({err:"No authorization"})
    }
    const verified=jwt.verify('token','mysecretkey');
    if(!verified){
        return res.status(406).json({err:"Token authorization failed access denied"})
    }
    req.user._id=verified.id;
    next();
}

module.exports=auth;