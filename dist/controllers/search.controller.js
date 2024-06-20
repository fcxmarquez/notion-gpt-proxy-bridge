"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSearch = void 0;
const search_service_1 = require("../services/search.service");
const searchService = new search_service_1.SearchService();
const postSearch = async (req, res, next) => {
    try {
        const pageData = req.body;
        const authorization = req.headers.authorization || "";
        const searchResult = await searchService.search(pageData, authorization);
        res.json(searchResult);
    }
    catch (error) {
        next(error);
    }
};
exports.postSearch = postSearch;
//# sourceMappingURL=search.controller.js.map