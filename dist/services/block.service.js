"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockService = void 0;
const axiosNotionInstance_1 = __importDefault(require("../utils/axiosNotionInstance"));
const config_1 = require("../config/config");
class BlockService {
    async getBlock(blockId, authorization) {
        const response = await axiosNotionInstance_1.default.get(`${config_1.config.notionURLAPI}/blocks/${blockId}`, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
    async getBlockChildren(pageId, authorization) {
        const response = await axiosNotionInstance_1.default.get(`${config_1.config.notionURLAPI}/blocks/${pageId}/children`, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
    async updateBlock(blockId, updates, authorization) {
        const response = await axiosNotionInstance_1.default.patch(`${config_1.config.notionURLAPI}/blocks/${blockId}`, updates, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
    async appendBlockChildren(blockId, children, authorization) {
        const response = await axiosNotionInstance_1.default.patch(`${config_1.config.notionURLAPI}/blocks/${blockId}/children`, children, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
    async deleteBlock(blockId, authorization) {
        const response = await axiosNotionInstance_1.default.delete(`${config_1.config.notionURLAPI}/blocks/${blockId}`, {
            headers: {
                Authorization: authorization,
            },
        });
        return response.data;
    }
}
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map