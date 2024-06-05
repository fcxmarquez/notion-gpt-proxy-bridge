"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePageController = exports.getPageController = void 0;
const page_service_1 = require("../services/page.service");
const pageService = new page_service_1.PageService();
const getPageController = async (req, res, next) => {
    try {
        const pageId = req.params.id;
        const authorization = req.headers.authorization || "";
        const data = await pageService.getPageChildrens(pageId, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.getPageController = getPageController;
const updatePageController = async (req, res, next) => {
    try {
        const pageId = req.params.id;
        const updates = req.body;
        const authorization = req.headers.authorization || "";
        const data = await pageService.updatePage(pageId, updates, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.updatePageController = updatePageController;
//# sourceMappingURL=page.controller.js.map