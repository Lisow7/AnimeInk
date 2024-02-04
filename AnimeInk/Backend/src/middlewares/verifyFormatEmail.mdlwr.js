import isEmail from "validator/lib/isEmail.js";

export const verifyFormatEmail = async (req, res, next) => {
    const { email } = req.body;
    console.info("LOG.INFO = Middlaware verifyFormatEmail Start ⚙️ -->", email);

    try {
        // Vérification de l'email
        if (!email || !isEmail(email)) {
            console.error("LOG.ERROR = In Middleware Email Format ", email.id);
            return res.status(403).json({ message: `Invalid email format` });
        }

        // Passage à l'étape suivante : verification de l'email
        console.info("Email is good format !⭕");
        console.info("Next step : Verification of email in database before creating new account.. 👀");
        next();

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

