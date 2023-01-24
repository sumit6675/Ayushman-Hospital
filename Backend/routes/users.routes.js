const express = require("express");
const jwt = require("jsonwebtoken");
const userRoute = express.Router();
const  RegisterationModel  = require("../models/users.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const key=process.env.key

userRoute.post("/register", async (req, res) => {
  const { Name, Email, Password, Phone } = req.body;
  try {
    const check = await RegisterationModel.find({ Email: Email });
    if (check.length > 0) {
      res.status(401).json({ error: "Email Already Exists" });
    } else {
      bcrypt.hash(Password, 8, async (err, hash) => {
        const message={
            Notification:`Hello ${Name} Welcome to Ayushman Hospital You can book our services`,
            view:false
        }
        const user = new RegisterationModel({
          Name,
          Email,
          Password:hash,
          Phone,
          Type:"User",
          Notifications:message
        });
        await user.save();
        res.status(200).json({ success: "Registered", user });
      });
    }
  } catch (err) {
    console.log('err', err)
    res.status(401).json({
      error: "Something went wrong",
    });
  }
});

userRoute.post("/login",async(req,res)=>{
    const {Email,Password}=req.body
    try{
        const user=await RegisterationModel.findOne({Email})
        if(user){
            bcrypt.compare(Password,user.Password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userId:user._id},key)
                    res.status(200).json({ success: "Login Successful", token:token });
                }else{
                    res.status(401).json({
                        error: "Please Enter Correct Password , Your Password not match with your current password",
                      });
                }
            })
        }else{
            res.status(401).json({
                error: "Please Enter Correct Email , Your Email not match with your current Email",
              });
        }
    }catch(err){
        console.log('err', err)
    res.status(401).json({
      error: "Something went wrong",
    });
    }
})

userRoute.get("/", async (req, res) => {
  try {
    let data = await RegisterationModel.find();
    // console.log(data);
    res.status(200).json({ data });
  } catch (err) {
    console.log("err", err);
    res.status(401).json({
      error: "Something went wrong",
    });
  }
});

userRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    await RegisterationModel.findByIdAndDelete(id)
    res.send("success")
})

module.exports = {
  userRoute,
};
