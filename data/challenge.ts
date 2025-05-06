import { getBosses } from "./boss-data";
import { getItems, ITEM_CATEGORIES } from "./item-data";

export const getChallenge = () => {
  const gun = getItems(ITEM_CATEGORIES.guns);
  const boss = getBosses();
  const randomeIndex = Math.floor(Math.random() * 10 + 1);
  return `${boss}を${gun}で${randomeIndex}体倒す`;
};
