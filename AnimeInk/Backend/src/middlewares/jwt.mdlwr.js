import jwt from "jsonwebtoken";

const jwtOptions = { expiresIn: 28800000 };
// Equivaut à 8H

//Si la valeur booleenne de process.env.JWT_SECRET est false alors secret vaudra "T0P_S3CRet" sinon secret vaudra la valeur du fichier .env
const secret = process.env.JWT_SECRET || "T0P_S3CRet";

// SI process.env.JWT_SECRET est null ou indefined alors secret vaudre "T0P_S3CRet" sinon secret vaudra la valeur du fichiert .env
//const secret = process.env.JWT_SECRET ?? "T0P_S3CRet";

const jwtMdlwr = (req, res, next) => {
    const token = req.headers.authorization;

    const userId = jwtVerify(token);

    if (!userId) return res.status(401).json({ message: "Invalid Token" });

    req.body.userId = userId;

    next();
};

const jwtVerify = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        const userId = decoded.data;
        return userId;
    }
    catch (err) {
        console.error(`jwt.mdlwr.js - jwtVerify - error => `, err.message);
        return null;
    }
};

export const jwtSign = (data) => jwt.sign({ data }, secret, jwtOptions);
// payload = {data: userId } A FAIRE !!

export default jwtMdlwr;

// Faire le lien entre la verification d'email preente dans la base de données. 
