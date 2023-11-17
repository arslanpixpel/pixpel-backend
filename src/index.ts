import express from "express";
import cors from "cors";
import developerRoutes from "./routes/developerRoutes";
import playerRoutes from "./routes/playerRoutes";
import orderRoutes from "./routes/nftorderRoutes";
import nftRoutes from "./routes/nftRoutes";
import cartRoutes from "./routes/cartRoutes";
import collectionRoutes from "./routes/collectionRoutes";
import launchpadRoutes from "./routes/launchpadRoutes";
import tokenreleaseRoutes from "./routes/tokenreleaseRoutes";
import gamedashboard from "./routes/gamedashboard";

const app = express();
const port = 3001;
const swaggerDoc = require("swagger-ui-express");
const fileUpload = require("express-fileupload");
const pinata = require("./routes/pinata");
const upload = require("./routes/upload");
const swaggerDocumentation = require("./helper/Documentation.ts");

app.use(cors());
app.use(express.json());
app.use("/documentations", swaggerDoc.serve);
app.use("/documentations", swaggerDoc.setup(swaggerDocumentation));

app.use(
  fileUpload({
    useTempFiles: false,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `${__dirname}/uploads/`,
  })
);
app.use("/", upload);
app.use("/pinata", pinata);

app.use("/developers", developerRoutes);
app.use("/players", playerRoutes);
app.use("/orders", orderRoutes);
app.use("/nfts", nftRoutes);
app.use("/cart", cartRoutes);
app.use("/collections", collectionRoutes);
app.use("/launchpad", launchpadRoutes);
app.use("/tokenrelease", tokenreleaseRoutes);
app.use("/gamedashboard", gamedashboard);

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
