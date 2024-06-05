"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlockController = exports.getBlockController = void 0;
const block_service_1 = require("../services/block.service");
const blockService = new block_service_1.BlockService();
const getBlockController = async (req, res, next) => {
  try {
    const pageId = req.params.id;
    const authorization = req.headers.authorization || "";
    const data = await blockService.getBlockChildren(pageId, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
exports.getBlockController = getBlockController;
const updateBlockController = async (req, res, next) => {
  try {
    const pageId = req.params.id;
    const updates = req.body;
    const authorization = req.headers.authorization || "";
    const data = await blockService.updateBlock(pageId, updates, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
exports.updateBlockController = updateBlockController;
//# sourceMappingURL=block.controller.js.map
