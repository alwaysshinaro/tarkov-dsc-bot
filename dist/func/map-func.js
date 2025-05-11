"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const getMaps = () => {
    const randomIndex = Math.floor(Math.random() * data_1.maps.length);
    const map = data_1.maps[randomIndex];
    return map;
};
exports.default = getMaps;
