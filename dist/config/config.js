"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    notionApiKey: process.env.NOTION_API_KEY,
    port: process.env.PORT,
    notionVersion: "2022-06-28",
    notionURLAPI: "https://api.notion.com/v1",
};
//# sourceMappingURL=config.js.map