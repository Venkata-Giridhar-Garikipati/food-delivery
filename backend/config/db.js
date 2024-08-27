import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://venkat:223344@cluster0.paiwf.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}