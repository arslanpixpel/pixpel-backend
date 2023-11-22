import { query } from "../db";

interface Collection {
  developer_id: number;
  name: string;
}

export const createCollection = async (collection: Collection) => {
  try {
    const { developer_id, name } = collection;
    const result = await query("INSERT INTO collections(developer_id, name) VALUES($1, $2) RETURNING *", [
      developer_id,
      name,
    ]);
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const readCollectionsByCollectionId = async (collectionId: number) => {
  try {
    const result = await query("SELECT * FROM collections WHERE id = $1", [collectionId]);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const readCollectionsByDeveloper = async (developerId: number) => {
  try {
    const result = await query("SELECT * FROM collections WHERE developer_id = $1", [developerId]);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const deleteCollection = async (id: number) => {
  try {
    const result = await query("DELETE FROM collections WHERE id = $1", [id]);
    return result.rowCount;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const getAllCollections = async () => {
  try {
    const result = await query("SELECT * FROM collections", []);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};