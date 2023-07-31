import { query } from "../db";

interface Player {
  name: string;
  email: string;
  wallet: string;
}

export const createPlayer = async (player: Player) => {
  const { name, email, wallet } = player;
  const result = await query("INSERT INTO players(name, email, wallet) VALUES($1, $2, $3) RETURNING *", [
    name,
    email,
    wallet,
  ]);
  return result.rows[0];
};

export const readPlayer = async (id: number) => {
  const result = await query("SELECT * FROM players WHERE id = $1", [id]);
  return result.rows[0];
};

export const updatePlayer = async (id: number, updates: Partial<Player>) => {
  const { name, email, wallet } = updates;
  const result = await query("UPDATE players SET name=$1 , email=$2 , wallet=$3 WHERE id=$4 RETURNING *", [
    name,
    email,
    wallet,
    id,
  ]);
  return result.rows[0];
};

export const deletePlayer = async (id: number) => {
  const result = await query("DELETE FROM players WHERE id=$1", [id]);
  return result.rowCount;
};
