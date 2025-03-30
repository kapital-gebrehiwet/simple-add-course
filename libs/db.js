import mongoose from 'mongoose'

const DB=async()=>
{
    await mongoose.connect(process.env.MONGODB_URI).then(()=>
    {
        console.log(`mogodb connected successfully`);
    }).catch((err)=>{"error"})
}
export default DB;
