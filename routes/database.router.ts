import axios from "axios";
import { Router } from "express";
import { config } from "config/config";

const router = Router();

router.get("/database/:id", async (req, res, next) => {
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
    next(error);
  }
});

export default router;
