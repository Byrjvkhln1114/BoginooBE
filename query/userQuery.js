const User = require("../database/model/user");
const Url = require("../database/model/url");
const bcrypt = require("bcrypt");
const { TokenGenerator } = require("../helper/helper");
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
  const { full, uid } = req.body;
  const result = await new Url({
    full: full,
    uid: uid,
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
exports.updateUserQuery = async (req, res) => {
  const { password, email } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  const result = await User.findOneAndUpdate(
    { email: email },
    { password: hash }
  );
  return result;
};
exports.UserdataChecker = async (req, res) => {
  const { email, password } = req.body;
  const bla = await User.findOne({ email: email });
 
  if (bla) {
    const a = await bcrypt.compare(password, bla.password);
    const token = await TokenGenerator({ result: bla, expires: 300 });
    if (a === true) {
      res.send(["Success logged", bla._id, bla.email.split("@")[0], token]);
    } else {
      res.send("wrong password ");
    }
  } else {
    res.send("YOU dnt have userat this email");
  }
};
exports.UrlCarrier = async (req, res) => {
  const { shortUrl } = req.params;
  const result = await Url.findOne({ short: shortUrl });
  result?.full ? res.redirect(result.full) : res.send("invalid url");
};
exports.urlAllDelete = async (req, res) => {
  const result = await Url.deleteMany({});
  res.send(result);
};
exports.UrlHistory = async (req, res) => {
  const { uid } = req.params;
  const result = await Url.find({ uid: uid });
  res.send(result);
};