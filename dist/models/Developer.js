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
exports.deleteDeveloper = exports.updateDeveloper = exports.readDeveloper = exports.createDeveloper = void 0;
const db_1 = require("../db");
const createDeveloper = (developer) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, wallet, contact_details } = developer;
    const result = yield (0, db_1.query)("INSERT INTO developers(name, email, wallet, contact_details) VALUES($1, $2, $3, $4) RETURNING *", [name, email, wallet, contact_details]);
    return result.rows[0];
});
exports.createDeveloper = createDeveloper;
const readDeveloper = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("SELECT * FROM developers WHERE id = $1", [id]);
    return result.rows[0];
});
exports.readDeveloper = readDeveloper;
const updateDeveloper = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, wallet, contact_details } = updates;
    const result = yield (0, db_1.query)("UPDATE developers SET name=$1 , email=$2 , wallet=$3 , contact_details=$4 WHERE id=$5 RETURNING *", [name, email, wallet, contact_details, id]);
    return result.rows[0];
});
exports.updateDeveloper = updateDeveloper;
const deleteDeveloper = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("DELETE FROM developers WHERE id=$1", [id]);
    return result.rowCount;
});
exports.deleteDeveloper = deleteDeveloper;
