import { verify, sign } from "jsonwebtoken";

const jwtOptions = { expiresIn: 28800000 };
const secret = process.env.JWT_SECRET || "T0P_S3CRet";

// Middleware pour créer et vérifier les tokens JWT
const jwtMdlwr = (req, res, next) => {
  const token = req.headers.authorization;

  const userId = jwtVerify(token);

  if (!userId) return res.status(401).json({ message: "Invalid Token" });

  req.body.userId = userId;

  next();
};

const jwtVerify = (token) => {
  try {
    const decoded = verify(token, secret);
    const userId = decoded.data;
    return userId;
  } catch (err) {
    console.error(`jwt.mdlwr.js - jwtVerify - error => `, err.message);
    return null;
  }
};

// Fonction pour signer le token JWT avec un payload contenant "username" et "avatar"
export const jwtSign = (data, username, avatar) =>
  sign({ data, username, avatar }, secret, jwtOptions);

export default jwtMdlwr;
