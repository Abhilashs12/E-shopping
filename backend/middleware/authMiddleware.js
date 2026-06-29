import jwt from "jsonwebtoken";

const protect =async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        if(!token){
            return res.status(401).json({
                    message:"no token authorized",
                })
        }
        const decoded = jwt.verify(token,"secretkey");
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(401).json({
            message:"not authorized",
        })
    }

};
export default protect;