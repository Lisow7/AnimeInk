import jwt from "jsonwebtoken";

const jwtOptions = { expiresIn: 28800000 }; // Equivaut à 8H
const secretKey = process.env.JWT_SECRET || "T0P_S3CRet";

export const generateToken = (userId) => {
  const payload = {
    user_id: userId,
  };

  return jwt.sign(payload, secretKey, jwtOptions);
};
