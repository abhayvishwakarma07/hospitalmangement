import  Express from "express";
const router=Express.Router();

import * as  Controllar from '../Controllar/Controllar.js';

 router.post("/save",Controllar.save);

router.post("/login",Controllar.login);

router.get('/fetch',Controllar.fetch)

export default router;