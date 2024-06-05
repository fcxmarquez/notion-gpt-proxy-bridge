"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseController = void 0;
const database_service_1 = require("../services/database.service");
const databaseService = new database_service_1.DatabaseService();
const getDatabaseController = async (req, res, next) => {
    try {
        const databaseId = req.params.id;
        const authorization = req.headers.authorization || "";
        const response = await databaseService.getDatabase(databaseId, authorization);
        res.send(response.data);
    }
    catch (error) {
        next(error);
    }
};
exports.getDatabaseController = getDatabaseController;
//# sourceMappingURL=database.controller.js.map