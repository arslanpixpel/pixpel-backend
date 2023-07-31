import { query } from "../db";

interface Order {
  playerId: number;
  nftIds: number[];
  developerIds: number;
}

export const createOrder = async (order: Order) => {
  const { playerId, nftIds, developerIds } = order;
  const result = await query("INSERT INTO orders(player_id, nft_ids, developer_ids) VALUES($1, $2, $3) RETURNING *", [
    playerId,
    nftIds,
    developerIds,
  ]);
  return result.rows[0];
};

export const readOrder = async (id: number) => {
  const result = await query("SELECT * FROM orders WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateOrder = async (id: number, updates: Partial<Order>) => {
  const { playerId, nftIds, developerIds } = updates;
  const result = await query("UPDATE orders SET player_id=$1 , nft_ids=$2 , developer_ids=$3 WHERE id=$4 RETURNING *", [
    playerId,
    nftIds,
    developerIds,
    id,
  ]);
  return result.rows[0];
};

export const deleteOrder = async (id: number) => {
  const result = await query("DELETE FROM orders WHERE id=$1", [id]);
  return result.rowCount;
};
