import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const Appointment= mongoose.Schema({
    _id: Number,
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    mobile: {
      type: String,
      trim: true
    },
    date:{
        type:String,
    },
    resion:{
        type:String
    }
  });

  Appointment.plugin(UniqueValidator);

const appointmentScheema=mongoose.model('Appointmentlist',Appointment);

export default appointmentScheema;