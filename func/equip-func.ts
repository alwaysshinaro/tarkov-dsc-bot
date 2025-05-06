import { equipment, Item, ITEM_CATEGORIES } from "../types/interface";
import getItems from "./item-func";

const getEquipment = () => {
  const gun = getItems(ITEM_CATEGORIES.guns)as Item;
  const armor = getItems(ITEM_CATEGORIES.armors) as Item;
  const helmet = getItems(ITEM_CATEGORIES.helmets) as Item;
  const backpack = getItems(ITEM_CATEGORIES.backpacks) as Item;
  const rig = getItems(ITEM_CATEGORIES.rigs) as Item;
  const equipment: equipment = {
    gun: gun,
    armor: armor,
    helmet: helmet,
    backpack: backpack,
    rig: rig
  };
  return equipment;
};

export default getEquipment;
