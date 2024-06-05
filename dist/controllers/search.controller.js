"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearch = void 0;
const search_service_1 = require("../services/search.service");
const searchService = new search_service_1.SearchService();
const getSearch = async (req, res, next) => {
    try {
        const query = req.query.q;
        const authorization = req.headers.authorization || "";
        const searchResult = await searchService.search(query, authorization);
        res.json(searchResult);
    }
    catch (error) {
        next(error);
    }
};
exports.getSearch = getSearch;
//# sourceMappingURL=search.controller.js.map