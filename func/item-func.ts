import { armors, backpacks, guns, helmets, Items, rigs } from "../data/data";
import { ITEM_CATEGORIES } from "../types/interface";

const getItems = (itemType: string) => {
  switch (itemType) {
    case ITEM_CATEGORIES.armors:
      const randomIndex = Math.floor(Math.random() * armors.length);
      const armor = armors[randomIndex];
      return armor;
    case ITEM_CATEGORIES.backpacks:
      const randomBackpackIndex = Math.floor(Math.random() * backpacks.length);
      const backpack = backpacks[randomBackpackIndex];
      return backpack;
    case ITEM_CATEGORIES.guns:
      const randomGunIndex = Math.floor(Math.random() * guns.length);
      const gun = guns[randomGunIndex];
      return gun;
    case ITEM_CATEGORIES.helmets:
      const randomHelmetIndex = Math.floor(Math.random() * helmets.length);
      const helmet = helmets[randomHelmetIndex];
      return  helmet;
    case ITEM_CATEGORIES.rigs:
      const randomRigIndex = Math.floor(Math.random() * rigs.length);
      const rig = rigs[randomRigIndex];
      return rig;
    default:
      return {name: "Item data not found.", image512pxLink: "", wikiLink: ""};
  }
};

export default getItems;
