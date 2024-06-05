"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageController = void 0;
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
//# sourceMappingURL=page.controller.js.map