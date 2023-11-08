import { query } from "../db";
import bcrypt from "bcrypt";

interface Player {
  name: string;
  email: string;
  wallet: string;
  password: string;
}

export const readPlayer = async (id: number) => {
  try {
    const result = await query("SELECT * FROM players WHERE id = $1", [id]);
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const updatePlayer = async (id: number, updates: Partial<Player>) => {
  try {
    const { name, email, wallet, password } = updates;
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    const result = await query(
      "UPDATE players SET name=$1 , email=$2 , wallet=$3 , password=$4 WHERE id=$5 RETURNING *",
      [name, email, wallet, hashedPassword || null, id]
    );
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const deletePlayer = async (id: number) => {
  try {
    const result = await query("DELETE FROM players WHERE id=$1", [id]);
    return result.rowCount;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const getAllPlayers = async () => {
  try {
    console.log("haha");
    const result = await query("SELECT * FROM players", []);
    console.log("haha2");
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const signupPlayer = async (player: {
  name: string;
  email: string;
  wallet: string;
  password: string;
}) => {
  try {
    const { name, email, wallet, password } = player;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await query(
      "INSERT INTO players(name, email, wallet, password) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, wallet, hashedPassword]
    );
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const signinPlayer = async (email: string, password: string) => {
  try {
    const result = await query("SELECT * FROM players WHERE email = $1", [
      email,
    ]);
    const player = result.rows[0];
    if (player && (await bcrypt.compare(password, player.password))) {
      return player;
    } else {
      return null;
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};
