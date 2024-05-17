import express from "express";
import { config } from "./config/config.js";
import { authenticateRequest } from "./middleware/index";
import { routerApi } from "./routes/index.js";

const app = express();
const PORT = config.port || 3000;

app.use(authenticateRequest);

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
