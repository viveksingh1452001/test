const express = require('express');
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const Auth = require('../middleware/Auth')
//! const jwt = require ('jsonwebtoken')





const router = express.Router();

require("../db/conn");


router.get('/', (req, res) => {
    res.send('home page');
})


//! SIGNUP
router.post('/signup', async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body;
        // name = name.trim();
        // email = email.trim();
        // phone = phone.trim();
        // password = password.trim();
        // cpassword = cpassword.trim();

        const newUser = await User.findOne({ email: email });
        
        if (!name || !email || !phone || !password || !cpassword) {
            return res.status(204).json({ error: "empty field" })
        }
        else if (!newUser) {
            if (password !== cpassword) {
                return res.status(400).json({ error: "password and cpassword doesn't match" });
            }
            else {

                //! const salt = await bcrypt.genSalt(10);
                //! const hashPaswd = await bcrypt.hash(password,salt);

                const user = new User({
                    name: name,
                    email: email,
                    phone: phone,
                    password,
                    cpassword
                })
                //! hashed password in user model--------->
                const savedUser = await user.save();
                console.log(savedUser)
                res.status(201).json({ message: "registered successfully" });
            }
        }
        else {
            return res.status(409).json({ error: "user existed" });
        }
    }
    catch {
        res.status(404).json({ error: "something went wrong" })
    }
});


//!   login

router.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;
        const newuser = await User.findOne({ email: email })
        if (!email || !password) {
            return res.status(204).json({ error: "field is missing" });
        }

        if (!newuser) {
            return res.status(404).json({ error: "user doesn't exist" });
        }
        else {

            const pMatch = await bcrypt.compare(password, newuser.password)
            if (pMatch) {
                if (email === newuser.email && pMatch) {

                    //!    const token = jwt.sign({id:newuser._id},process.env.SECRET_KEY);
                    //!    console.log(token);

                    const token = await newuser.generateAuthToken();
                    res.cookie('jwttoken', token, {
                        expires: new Date(Date.now() + 86400000),
                        httpOnly: true,
                    })
                    res.status(201).json({ message: "logged in !!" });
                }
                else {
                    return res.status(401).json({ error: "invalid credentials" });
                }
            }
            else {
                return res.status(403).json({ error: "invalid credentials" });
            }
        }
    }
    catch {
        res.json({ error: error });
    }

})


//! About 

router.get('/about',Auth,(req,res)=>{
    res.status(200).send(req.rootUser)
})




module.exports = router;








//! this code for signup uses promises
// router.post('/signup',(req,res)=>{
//     const {name , email, phone, password, cpassword} = req.body;

//     if (!name  || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error:"empty field"})
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist" })
//             }

//             const user = new User({ name, email, phone, password, cpassword });
//             if (user.password != user.cpassword) {
//                 return res.json({ error: "password and cpassword doesn't match" })
//             }

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfully" });
//             }).catch((error) => { res.status(500).json({ error: "failed to register" }) })

//         }).catch((error) => { console.log(error) });


// })