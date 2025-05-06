import { armors, backpacks, guns, helmets, rigs } from "../data/data";
import { ITEM_CATEGORIES } from "../types/interface";

const getItems = (itemType: string) => {
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

export default getItems;
