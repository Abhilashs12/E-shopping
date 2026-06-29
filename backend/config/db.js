import mongoose from 'mongoose';

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED");
    }
    catch(error){
        console.log(error,"connection go to  cmd");
        process.exit(1);

}
};
export default connectDB;