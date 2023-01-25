const jwt = require("jsonwebtoken");

exports.TokenGenerator = async ({ result, expires }) => {
  return await jwt.sign({ result: result }, process.env.JWT || "lol999za", {
    expiresIn: expires,
  });
};
exports.TokenChecker = async ({ token, secret }) => {
  const result = await jwt.verify(token, secret, (error, decoded) => {
    if (error && error.message === "jwt expired") {
      return error.message;
    } else if (error) {
      return "Invalid token";
    }
    return decoded;
  });
  return result;
};
