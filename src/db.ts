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

createTable(
  "launchpad_data",
  "id SERIAL PRIMARY KEY, cancel BOOLEAN NOT NULL, cis2_amount INTEGER NOT NULL, cis2_price INTEGER NOT NULL, cliff_duration INTEGER NOT NULL, cliff_period TEXT NOT NULL, description TEXT NOT NULL, dev_paid INTEGER NOT NULL, discord_url TEXT, end_time TEXT NOT NULL, fb_url TEXT, github_url TEXT, hard_cap INTEGER NOT NULL, holders INTEGER NOT NULL, address TEXT NOT NULL, amount INTEGER NOT NULL, instagram_url TEXT, invest_amount INTEGER NOT NULL, live BOOLEAN NOT NULL, live_pause_count INTEGER NOT NULL, logo_url TEXT NOT NULL, maximum_invest INTEGER NOT NULL, minimum_invest INTEGER NOT NULL, owner TEXT NOT NULL, pause_start TEXT NOT NULL, pause_until TEXT NOT NULL, reddit_url TEXT, soft_cap INTEGER NOT NULL,start_time TEXT NOT NULL,telegram_url TEXT,title TEXT NOT NULL,token_release_data INTEGER[] NOT NULL,total_tx INTEGER NOT NULL,twitter_url TEXT,website_url TEXT"
);

createTable(
  "token_release_data",
  "id SERIAL PRIMARY KEY, per_cycle_release INTEGER NOT NULL, release_time TEXT NOT NULL"
);

export const query = (text: string, params: any[]) => pool.query(text, params);
