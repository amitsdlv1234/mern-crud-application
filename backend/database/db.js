
import mongoose from "mongoose"

const Connection =async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@crud-app.ajjosyz.mongodb.net/`;
try {
   await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
   console.log('Database connected Successfully');
} catch (error) {
    console.log("Error while coneecting with the database",error);
}
}


export default Connection