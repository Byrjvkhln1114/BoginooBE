const {createUserQuery, getUserQuery, getUserbyidQuery, deleteUserQuery, updateUserQuery}= require("../query/userQuery")
const _= require("lodash")
exports.userCreator=async (req, res)=>{
    try {
      await createUserQuery(req)
      res.status(201).send("success");
      } catch (err) {
         let  boldo= _.map(err.errors, function(el){
            return el.message;
        })
        res.send(boldo);
      }
};
exports.userGeter=async(req, res)=>{
   try {
    res.send({data: await getUserQuery(req)})
   } catch (err) {
    res.send(err)
   }
}
exports.userGetById= async(req, res)=>{
   try {
    res.send({data: await getUserbyidQuery(req)})
   } catch (err) {
      res.send(err)
   }
}
exports.userDelete=async(req, res)=>{
 try {
    res.send({data: await deleteUserQuery(req)})
 } catch (err) {
   res.send(err)
 }
}
exports.UserUpdate= async(req, res)=>{
   try {
   res.send({data: await updateUserQuery(req)})
   } catch (err) {
   res.send(err)
   }
}