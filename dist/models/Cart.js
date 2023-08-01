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
exports.moveToOrders = exports.removeFromCart = exports.readCart = exports.addToCart = void 0;
const db_1 = require("../db");
const addToCart = (cart) => __awaiter(void 0, void 0, void 0, function* () {
    const { player_id: playerId, nft_id: nftId, developer_id: developerId } = cart;
    const result = yield (0, db_1.query)("INSERT INTO cart(player_id, nft_id, developer_id) VALUES($1, $2, $3) RETURNING *", [
        playerId,
        nftId,
        developerId,
    ]);
    return result.rows[0];
});
exports.addToCart = addToCart;
const readCart = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("SELECT * FROM cart WHERE id = $1", [cartId]);
    return result.rows;
});
exports.readCart = readCart;
const removeFromCart = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("DELETE FROM cart WHERE id = $1", [cartId]);
    return result.rowCount;
});
exports.removeFromCart = removeFromCart;
const moveToOrders = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.query)("BEGIN", []);
    try {
        const cartItems = yield (0, exports.readCart)(cartId);
        for (const item of cartItems) {
            const playerResult = yield (0, db_1.query)("SELECT name FROM players WHERE id = $1", [item.player_id]);
            const playerName = playerResult.rows[0].name;
            yield (0, db_1.query)("INSERT INTO nftorders(player_id, nft_id, developer_id) VALUES($1, $2, $3)", [
                item.player_id,
                item.nft_id,
                item.developer_id,
            ]);
            yield (0, db_1.query)("UPDATE nfts SET primary_owner = $1, ownership = array_append(ownership, $2) WHERE id = $3", [
                playerName,
                item.developer_id,
                item.nft_id,
            ]);
            yield (0, exports.removeFromCart)(item.id);
        }
        yield (0, db_1.query)("COMMIT", []);
    }
    catch (err) {
        yield (0, db_1.query)("ROLLBACK", []);
        throw err;
    }
});
exports.moveToOrders = moveToOrders;
