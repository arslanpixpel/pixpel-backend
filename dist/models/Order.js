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
exports.deleteOrder = exports.updateOrder = exports.readOrder = exports.createOrder = void 0;
const db_1 = require("../db");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, nftIds, developerIds } = order;
    const result = yield (0, db_1.query)('INSERT INTO orders(user_id, nft_ids, developer_ids) VALUES($1, $2, $3) RETURNING *', [userId, nftIds, developerIds]);
    return result.rows[0];
});
exports.createOrder = createOrder;
const readOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('SELECT * FROM orders WHERE id = $1', [id]);
    return result.rows[0];
});
exports.readOrder = readOrder;
const updateOrder = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, nftIds, developerIds } = updates;
    const result = yield (0, db_1.query)('UPDATE orders SET user_id=$1 , nft_ids=$2 , developer_ids=$3 WHERE id=$4 RETURNING *', [userId, nftIds, developerIds, id]);
    return result.rows[0];
});
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('DELETE FROM orders WHERE id=$1', [id]);
    return result.rowCount;
});
exports.deleteOrder = deleteOrder;
