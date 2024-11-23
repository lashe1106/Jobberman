const User = require("../models/usermodel")
const crypto = require("crypto")
const bcrypt = require("bcrypt")
// const { genSalt } = require("bcrypt")

const userService = () => {
    const signUserUp = async (req, res) => {
        try {
            let newUser = new User();
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.emailAddress = req.body.emailAddress;
            newUser.phoneNumber = req.body.phoneNumber;
            newUser.type = req.body.type;

            const saltRound = 10
            const hash = await bcrypt.hash(req.body.password, saltRound)

            // const egnSalt = bcrypt.genSalt(saltRound)
            // const hash2 = bcrypt.hash(req.body.password, genSalt)

            // const randomKey = crypto.randomKey
            console.log(hash);
            // res.send("password hashed")
            
            newUser.password = hash;

            newUser.save().then(data => {
                res.send("User saved successfully")
            })  
        } catch (error) {
            res.send("There is an error with your request" + error)
        }

    };

    const signUserIn = async (req, res) => {
        try {
            const userData = await User.findOne({
                emailAddress: req.body.emailAddress,
            })
            console.log(userData.password);
            
            if (userData) {
                let isPasswordCorrect = bcrypt.compareSync(
                    req.body.password,
                    userData.password
                )
                console.log(isPasswordCorrect);
                
                if (isPasswordCorrect) {
                    res.json({
                        message: "You are logged in",
                        data: userData,
                    })
                } else {
                    res.send("Your password is incorrect")
                }
            } else {
                res.send("You have not signed up yet!") 
            }
        } catch (error) {
            res.send("You have not signed up yet!") 
        }
    };

    return {signUserUp, signUserIn};
}

module.exports = userService;