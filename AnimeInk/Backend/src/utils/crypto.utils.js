import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPass = async (pass) => {
  try {
    const hashed = await bcrypt.hash(pass, saltRounds);
    return hashed;
  } catch (err) {
    console.error(err.message);
  }
};

export const compareHash = async (passNotHashed, passHashed) => {
  try {
    return await bcrypt.compare(passNotHashed, passHashed);
  } catch (err) {
    console.error(err.message);
    return false;
  }
};
