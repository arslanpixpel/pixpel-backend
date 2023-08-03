import { Pool } from "pg";

const pool = new Pool({
  user: "ubuntu",
  host: "127.0.0.1",
  database: "postgres",
  password: "ubuntu",
  port: 5432,
});

const createTable = async (tableName: string, columns: string) => {
  const result = await pool.query(
    `
        SELECT EXISTS (
            SELECT FROM information_schema.tables
            WHERE table_name = $1
        )
    `,
    [tableName]
  );
  const tableExists = result.rows[0].exists;
  if (!tableExists) {
    await pool.query(`CREATE TABLE ${tableName} (${columns})`);
  }
};

createTable("players", "id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, wallet TEXT NOT NULL");

createTable(
  "developers",
  "id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, wallet TEXT NOT NULL, contact_details INTEGER NULL"
);

createTable(
  "collections",
  "id SERIAL PRIMARY KEY, developer_id INTEGER NOT NULL REFERENCES developers(id), name TEXT NOT NULL"
);

createTable(
  "nfts",
  "id SERIAL PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, royalty_commission INTEGER NOT NULL, primary_owner TEXT NOT NULL, ownership TEXT[] NOT NULL, type TEXT NOT NULL CHECK (type IN ('mystery', 'open')), collection_id INTEGER REFERENCES collections(id)"
);

createTable(
  "nftorders",
  "id SERIAL PRIMARY KEY, player_id INTEGER NOT NULL REFERENCES players(id), nft_id INTEGER NOT NULL REFERENCES nfts(id), developer_id INTEGER NOT NULL REFERENCES developers(id)"
);

createTable(
  "cart",
  "id SERIAL PRIMARY KEY, player_id INTEGER NOT NULL REFERENCES players(id), nft_id INTEGER NOT NULL REFERENCES nfts(id), developer_id INTEGER NOT NULL REFERENCES developers(id)"
);

export const query = (text: string, params: any[]) => pool.query(text, params);
