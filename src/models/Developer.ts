import { query } from "../db";

interface Developer {
  name: string;
  email: string;
  wallet: string;
  contact_details: string;
}

export const createDeveloper = async (developer: Developer) => {
  const { name, email, wallet, contact_details } = developer;
  const result = await query(
    "INSERT INTO developers(name, email, wallet, contact_details) VALUES($1, $2, $3, $4) RETURNING *",
    [name, email, wallet, contact_details]
  );
  return result.rows[0];
};

export const readDeveloper = async (id: number) => {
  const result = await query("SELECT * FROM developers WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateDeveloper = async (id: number, updates: Partial<Developer>) => {
  const { name, email, wallet, contact_details } = updates;
  const result = await query(
    "UPDATE developers SET name=$1 , email=$2 , wallet=$3 , contact_details=$4 WHERE id=$5 RETURNING *",
    [name, email, wallet, contact_details, id]
  );
  return result.rows[0];
};

export const deleteDeveloper = async (id: number) => {
  const result = await query("DELETE FROM developers WHERE id=$1", [id]);
  return result.rowCount;
};
