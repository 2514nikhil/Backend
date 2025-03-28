const userModel = require("../Model/userSchema");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    const { email, password} = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      res.send({ message: "User Exist" });
    }
    const salt = await bcrypt.genSalt();
    
    const hash_password = await bcrypt.hash(password, salt);
    const newUser = new userModel({email, password: hash_password });
    await newUser.save();
    res.send({ message: "User Created Successfully" });
    
};  

module.exports = {registerUser};
