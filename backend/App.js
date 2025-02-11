import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app=express();

import  Route  from './Router/Router.js';
import appintment from './Router/Appointment.js'
 
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/user',Route);
app.use('/appointment',appintment);


app.listen(3001);
console.log("server invoked to link http://localhost:3001");