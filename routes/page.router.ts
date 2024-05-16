import express from 'express';
import axios from 'axios';
import { config } from '@/config/config.js';
import { authenticateRequest } from '@/middleware/index.js';
import { handleError } from '@/utils/errorHandler';

const router = express.Router();

router.use(authenticateRequest);

router.get('/page/:id', async (req, res) => {
  const pageId = req.params.id;
  try {
    const response = await axios.get(`https://api.notion.com/v1/pages/${pageId}`, {
      headers: {
        'Authorization': req.headers.authorization,
        'Notion-Version': config.notionVersion,
      },
    });
    res.send(response.data);
  } catch (error) {
    const { message, status } = handleError(error);
    res.status(status).send(message);
  }
});

router.patch('/page/:id', async (req, res) => {
  const pageId = req.params.id;
  const updates = req.body; // Assuming the body contains the updates for the page

  try {
    const response = await axios.patch(`https://api.notion.com/v1/pages/${pageId}`, updates, {
      headers: {
        'Authorization': req.headers.authorization,
        'Notion-Version': config.notionVersion,
        'Content-Type': 'application/json',
      },
    });
    res.send(response.data);
  } catch (error) {
    const { message, status } = handleError(error);
    res.status(status).send(message);
  }
});

export default router;
