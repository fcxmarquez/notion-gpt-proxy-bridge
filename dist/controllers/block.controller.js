"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlockController = exports.appendBlockChildrenController = exports.updateBlockController = exports.getBlockChildrenController = exports.getBlockController = void 0;
const block_service_1 = require("../services/block.service");
const blockService = new block_service_1.BlockService();
const getBlockController = async (req, res, next) => {
    try {
        const blockId = req.params.id;
        const authorization = req.headers.authorization || "";
        const data = await blockService.getBlock(blockId, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.getBlockController = getBlockController;
const getBlockChildrenController = async (req, res, next) => {
    try {
        const pageId = req.params.id;
        const authorization = req.headers.authorization || "";
        const data = await blockService.getBlockChildren(pageId, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.getBlockChildrenController = getBlockChildrenController;
const updateBlockController = async (req, res, next) => {
    try {
        const pageId = req.params.id;
        const updates = req.body;
        const authorization = req.headers.authorization || "";
        const data = await blockService.updateBlock(pageId, updates, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.updateBlockController = updateBlockController;
const appendBlockChildrenController = async (req, res, next) => {
    try {
        const blockId = req.params.id;
        const children = req.body;
        const authorization = req.headers.authorization || "";
        const data = await blockService.appendBlockChildren(blockId, children, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.appendBlockChildrenController = appendBlockChildrenController;
const deleteBlockController = async (req, res, next) => {
    try {
        const blockId = req.params.id;
        const authorization = req.headers.authorization || "";
        const data = await blockService.deleteBlock(blockId, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteBlockController = deleteBlockController;
//# sourceMappingURL=block.controller.js.map