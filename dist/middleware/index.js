"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRequest = exports.handleError = void 0;
var error_handler_1 = require("./error.handler");
Object.defineProperty(exports, "handleError", {
  enumerable: true,
  get: function () {
    return error_handler_1.handleError;
  },
});
var auth_handler_1 = require("./auth.handler");
Object.defineProperty(exports, "authenticateRequest", {
  enumerable: true,
  get: function () {
    return auth_handler_1.authenticateRequest;
  },
});
//# sourceMappingURL=index.js.map
