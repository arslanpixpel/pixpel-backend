import { query } from "../db";
import bcrypt from "bcrypt";

interface Developer {
  name: string;
  email: string;
  wallet: string;
  contact_details: string;
  password: string;
}

// export const createDeveloper = async (developer: Developer) => {
//   const { name, email, wallet, contact_details } = developer;
//   const result = await query(
//     "INSERT INTO developers(name, email, wallet, contact_details) VALUES($1, $2, $3, $4) RETURNING *",
//     [name, email, wallet, contact_details]
//   );
//   return result.rows[0];
// };

export const readDeveloper = async (id: number) => {
  const result = await query("SELECT * FROM developers WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateDeveloper = async (id: number, updates: Partial<Developer>) => {
  const { name, email, wallet, contact_details, password } = updates;
  let hashedPassword;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }
  const result = await query(
    "UPDATE developers SET name=$1 , email=$2 , wallet=$3 , contact_details=$4, password=$5 WHERE id=$6 RETURNING *",
    [name, email, wallet, contact_details, hashedPassword || null, id]
  );
  return result.rows[0];
};

export const deleteDeveloper = async (id: number) => {
  const result = await query("DELETE FROM developers WHERE id=$1", [id]);
  return result.rowCount;
};

export const getAllDevelopers = async () => {
  const result = await query("SELECT * FROM developers", []);
  return result.rows;
};

export const signupDeveloper = async (developer: Developer) => {
  const { name, email, wallet, contact_details, password } = developer;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await query(
    "INSERT INTO developers(name, email, wallet, contact_details, password) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [name, email, wallet, contact_details, hashedPassword]
  );
  return result.rows[0];
};

export const signinDeveloper = async (email: string, password: string) => {
  const result = await query("SELECT * FROM developers WHERE email = $1", [email]);
  const developer = result.rows[0];
  if (developer && (await bcrypt.compare(password, developer.password))) {
    return developer;
  } else {
    return null;
  }
};
