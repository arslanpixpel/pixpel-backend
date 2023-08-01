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
exports.deletePlayer = exports.updatePlayer = exports.readPlayer = exports.createPlayer = void 0;
const db_1 = require("../db");
const createPlayer = (player) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, wallet } = player;
    const result = yield (0, db_1.query)("INSERT INTO players(name, email, wallet) VALUES($1, $2, $3) RETURNING *", [
        name,
        email,
        wallet,
    ]);
    return result.rows[0];
});
exports.createPlayer = createPlayer;
const readPlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("SELECT * FROM players WHERE id = $1", [id]);
    return result.rows[0];
});
exports.readPlayer = readPlayer;
const updatePlayer = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, wallet } = updates;
    const result = yield (0, db_1.query)("UPDATE players SET name=$1 , email=$2 , wallet=$3 WHERE id=$4 RETURNING *", [
        name,
        email,
        wallet,
        id,
    ]);
    return result.rows[0];
});
exports.updatePlayer = updatePlayer;
const deletePlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("DELETE FROM players WHERE id=$1", [id]);
    return result.rowCount;
});
exports.deletePlayer = deletePlayer;
