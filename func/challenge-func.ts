import { ITEM_CATEGORIES } from "../types/interface";
import getBosses from "./boss-func";
import getItems from "./item-func";

const getChallenge = () => {
  const gun = getItems(ITEM_CATEGORIES.guns);
  const boss = getBosses();
  const randomeIndex = Math.floor(Math.random() * 10 + 1);
  return `${boss}を${gun}で${randomeIndex}体倒す`;
};

export default getChallenge;
