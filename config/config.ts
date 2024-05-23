import dotenv from "dotenv";

dotenv.config();

export const config = {
  notionApiKey: process.env.NOTION_API_KEY,
  port: process.env.PORT,
  notionVersion: "2022-06-28",
  notionURLAPI: "https://api.notion.com/v1",
};
