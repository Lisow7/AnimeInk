import bcrypt from "bcrypt";

// Le salt permet d'avoir toujours un resultat different pour un même mot de passe, plus le nbr de tours est élevé, plus l'operation est longue.
const saltRounds = 10;
//Chercher pourquoi 10?
//  -> juste milieu
export const hashPass = async (pass) => {
  let error = null;
  let hashed = null;

  try {
    hashed = await bcrypt.hash(pass, saltRounds);
  } catch (err) {
    error = err.message;
  } finally {
    return { error, hashed };
  }
};

export const compareHash = async (passNotHashed, passHashed) => {
  let isSame = false;

  try {
    isSame = await bcrypt.compare(passNotHashed, passHashed);
  } catch (err) {
    console.error(err.message);
  } finally {
    return isSame;
  }
};