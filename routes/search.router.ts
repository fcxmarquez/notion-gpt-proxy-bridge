import axios from "axios";
import { Router } from "express";
import { config } from "config/config";

const router = Router();

router.get("/search", async (req, res, next) => {
  const query = req.query.q;
  try {
    const response = await axios.post(
      "https://api.notion.com/v1/search",
      {
        query,
        sort: {
          direction: "ascending",
          timestamp: "last_edited_time",
        },
      },
      {
        headers: {
          Authorization: req.headers.authorization,
          "Notion-Version": config.notionVersion,
          "Content-Type": "application/json",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    next(error);
  }
});

export default router;
