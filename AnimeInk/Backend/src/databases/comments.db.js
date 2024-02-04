import query from "./init.db.js";

export const getAllComments = async() => {
  const sql =`
    SELECT * comments`;
  console.log(`${result} First LOG !⚠️`);

  let error = null;
  let result = null;

  try {
    result = await query(sql);
  }
  catch (err) {
    error = err.message;;
  }
  finally {
    return { error, result };
  }
};
