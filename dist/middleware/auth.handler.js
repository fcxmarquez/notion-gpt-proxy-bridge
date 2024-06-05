"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRequest = void 0;
const authenticateRequest = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send("Authorization header is required");
    }
    return next();
};
exports.authenticateRequest = authenticateRequest;
//# sourceMappingURL=auth.handler.js.map