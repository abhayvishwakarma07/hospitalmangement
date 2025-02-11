import '../module/Cannection.js';
import appointmentScheema from '../module/appintmentmodule.js';

export const save=async(req,res)=>{
    console.log(req.body);
 var userList=await appointmentScheema.find();
 var l=userList.length;
 var _id=l==0?1:l+1;
 var userDetails={...req.body,"_id":_id};
 try{
    await appointmentScheema.create(userDetails);
    res.status(201).json({"status":true});
 }
 catch(error){
    res.status(500).json({"status":false});
 }    
};