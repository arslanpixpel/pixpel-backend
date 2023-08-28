import { query } from "../db";
import bcrypt from "bcrypt";
interface Developer {
  name: string;
  email: string;
  wallet: string;
  contact_details: string;
  password: string;
}

export const readDeveloper = async (id: number) => {
  try {
    const result = await query("SELECT * FROM developers WHERE id = $1", [id]);
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const updateDeveloper = async (id: number, updates: Partial<Developer>) => {
  try {
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
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const deleteDeveloper = async (id: number) => {
  try {
    const result = await query("DELETE FROM developers WHERE id=$1", [id]);
    return result.rowCount;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const getAllDevelopers = async () => {
  try {
    const result = await query("SELECT * FROM developers", []);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const signupDeveloper = async (developer: Developer) => {
  try {
    const { name, email, wallet, contact_details, password } = developer;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await query(
      "INSERT INTO developers(name, email, wallet, contact_details, password) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, email, wallet, contact_details, hashedPassword]
    );
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const signinDeveloper = async (email: string, password: string) => {
  try {
    const result = await query("SELECT * FROM developers WHERE email = $1", [email]);
    const developer = result.rows[0];
    if (developer && (await bcrypt.compare(password, developer.password))) {
      return developer;
    } else {
      return null;
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};