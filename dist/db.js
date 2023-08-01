"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Cubicus123",
    port: 5432,
});
const createTable = (tableName, columns) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pool.query(`
        SELECT EXISTS (
            SELECT FROM information_schema.tables
            WHERE table_name = $1
        )
    `, [tableName]);
    const tableExists = result.rows[0].exists;
    if (!tableExists) {
        yield pool.query(`CREATE TABLE ${tableName} (${columns})`);
    }
});
createTable("players", "id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, wallet TEXT NOT NULL");
createTable("developers", "id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, wallet TEXT NOT NULL, contact_details INTEGER NULL");
createTable("collections", "id SERIAL PRIMARY KEY, developer_id INTEGER NOT NULL REFERENCES developers(id), name TEXT NOT NULL");
createTable("nfts", "id SERIAL PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, royalty_commission INTEGER NOT NULL, primary_owner TEXT NOT NULL, ownership TEXT[] NOT NULL, type TEXT NOT NULL CHECK (type IN ('mystery', 'open')), collection_id INTEGER REFERENCES collections(id)");
createTable("nftorders", "id SERIAL PRIMARY KEY, player_id INTEGER NOT NULL REFERENCES players(id), nft_id INTEGER NOT NULL REFERENCES nfts(id), developer_id INTEGER NOT NULL REFERENCES developers(id)");
createTable("cart", "id SERIAL PRIMARY KEY, player_id INTEGER NOT NULL REFERENCES players(id), nft_id INTEGER NOT NULL REFERENCES nfts(id), developer_id INTEGER NOT NULL REFERENCES developers(id)");
const query = (text, params) => pool.query(text, params);
exports.query = query;
