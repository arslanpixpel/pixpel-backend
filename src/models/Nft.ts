import { query } from "../db";

// interface Nft {
//   name: string;
//   description: string;
//   royalty_commission: number;
//   primary_owner: string;
//   ownership: string[];
//   type: "mystery" | "open";
//   collection_id: number;
// }

interface SubProperty {
  Name: string;
  Value: string;
}

interface Property {
  [key: string]: {
    Name: string;
    Value: string;
  };
}

interface Nft {
  name: string;
  description: string;
  royalty_commission: number;
  primary_owner: string;
  secondary_owner: string[];
  type: "mystery" | "open";
  category: string;
  img: string;
  collection_id: number;
  kind: string;
  properties: {
    [key: string]: {
      new?: string;
      dsda?: string;
      subProperties: Property;
    };
  }[];
  blockchain: string;
  supply_quantity: number;
  contact_address: string;
  token_id: string;
  token_standard: string;
  creator_fee: string;
  open_auction?: {
    quantity: number;
    price: number;
    duration_hours: number;
  };
  fix_price?: {
    quantity: number;
    price: number;
    duration_hours: number;
  };
  mystery_box?: {
    quantity: number;
    duration_hours: number;
  };
  level: number;
  sub_category: string;
}

// export const createNft = async (nft: Nft) => {
//   try {
//     const {
//       name,
//       description,
//       royalty_commission,
//       primary_owner,
//       ownership,
//       type,
//       collection_id,
//     } = nft;
//     const result = await query(
//       "INSERT INTO nfts(name, description, royalty_commission, primary_owner, ownership, type, collection_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
//       [
//         name,
//         description,
//         royalty_commission,
//         primary_owner,
//         ownership,
//         type,
//         collection_id,
//       ]
//     );
//     return result.rows[0];
//   } catch (err) {
//     const error = err as Error;
//     throw error;
//   }
// };

export const createNft = async (nft: Nft) => {
  try {
    const {
      name,
      description,
      royalty_commission,
      primary_owner,
      secondary_owner,
      type,
      category,
      img,
      collection_id,
      kind,
      properties,
      blockchain,
      supply_quantity,
      contact_address,
      token_id,
      token_standard,
      creator_fee,
      open_auction,
      fix_price,
      mystery_box,
      level,
      sub_category,
    } = nft;

    const result = await query(
      `INSERT INTO nfts(
        name,
        description,
        royalty_commission,
        primary_owner,
        secondary_owner,
        type,
        category,
        img,
        collection_id,
        kind,
        properties,
        blockchain,
        supply_quantity,
        contact_address,
        token_id,
        token_standard,
        creator_fee,
        open_auction,
        fix_price,
        mystery_box,
        level,
        sub_category
      ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
      RETURNING *
      `,
      [
        name,
        description,
        royalty_commission,
        primary_owner,
        secondary_owner,
        type,
        category,
        img,
        collection_id,
        kind,
        JSON.stringify(properties),
        blockchain,
        supply_quantity,
        contact_address,
        token_id,
        token_standard,
        creator_fee,
        open_auction,
        fix_price,
        mystery_box,
        level,
        sub_category,
      ]
    );

    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const readNft = async (id: number) => {
  try {
    const result = await query("SELECT * FROM nfts WHERE id = $1", [id]);
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

// export const updateNft = async (name: string, updates: Partial<Nft>) => {
//   try {
//     const {
//       description,
//       royalty_commission,
//       primary_owner,
//       ownership,
//       type,
//       collection_id,
//     } = updates;
//     const result = await query(
//       "UPDATE nfts SET description = $1, royalty_commission = $2, primary_owner = $3, ownership = $4, type = $5, collection_id = $6 WHERE name = $7 RETURNING *",
//       [
//         description,
//         royalty_commission,
//         primary_owner,
//         ownership,
//         type,
//         collection_id,
//         name,
//       ]
//     );
//     return result.rows[0];
//   } catch (err) {
//     const error = err as Error;
//     throw error;
//   }
// };

export const updateNft = async (name: string, updates: Partial<Nft>) => {
  try {
    const {
      name,
      description,
      royalty_commission,
      primary_owner,
      secondary_owner,
      type,
      category,
      img,
      collection_id,
      kind,
      properties,
      blockchain,
      supply_quantity,
      contact_address,
      token_id,
      token_standard,
      creator_fee,
      open_auction,
      fix_price,
      mystery_box,
    } = updates;

    const result = await query(
      `
      UPDATE nfts
      SET 
        description = $1,
        royalty_commission = $2,
        primary_owner = $3,
        secondary_owner = $4,
        type = $5,
        collection_id = $6,
        kind = $7,
        properties = $8,
        blockchain = $9,
        supply_quantity = $10,
        contact_address = $11,
        token_id = $12,
        token_standard = $13,
        creator_fee = $14,
        open_auction = $15,
        fix_price = $16,
        mystery_box = $17
      WHERE name = $18
      RETURNING *
      `,
      [
        description,
        royalty_commission,
        primary_owner,
        secondary_owner,
        type,
        collection_id,
        category,
        img,
        kind,
        properties,
        blockchain,
        supply_quantity,
        contact_address,
        token_id,
        token_standard,
        creator_fee,
        open_auction,
        fix_price,
        mystery_box,
        name,
      ]
    );

    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const deleteNft = async (name: string) => {
  try {
    const result = await query("DELETE FROM nfts WHERE name = $1", [name]);
    return result.rowCount;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const getAllNfts = async () => {
  try {
    const result = await query("SELECT * FROM nfts", []);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const buyNft = async (nftId: number, buyerAddress: string) => {
  try {
    const result = await query(
      `UPDATE nfts
       SET secondary_owner = array_append(COALESCE(secondary_owner, ARRAY[]::TEXT[]), $1)
       WHERE id = $2
       RETURNING *`,
      [buyerAddress, nftId]
    );

    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export const getNftsByCollectionId = async (collectionId: number) => {
  try {
    const result = await query("SELECT * FROM nfts WHERE collection_id = $1", [
      collectionId,
    ]);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};
