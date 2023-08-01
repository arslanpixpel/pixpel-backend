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
exports.deleteNft = exports.updateNft = exports.readNft = exports.createNft = void 0;
const db_1 = require("../db");
const createNft = (nft) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, royalty_commission, primary_owner, ownership, type, collection_id } = nft;
    const result = yield (0, db_1.query)("INSERT INTO nfts(name, description, royalty_commission, primary_owner, ownership, type, collection_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [name, description, royalty_commission, primary_owner, ownership, type, collection_id]);
    return result.rows[0];
});
exports.createNft = createNft;
const readNft = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("SELECT * FROM nfts WHERE name = $1", [name]);
    return result.rows[0];
});
exports.readNft = readNft;
const updateNft = (name, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, royalty_commission, primary_owner, ownership, type, collection_id } = updates;
    const result = yield (0, db_1.query)("UPDATE nfts SET description = $1, royalty_commission = $2, primary_owner = $3, ownership = $4, type = $5, collection_id = $6 WHERE name = $7 RETURNING *", [description, royalty_commission, primary_owner, ownership, type, collection_id, name]);
    return result.rows[0];
});
exports.updateNft = updateNft;
const deleteNft = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("DELETE FROM nfts WHERE name = $1", [name]);
    return result.rowCount;
});
exports.deleteNft = deleteNft;
