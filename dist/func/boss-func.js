"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const getBosses = () => {
    const randomIndex = Math.floor(Math.random() * data_1.bosses.length);
    const boss = data_1.bosses[randomIndex];
    return boss;
};
exports.default = getBosses;
