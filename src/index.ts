import express from "express";
import cors from "cors";
import developerRoutes from "./routes/developerRoutes";
import playerRoutes from "./routes/playerRoutes";
import orderRoutes from "./routes/nftorderRoutes";
import nftRoutes from "./routes/nftRoutes";
import cartRoutes from "./routes/cartRoutes";
import collectionRoutes from "./routes/collectionRoutes";

const app = express();
const port = 3000;
const swaggerDoc = require("swagger-ui-express");
const swaggerDocumentation = require("./helper/Documentation.ts");

app.use(cors());
app.use(express.json());
app.use("/documentations", swaggerDoc.serve);
app.use("/documentations", swaggerDoc.setup(swaggerDocumentation));

app.use("/developers", developerRoutes);
app.use("/players", playerRoutes);
app.use("/orders", orderRoutes);
app.use("/nfts", nftRoutes);
app.use("/cart", cartRoutes);
app.use("/collections", collectionRoutes);

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
