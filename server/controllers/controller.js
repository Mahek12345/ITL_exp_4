const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const comp = require("../models/compSchema")

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, email, age, mobile, work, add, desc } = req.body;

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        return res.status(422).send("Please fill all the details" );
    }

    try {
        const preuser = await users.findOne({ email: email });
        // console.log(preuser);
        if (preuser) {
            return res.status(404).send( "This user already exists" );
        } else {
            const adduser = new users({
                name, email, age, mobile, work, add, desc
            });
            await adduser.save();
            res.status(201).json(adduser);
            // console.log(adduser);
        }
    } catch (error) {
        // console.error(error);
        res.status(422).json(error);
    }
});


router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata)
        // console.log(userdata);
    }catch(error){
            res.status(422).json(error);
    }
})

router.get("/getdatacomp",async(req,res)=>{
    try{
        const compdata = await comp.find();
        // console.log(compdata);
        res.status(201).json(compdata)
        

    }catch(error){
        console.error("Error fetching data:", error.message);
            res.status(422).json(error);
    }
});
router.get("/getuser/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const userdata = await users.findById({_id:id});
        // console.log(userdata)
        res.status(201).json(userdata)
        // console.log(userdata);
    }catch(error){
            res.status(422).json(error);
    }
})

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        // console.log(updateduser);
        res.status(201).json(updateduser);

        
    } catch (error) {
        res.status(422).json(error)
    }
})


router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteduser = await users.findByIdAndDelete({_id:id});

        // console.log(deleteduser);
        res.status(201).json(deleteduser);

        
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router;
