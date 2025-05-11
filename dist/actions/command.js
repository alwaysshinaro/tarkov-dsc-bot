"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const map_func_1 = __importDefault(require("../func/map-func"));
const boss_func_1 = __importDefault(require("../func/boss-func"));
const challenge_func_1 = __importDefault(require("../func/challenge-func"));
const item_func_1 = __importDefault(require("../func/item-func"));
const interface_1 = require("../types/interface");
const equip_func_1 = __importDefault(require("../func/equip-func"));
const role_func_1 = __importDefault(require("../func/role-func"));
const commands = (message) => {
    if (message.author.bot)
        return;
    if (message.content === "!help") {
        message.channel.send("Commands:\n!map\n!weapon\n!armor\n!helmet\n!rig\n!backpack\n!equipment\n!boss\n!challenge\n!role");
    }
    if (message.content === "!map") {
        const map = (0, map_func_1.default)();
        message.channel.send(`Random map: ${map}`);
    }
    if (message.content === "!weapon") {
        const gun = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.guns);
        message.channel.send(`Random weapon: ${gun.name}\nWIKI: ${gun.wikiLink}`);
    }
    if (message.content === "!armor") {
        const armor = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.armors);
        message.channel.send(`Random armor: ${armor.name}\nWIKI: ${armor.wikiLink}`);
    }
    if (message.content === "!helmet") {
        const helmet = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.helmets);
        message.channel.send(`Random helmet: ${helmet.name}\nWIKI: ${helmet.wikiLink}`);
    }
    if (message.content === "!rig") {
        const rig = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.rigs);
        message.channel.send(`Random rig: ${rig.name}\nWIKI: ${rig.wikiLink}`);
    }
    if (message.content === "!backpack") {
        const backpack = (0, item_func_1.default)(interface_1.ITEM_CATEGORIES.backpacks);
        message.channel.send(`Random backpack: ${backpack.name}\nWIKI: ${backpack.wikiLink}`);
    }
    if (message.content === "!equipment") {
        const equipment = (0, equip_func_1.default)();
        message.channel.send(`Random equipment:\nGun: [${equipment.gun.name}](${equipment.gun.wikiLink}),
      \nArmor: [${equipment.armor.name}](${equipment.armor.wikiLink}),
      \nHelmet: [${equipment.helmet.name}](${equipment.helmet.wikiLink}),
      \nBackpack: [${equipment.backpack.name}](${equipment.backpack.wikiLink}),
      \nRig: [${equipment.rig.name}](${equipment.rig.wikiLink})`);
    }
    if (message.content === "!boss") {
        const boss = (0, boss_func_1.default)();
        message.channel.send(`Random boss: ${boss.name}\n${boss.imagePosterLink}`);
    }
    if (message.content === "!challenge") {
        const challenge = (0, challenge_func_1.default)();
        message.channel.send(challenge);
    }
    if (message.content === "!role") {
        const role = (0, role_func_1.default)();
        message.channel.send(`Random role: ${role}`);
    }
};
exports.default = commands;
