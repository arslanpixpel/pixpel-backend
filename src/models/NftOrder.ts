import { query } from "../db";

interface Order {
  player_id: number;
  nft_id: number;
  developer_id: number;
}

export const createOrder = async (order: Order) => {
  const { player_id: player_id, nft_id: nft_id, developer_id: developer_id } = order;
  const result = await query("INSERT INTO orders(player_id, nft_id, developer_id) VALUES($1, $2, $3) RETURNING *", [
    player_id,
    nft_id,
    developer_id,
  ]);
  return result.rows[0];
};

export const readOrder = async (id: number) => {
  const result = await query("SELECT * FROM nftorders WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateOrder = async (id: number, updates: Partial<Order>) => {
  const { player_id: player_id, nft_id: nft_id, developer_id: developer_id } = updates;
  const result = await query(
    "UPDATE nftorders SET player_id=$1 , nft_id=$2 , developer_id=$3 WHERE id=$4 RETURNING *",
    [player_id, nft_id, developer_id, id]
  );
  return result.rows[0];
};

export const deleteOrder = async (id: number) => {
  const result = await query("DELETE FROM nftorders WHERE id=$1", [id]);
  return result.rowCount;
};

export const getAllNftOrders = async () => {
  const result = await query("SELECT * FROM nftorders", []);
  return result.rows;
};
