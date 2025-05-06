import { equipment, ITEM_CATEGORIES } from "../types/interface";
import getItems from "./item-func";

const getEquipment = () => {
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
  };
  return equipment;
};

export default getEquipment;
