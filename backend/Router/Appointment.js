import  Express from "express";
const router=Express.Router();

import * as  appointment from '../Controllar/appointment.js';

 router.post("/save",appointment.save);

export default router;