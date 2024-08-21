"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const friends_1 = require("../modules/friends");
const address_1 = require("../modules/address");
exports.router = (0, express_1.Router)();
exports.router.use('/friends', friends_1.friendsRouter);
exports.router.use('/address', address_1.addressRouter);
//# sourceMappingURL=index.js.map