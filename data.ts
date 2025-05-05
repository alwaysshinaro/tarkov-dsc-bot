import axios from "axios";

export const RETURN_ITEMS = {
  armors: "armors",
  backpacks: "backpacks",
  guns: "guns",
  helmets: "helmets",
  maps: "maps",
  rigs: "rigs",
};

interface Item {
  name: string;
  types: string[];
}

interface ItemsRes {
  items: Item[];
}

interface equipment{
  gun: string;
  armor: string;
  helmet: string;
  backpack: string;
  rig: string;
}

const Items: Item[] = [];

const guns: Item[] = [];
const armors: Item[] = [];
const helmets: Item[] = [];
const backpacks: Item[] = [];
const rigs: Item[] = [];

const maps = [
  "Customs",
  "Factory",
  "Interchange",
  "Labs",
  "Reserve",
  "Shoreline",
  "Streets",
  "The Lab",
  "Woods",
];

export const getItems = (itemType: string) => {
  switch (itemType) {
    case RETURN_ITEMS.armors:
      const randomIndex = Math.floor(Math.random() * armors.length);
      const armor = armors[randomIndex];
      return armor.name;
    case RETURN_ITEMS.maps:
      const randomMapIndex = Math.floor(Math.random() * maps.length);
      const map = maps[randomMapIndex];
      return map;
    case RETURN_ITEMS.backpacks:
      const randomBackpackIndex = Math.floor(Math.random() * backpacks.length);
      const backpack = backpacks[randomBackpackIndex];
      return backpack.name;
    case RETURN_ITEMS.guns:
      const randomGunIndex = Math.floor(Math.random() * guns.length);
      const gun = guns[randomGunIndex];
      return gun.name;
    case RETURN_ITEMS.helmets:
      const randomHelmetIndex = Math.floor(Math.random() * helmets.length);
      const helmet = helmets[randomHelmetIndex];
      return helmet.name;
    case RETURN_ITEMS.rigs:
      const randomRigIndex = Math.floor(Math.random() * rigs.length);
      const rig = rigs[randomRigIndex];
      return rig.name;
    default:
      return "Item data not found.";
  }
};

export const returnEquipment = () => {
  const gun = getItems(RETURN_ITEMS.guns);
  const armor = getItems(RETURN_ITEMS.armors);
  const helmet = getItems(RETURN_ITEMS.helmets);
  const backpack = getItems(RETURN_ITEMS.backpacks);
  const rig = getItems(RETURN_ITEMS.rigs);
  const equipment: equipment = {
    gun: gun,
    armor: armor,
    helmet: helmet,
    backpack: backpack,
    rig: rig,
  }
  return equipment;
}

// 初回データ取得
export const initData = async () => {
  const BASE_URL = "https://api.tarkov.dev/graphql";

  // query Body
  const query = `
    {
      items {
        name
        types
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
