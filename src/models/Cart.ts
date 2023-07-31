import { query } from "../db";

interface Cart {
  player_id: number;
  nft_id: number;
  developer_id: number;
}

export const addToCart = async (cart: Cart) => {
  const { player_id: playerId, nft_id: nftId, developer_id: developerId } = cart;
  const result = await query("INSERT INTO cart(player_id, nft_id, developer_id) VALUES($1, $2, $3) RETURNING *", [
    playerId,
    nftId,
    developerId,
  ]);
  return result.rows[0];
};

export const readCart = async (cartId: number) => {
  const result = await query("SELECT * FROM cart WHERE id = $1", [cartId]);
  return result.rows;
};

export const removeFromCart = async (cartId: number) => {
  const result = await query("DELETE FROM cart WHERE id = $1", [cartId]);
  return result.rowCount;
};

export const moveToOrders = async (cartId: number) => {
    await query("BEGIN", []);
  
    try {
      const cartItems = await readCart(cartId);
  
      for (const item of cartItems) {
        const playerResult = await query("SELECT name FROM players WHERE id = $1", [item.player_id]);
        const playerName = playerResult.rows[0].name;
  
        await query("INSERT INTO nftorders(player_id, nft_id, developer_id) VALUES($1, $2, $3)", [
          item.player_id,
          item.nft_id,
          item.developer_id,
        ]);
  
        await query("UPDATE nfts SET primary_owner = $1, ownership = array_append(ownership, $2) WHERE id = $3", [
          playerName,
          item.developer_id,
          item.nft_id,
        ]);
  
        await removeFromCart(item.id);
      }
  
      await query("COMMIT", []);
    } catch (err) {
      await query("ROLLBACK", []);
      throw err;
    }
  };
  
