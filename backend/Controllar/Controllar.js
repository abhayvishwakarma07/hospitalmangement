import '../module/Cannection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';


import UserSchemaModel from '../module/module.js';

export const save=async(req,res)=>{
    console.log(req.body);
 var userList=await UserSchemaModel.find();
 var l=userList.length;
 var _id=l==0?1:l+1;
 var userDetails={...req.body,"_id":_id,"info":Date()};
 try{
    await UserSchemaModel.create(userDetails);
    res.status(201).json({"status":true});
 }
 catch(error){
    res.status(500).json({"status":false});
 }    
};

export const login=async(req,res)=>{
 var condition_obj={...req.body};
 var userList=await UserSchemaModel.find(condition_obj);
 if(userList.length!=0)
 {
  const payload=userList[0].email; 
  const key=rs.generate(50);
  const token = jwt.sign(payload,key); 
  res.status(200).json({"token":token,"userDetails":userList[0]});
 }
 else
  res.status(500).json({"token":"error"}); 
};

export const fetch=async(req,res)=>{
 var condition_obj=url.parse(req.url,true).query.condition_obj;
 if(condition_obj!=undefined)
  condition_obj=JSON.parse(condition_obj); 
 else
  condition_obj={};  
 
 var userList=await UserSchemaModel.find(condition_obj);
 if(userList.length!=0)
   res.status(200).json(userList);
 else
   res.status(404).json({"status":"Resource not found"});    
};

export var update=async(req,res)=>{
   let userDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
   if(userDetails){
    let user=await UserSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(user)
         res.status(200).json({"msg":"success"});
       else
         res.status(500).json({"status": "Server Error"});
   }
   else
     res.status(404).json({"status":"Requested resource not available"});       
};

export var deleteUser=async(req,res)=>{
   let userDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
   if(userDetails){
       let user=await UserSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));   
       if(user)
         res.status(200).json({"msg":"success"});
       else
         res.status(500).json({"status": "Server Error"});
   }
   else
     res.status(404).json({"status":"Requested resource not available"});     
};