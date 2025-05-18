import {
  Items,
  guns,
  armors,
  helmets,
  backpacks,
  rigs,
  bosses,
} from "../data/data";
import { BossRes, Item, ItemsRes } from "../types/interface";
import axios from "axios";

const BASE_URL = "https://api.tarkov.dev/graphql";

// 初回データ取得
const initData = async () => {
  fetchItems();
  fetchBosses();
};

const fetchItems = async () => {
  // query Body
  const query = `
      {
        items {
          name
          types
          wikiLink
        }
      }
    `;
  try {
    const response = await axios.post(BASE_URL, {
      query: query,
    });
    const res: ItemsRes = response.data.data;
    if (res && res.items) {
      Items.push(...res.items);
      sortingItems(res.items);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// アイテムをタイプ別に振り分け
const sortingItems = (items: Item[]) => {
  console.time("sortingItems");
  items.forEach((item) => {
    if (item.types.includes("gun")) {
      guns.push(item);
    } else if (item.types.includes("armor")) {
      armors.push(item);
    } else if (item.types.includes("helmet")) {
      helmets.push(item);
    } else if (item.types.includes("backpack")) {
      backpacks.push(item);
    } else if (item.types.includes("rig")) {
      rigs.push(item);
    }
  });
  console.timeEnd("sortingItems");
};

// ボスデータを取得
const fetchBosses = async () => {
  const query = `
      {
      bosses{
        name
        imagePosterLink
      }
  }`;

  try {
    const response = await axios.post(BASE_URL, {
      query: query,
    });
    const res: BossRes = response.data.data;
    if (res && res.bosses) {
      bosses.push(...res.bosses);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default initData;
