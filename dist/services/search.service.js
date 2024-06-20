"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const axiosNotionInstance_1 = __importDefault(require("../utils/axiosNotionInstance"));
const config_1 = require("../config/config");
class SearchService {
    async search(pageData, authorization) {
        const response = await axiosNotionInstance_1.default.post(`${config_1.config.notionURLAPI}/search`, pageData, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
}
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map