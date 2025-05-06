interface Item {
  name: string;
  types: string[];
  image512pxLink: string;
  wikiLink: string;
}

interface ItemsRes {
  items: Item[];
}

interface equipment {
  gun: Item;
  armor: Item;
  helmet: Item;
  backpack: Item;
  rig: Item;
}

interface Boss{
    name: string;
    imagePosterLink: string;
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