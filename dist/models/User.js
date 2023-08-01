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
exports.deleteUser = exports.updateUser = exports.readUser = exports.createUser = void 0;
const db_1 = require("../db");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, wallet, type } = user;
    const result = yield (0, db_1.query)('INSERT INTO users(name, email, wallet, type) VALUES($1, $2, $3, $4) RETURNING *', [name, email, wallet, type]);
    return result.rows[0];
});
exports.createUser = createUser;
const readUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('SELECT * FROM users WHERE name = $1', [name]);
    return result.rows[0];
});
exports.readUser = readUser;
const updateUser = (name, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, wallet, type } = updates;
    const result = yield (0, db_1.query)('UPDATE users SET email = $1, wallet = $2, type = $3 WHERE name = $4 RETURNING *', [email, wallet, type, name]);
    return result.rows[0];
});
exports.updateUser = updateUser;
const deleteUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('DELETE FROM users WHERE name = $1', [name]);
    return result.rowCount;
});
exports.deleteUser = deleteUser;
