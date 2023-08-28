import { query } from "../db";

interface Nft {
  name: string;
  description: string;
  royalty_commission: number;
  primary_owner: string;
  ownership: string[];
  type: "mystery" | "open";
  collection_id: number;
}

export const createNft = async (nft: Nft) => {
  const { name, description, royalty_commission, primary_owner, ownership, type, collection_id } = nft;
  const result = await query(
    "INSERT INTO nfts(name, description, royalty_commission, primary_owner, ownership, type, collection_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, description, royalty_commission, primary_owner, ownership, type, collection_id]
  );
  return result.rows[0];
};

export const readNft = async (name: string) => {
  const result = await query("SELECT * FROM nfts WHERE name = $1", [name]);
  return result.rows[0];
};

export const updateNft = async (name: string, updates: Partial<Nft>) => {
  const { description, royalty_commission, primary_owner, ownership, type, collection_id } = updates;
  const result = await query(
    "UPDATE nfts SET description = $1, royalty_commission = $2, primary_owner = $3, ownership = $4, type = $5, collection_id = $6 WHERE name = $7 RETURNING *",
    [description, royalty_commission, primary_owner, ownership, type, collection_id, name]
  );
  return result.rows[0];
};

export const deleteNft = async (name: string) => {
  const result = await query("DELETE FROM nfts WHERE name = $1", [name]);
  return result.rowCount;
};

export const getAllNfts = async () => {
  const result = await query("SELECT * FROM nfts", []);
  return result.rows;
};
