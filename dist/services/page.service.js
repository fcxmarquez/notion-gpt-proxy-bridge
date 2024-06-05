"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageService = void 0;
const axiosNotionInstance_1 = __importDefault(require("../utils/axiosNotionInstance"));
const config_1 = require("../config/config");
class PageService {
    async getPage(pageId, authorization) {
        const response = await axiosNotionInstance_1.default.get(`${config_1.config.notionURLAPI}/pages/${pageId}`, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
    async createPage(pageData, authorization) {
        const response = await axiosNotionInstance_1.default.post(`${config_1.config.notionURLAPI}/pages`, pageData, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
}
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map