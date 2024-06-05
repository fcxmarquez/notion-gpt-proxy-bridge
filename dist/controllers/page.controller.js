"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPageController = exports.getPageController = void 0;
const page_service_1 = require("../services/page.service");
const pageService = new page_service_1.PageService();
const getPageController = async (req, res, next) => {
    try {
        const pageId = req.params.id;
        const authorization = req.headers.authorization || "";
        const data = await pageService.getPage(pageId, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.getPageController = getPageController;
const createPageController = async (req, res, next) => {
    try {
        const pageData = req.body;
        const authorization = req.headers.authorization || "";
        const data = await pageService.createPage(pageData, authorization);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.createPageController = createPageController;
//# sourceMappingURL=page.controller.js.map