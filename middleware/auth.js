const jwt = require("jsonwebtoken");
const UserData = require('../model/UserData');
const {AppError,Success} = require('../utils.js');

const checkValidToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json(AppError("Login Again"));
  }

  const token = authorization.replace("Bearer ", "");
//   console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(500).json(AppError("Login Again"));
    }

    const { email } = payload;
    const user = await UserData.findOne({email}).select('-password').lean();
    console.log(user);

  });
};

module.exports= checkValidToken;