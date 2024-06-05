"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (error, req, res, next) => {
    if (error instanceof Error) {
        res.status(500).send(error.message);
    }
    if (typeof error === "object" && error !== null && "response" in error) {
        // Axios error
        const err = error;
        res.status(500).send(err.response.data);
    }
    res.status(500).send("Unknown error");
    next(error);
};
exports.handleError = handleError;
//# sourceMappingURL=error.handler.js.map