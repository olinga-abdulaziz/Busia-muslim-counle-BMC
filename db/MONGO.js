const mongoose=require('mongoose')

const DbConnection=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to mongodb database :${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports=DbConnection