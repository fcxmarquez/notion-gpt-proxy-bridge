import express from 'express';
import axios from 'axios';
import { config } from './config/config.js';
import { authenticateRequest } from './middleware/index.js';

const app = express();
const PORT = config.port || 3000;

app.use(authenticateRequest);

app.get('/page/:id', async (req, res) => {
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
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send(error.message);
  }
});

app.patch('/page/:id', async (req, res) => {
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
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send(error.message);
  }
});

// New endpoint to connect to a database
app.get('/database/:id', async (req, res) => {
  const databaseId = req.params.id;
  try {
    const response = await axios.get(`https://api.notion.com/v1/databases/${databaseId}`, {
      headers: {
        'Authorization': req.headers.authorization,
        'Notion-Version': config.notionVersion,
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send(error.message);
  }
});

// New endpoint to search
app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.post('https://api.notion.com/v1/search', {
      query: query,
      sort: {
        direction: 'ascending',
        timestamp: 'last_edited_time',
      },
    }, {
      headers: {
        'Authorization': req.headers.authorization,
        'Notion-Version': config.notionVersion,
        'Content-Type': 'application/json',
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});