"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const interface_1 = require("../types/interface");
const getItems = (itemType) => {
    switch (itemType) {
        case interface_1.ITEM_CATEGORIES.armors:
            const randomIndex = Math.floor(Math.random() * data_1.armors.length);
            const armor = data_1.armors[randomIndex];
            return armor;
        case interface_1.ITEM_CATEGORIES.backpacks:
            const randomBackpackIndex = Math.floor(Math.random() * data_1.backpacks.length);
            const backpack = data_1.backpacks[randomBackpackIndex];
            return backpack;
        case interface_1.ITEM_CATEGORIES.guns:
            const randomGunIndex = Math.floor(Math.random() * data_1.guns.length);
            const gun = data_1.guns[randomGunIndex];
            return gun;
        case interface_1.ITEM_CATEGORIES.helmets:
            const randomHelmetIndex = Math.floor(Math.random() * data_1.helmets.length);
            const helmet = data_1.helmets[randomHelmetIndex];
            return helmet;
        case interface_1.ITEM_CATEGORIES.rigs:
            const randomRigIndex = Math.floor(Math.random() * data_1.rigs.length);
            const rig = data_1.rigs[randomRigIndex];
            return rig;
        default:
            return { name: "Item data not found.", image512pxLink: "", wikiLink: "" };
    }
};
exports.default = getItems;
