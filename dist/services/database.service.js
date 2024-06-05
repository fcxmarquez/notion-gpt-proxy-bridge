"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const axiosNotionInstance_1 = __importDefault(require("../utils/axiosNotionInstance"));
const config_1 = require("../config/config");
class DatabaseService {
    async getDatabase(databaseId, authorization) {
        const response = await axiosNotionInstance_1.default.get(`${config_1.config.notionURLAPI}/databases/${databaseId}`, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
}
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map