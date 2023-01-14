const User = require("../database/model/user");
const Url = require("../database/model/url");
const bcrypt = require("bcrypt");
exports.createUserQuery = async (req) => {
  const { password, email } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  const result = await new User({
    email: email,
    password: hash,
  }).save();
  return result;
};
exports.createURL = async (req, res) => {
  const { full } = req.body;
  const result = await new Url({
    full: full,
  }).save();
  res.send(result);
};
exports.getUserQuery = async () => {
  const result = await User.find();
  return result;
};
exports.getUserbyidQuery = async (req) => {
  const { uid } = req.body;
  const result = await User.findById({ _id: uid });
  return result;
};
exports.getUserbyidQuery = async (req) => {
  const { email } = req.params;
  const result = await User.findOne({ email: email });
  return result;
};
exports.deleteUserQuery = async (req) => {
  const { uid } = req.body;
  const result = await User.deleteOne({ _id: uid });
  return result;
};
exports.updateUserQuery = async (req) => {
  const { change, value, uid } = req.body;
  let result = "";
  result = await User.findByIdAndUpdate({ _id: uid }, { [change]: value });
  return result;
};
exports.UserdataChecker = async (req, res) => {
  const { email, password } = req.body;
  const bla = await User.findOne({ email: email });
  const a = await bcrypt.compare(password, bla.password);
  if (bla) {
    if (a === true) {
      res.send("Success logged");
    } else {
      res.send("wrong password ");
    }
  } else {
    res.send("YOU dnt have userat this email");
  }
};
