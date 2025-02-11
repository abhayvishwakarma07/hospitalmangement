import mongoose from "mongoose";

const url="mongodb://localhost:27017/HOSPITAL"

mongoose.connect(url);

console.log("connect secsefully")