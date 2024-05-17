import axios from "axios";
import { Router } from "express";
import { config } from "config/config";
import { handleError } from "@/utils/errorHandler";

const router = Router();

router.get("/database/:id", async (req, res) => {
  const databaseId = req.params.id;
  try {
    const response = await axios.get(
      `https://api.notion.com/v1/databases/${databaseId}`,
      {
        headers: {
          Authorization: req.headers.authorization,
          "Notion-Version": config.notionVersion,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    const { message, status } = handleError(error);
    res.status(status).send(message);
  }
});

export default router;
