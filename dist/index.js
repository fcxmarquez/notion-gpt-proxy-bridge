"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = config_1.config.port || 3000;
app.use(express_1.default.json());
app.use(middleware_1.authenticateRequest);
(0, routes_1.routerApi)(app);
const notionProxy = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization || "";
        const response = await (0, axios_1.default)({
            method: req.method,
            url: `https://api.notion.com/v1${req.path}`,
            headers: {
                Authorization: authorization,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
            data: req.body,
        });
        res.status(response.status).json(response.data);
    }
    catch (error) {
        next(error);
    }
};
app.use("/notion", notionProxy);
app.use(middleware_1.handleError);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map