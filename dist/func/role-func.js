"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const getRoles = () => {
    const randomIndex = Math.floor(Math.random() * data_1.roles.length);
    const role = data_1.roles[randomIndex];
    return role;
};
exports.default = getRoles;
