"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("../types/interface");
const boss_func_1 = __importDefault(require("./boss-func"));
const item_func_1 = __importDefault(require("./item-func"));
const getChallenge = () => {
    const gun = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.guns);
    const boss = (0, boss_func_1.default)();
    const randomeIndex = Math.floor(Math.random() * 10 + 1);
    return `${boss.name}を${gun.name}で${randomeIndex}体倒す`;
};
exports.default = getChallenge;
