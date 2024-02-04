import { hashPass } from "../utils/crypto.utils.js";

export const hashPassword = async (req, res, next) => {
    const { password } = req.body;
    console.info("LOG.INFO = = Middleware hashPassword Start ⚙️ -->", req.body);

    try {
        // Validation du mot de passe
        if (!password || password.length <= 4) {
            return res.status(403).json({ message: `Password must have at least 5 characters !⚠️` });
        }

        // Hachage du mot de passe
        const hashResult = await hashPass(password);
        if (hashResult.error) {
            throw new Error(hashResult.error);
        }

        // Passage à l'étape suivante : création du compte
        console.info("Password is hashed !⭕");
        console.info("Next step : Account Creation... 🆕");
        next();

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};