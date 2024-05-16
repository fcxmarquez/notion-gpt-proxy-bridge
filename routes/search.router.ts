import axios from "axios";
import { config } from "@/config/config";
import { Router } from "express";
import { handleError } from "@/utils/errorHandler";

const router = Router();

router.get("/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.post(
      "https://api.notion.com/v1/search",
      {
        query: query,
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
    const { message, status } = handleError(error);
    res.status(status).send(message);
  }
});

export default router;
