const User = require("../database/model/user")
exports.createUserQuery = async ( req ) => {
    const { username, password, email } = req.body;
    const result =await new User({
      username: username,
      email: email,
      password: password,
    }).save();
    return result
}
exports.getUserQuery= async()=>{
    const result =await  User.find()
    return result;
}
exports.getUserbyidQuery= async (req)=>{
    const {uid}= req.body;
    const result = await User.findById({_id:uid})
    return result
}
exports.deleteUserQuery= async(req)=>{
    const {uid}= req.body;
    const result = await User.deleteOne({_id:uid})
    return result
}
exports.updateUserQuery= async(req)=>{
    const { change, value , uid}= req.body;
    let result=""
    result = await User.findByIdAndUpdate({_id:uid}, { [change] : value })
    return result
}