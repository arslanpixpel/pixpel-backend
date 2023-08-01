"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const developerRoutes_1 = __importDefault(require("./routes/developerRoutes"));
const playerRoutes_1 = __importDefault(require("./routes/playerRoutes"));
const nftorderRoutes_1 = __importDefault(require("./routes/nftorderRoutes"));
const nftRoutes_1 = __importDefault(require("./routes/nftRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const collectionRoutes_1 = __importDefault(require("./routes/collectionRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/developers", developerRoutes_1.default);
app.use("/players", playerRoutes_1.default);
app.use("/orders", nftorderRoutes_1.default);
app.use("/nfts", nftRoutes_1.default);
app.use("/cart", cartRoutes_1.default);
app.use("/collections", collectionRoutes_1.default);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
