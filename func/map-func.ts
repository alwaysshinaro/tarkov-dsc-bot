import { maps } from "../data/data";

const getMaps = (): string => {
  const randomIndex = Math.floor(Math.random() * maps.length);
  const map = maps[randomIndex];
  return map;
};

export default getMaps;