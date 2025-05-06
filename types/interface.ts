interface Item {
  name: string;
  types: string[];
}

interface ItemsRes {
  items: Item[];
}

interface equipment {
  gun: string;
  armor: string;
  helmet: string;
  backpack: string;
  rig: string;
}

interface Boss{
    name: string;
}

interface BossRes{
    bosses: Boss[];
}

const ITEM_CATEGORIES = {
  armors: "armors",
  backpacks: "backpacks",
  guns: "guns",
  helmets: "helmets",
  rigs: "rigs",
};

export type { Item, ItemsRes, equipment, Boss, BossRes};
export { ITEM_CATEGORIES };