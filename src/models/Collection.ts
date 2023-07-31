import { query } from "../db";

interface Collection {
  developer_id: number;
  name: string;
}

export const createCollection = async (collection: Collection) => {
  const { developer_id, name } = collection;
  const result = await query("INSERT INTO collections(developer_id, name) VALUES($1, $2) RETURNING *", [
    developer_id,
    name,
  ]);
  return result.rows[0];
};

export const readCollectionsByDeveloper = async (developerId: number) => {
  const result = await query("SELECT * FROM collections WHERE developer_id = $1", [developerId]);
  return result.rows;
};

export const deleteCollection = async (id: number) => {
  const result = await query("DELETE FROM collections WHERE id = $1", [id]);
  return result.rowCount;
};
