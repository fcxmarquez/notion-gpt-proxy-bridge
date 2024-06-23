import express, { Request, Response, NextFunction } from "express";
import { config } from "@/config/config";
import { authenticateRequest, handleError } from "@/middleware";
import { routerApi } from "@/routes";
import axios from "axios";

const app = express();
const PORT = config.port || 3000;

app.use(express.json());
app.use(authenticateRequest);

routerApi(app);

const notionProxy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization || "";
    const response = await axios({
      method: req.method,
      url: `https://api.notion.com/v1${req.path}`,
      headers: {
        Authorization: authorization,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      data: req.body,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

app.use("/notion", notionProxy);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
