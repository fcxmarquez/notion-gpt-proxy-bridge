"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
const axiosInstance = axios_1.default.create();
axiosInstance.interceptors.request.use((config) => {
    config.headers.set("Notion-Version", config_1.config.notionVersion);
    config.headers.set("Content-Type", "application/json");
    return config;
}, (error) => {
    return Promise.reject(error);
});
exports.default = axiosInstance;
//# sourceMappingURL=axiosNotionInstance.js.map