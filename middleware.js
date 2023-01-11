const { TokenChecker } = require("./helper/helper");

exports.userMiddleware = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).send({ message: "No token is expired!" });
    return;
  }
  const secret = "lol999za";
  const result = await TokenChecker({ token, secret });
  if (result === "Expired tokens") {
    res.status(401).send({ message: "Your token is expired!" });
    return;
  } else if (result.user) {
    next();
    return;
  } else {
    res.status(401).send({ message: "invalid token" });
    return;
  }
};
