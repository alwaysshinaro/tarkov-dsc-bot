export const ITEM_CATEGORIES = {
  armors: "armors",
  backpacks: "backpacks",
  guns: "guns",
  helmets: "helmets",
  rigs: "rigs",
};

export interface Item {
  name: string;
  types: string[];
}

export interface ItemsRes {
  items: Item[];
}

export interface equipment{
  gun: string;
  armor: string;
  helmet: string;
  backpack: string;
  rig: string;
}

export const Items: Item[] = [];

export const guns: Item[] = [];
export const armors: Item[] = [];
export const helmets: Item[] = [];
export const backpacks: Item[] = [];
export const rigs: Item[] = [];

export const getItems = (itemType: string) => {
  switch (itemType) {
    case ITEM_CATEGORIES.armors:
      const randomIndex = Math.floor(Math.random() * armors.length);
      const armor = armors[randomIndex];
      return armor.name;
    case ITEM_CATEGORIES.backpacks:
      const randomBackpackIndex = Math.floor(Math.random() * backpacks.length);
      const backpack = backpacks[randomBackpackIndex];
      return backpack.name;
    case ITEM_CATEGORIES.guns:
      const randomGunIndex = Math.floor(Math.random() * guns.length);
      const gun = guns[randomGunIndex];
      return gun.name;
    case ITEM_CATEGORIES.helmets:
      const randomHelmetIndex = Math.floor(Math.random() * helmets.length);
      const helmet = helmets[randomHelmetIndex];
      return helmet.name;
    case ITEM_CATEGORIES.rigs:
      const randomRigIndex = Math.floor(Math.random() * rigs.length);
      const rig = rigs[randomRigIndex];
      return rig.name;
    default:
      return "Item data not found.";
  }
};

export const returnEquipment = () => {
  const gun = getItems(ITEM_CATEGORIES.guns);
  const armor = getItems(ITEM_CATEGORIES.armors);
  const helmet = getItems(ITEM_CATEGORIES.helmets);
  const backpack = getItems(ITEM_CATEGORIES.backpacks);
  const rig = getItems(ITEM_CATEGORIES.rigs);
  const equipment: equipment = {
    gun: gun,
    armor: armor,
    helmet: helmet,
    backpack: backpack,
    rig: rig,
  }
  return equipment;
}
