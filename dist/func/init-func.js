"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://api.tarkov.dev/graphql";
// 初回データ取得
const initData = () => __awaiter(void 0, void 0, void 0, function* () {
    fetchItems();
    fetchBosses();
});
const fetchItems = () => __awaiter(void 0, void 0, void 0, function* () {
    // query Body
    const query = `
      {
        items {
          name
          types
          image512pxLink
          wikiLink
        }
      }
    `;
    try {
        const response = yield axios_1.default.post(BASE_URL, {
            query: query,
        });
        const res = response.data.data;
        if (res && res.items) {
            data_1.Items.push(...res.items);
            sortingItems(res.items);
        }
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
});
// アイテムをタイプ別に振り分け
const sortingItems = (items) => {
    console.time("sortingItems");
    items.forEach((item) => {
        if (item.types.includes("gun")) {
            data_1.guns.push(item);
        }
        else if (item.types.includes("armor")) {
            data_1.armors.push(item);
        }
        else if (item.types.includes("helmet")) {
            data_1.helmets.push(item);
        }
        else if (item.types.includes("backpack")) {
            data_1.backpacks.push(item);
        }
        else if (item.types.includes("rig")) {
            data_1.rigs.push(item);
        }
    });
    console.timeEnd("sortingItems");
};
// ボスデータを取得
const fetchBosses = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
      {
      bosses{
        name
        imagePosterLink
      }
  }`;
    try {
        const response = yield axios_1.default.post(BASE_URL, {
            query: query,
        });
        const res = response.data.data;
        if (res && res.bosses) {
            data_1.bosses.push(...res.bosses);
        }
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
});
exports.default = initData;
