"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("../types/interface");
const item_func_1 = __importDefault(require("./item-func"));
const getEquipment = () => {
    const gun = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.guns);
    const armor = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.armors);
    const helmet = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.helmets);
    const backpack = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.backpacks);
    const rig = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.rigs);
    const equipment = {
        gun: gun,
        armor: armor,
        helmet: helmet,
        backpack: backpack,
        rig: rig
    };
    return equipment;
};
exports.default = getEquipment;
