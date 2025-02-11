import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const userDetails= mongoose.Schema({
    _id: Number,
    name: {
      type: String,
      required: [true,"Name is required"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true,"Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      trim: true
    },
    mobile: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    gender: {
      type: String
    },
    role: {
      type: String,
      required: [true,"role is required"],
    },
    info: String
  });

  userDetails.plugin(UniqueValidator);

const UserSchemaModel=mongoose.model('user_details',userDetails);

export default UserSchemaModel;