import { query } from "../db";

interface TokenReleaseData {
  id: number;
  per_cycle_release: number;
  release_time: string;
}

export const createTokenReleaseData = async (data: TokenReleaseData) => {
  const { id, per_cycle_release, release_time } = data;
  const result = await query(
    "INSERT INTO token_release_data(id, per_cycle_release, release_time) VALUES($1, $2, $3) RETURNING *",
    [id, per_cycle_release, release_time]
  );

  return result.rows[0];
};

export const readTokenReleaseData = async (id: number) => {
  const result = await query("SELECT * FROM token_release_data WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateTokenReleaseData = async (id: number, updates: Partial<TokenReleaseData>) => {
  const { per_cycle_release, release_time } = updates;
  const result = await query(
    "UPDATE token_release_data SET per_cycle_release = $1, release_time = $2 WHERE id = $3 RETURNING *",
    [per_cycle_release, release_time, id]
  );
  return result.rows[0];
};

export const deleteTokenReleaseData = async (id: number) => {
  const result = await query("DELETE FROM token_release_data WHERE id = $1", [id]);
  return result.rowCount;
};

export const getAllTokenReleaseData = async () => {
  const result = await query("SELECT * FROM token_release_data", []);
  return result.rows;
};
