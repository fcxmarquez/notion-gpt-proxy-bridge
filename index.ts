import express from "express";
import { config } from "@/config/config.js";
import { authenticateRequest, handleError } from "@/middleware";
import { routerApi } from "@/routes/index.js";

const app = express();
const PORT = config.port || 3000;

app.use(authenticateRequest);

routerApi(app);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
