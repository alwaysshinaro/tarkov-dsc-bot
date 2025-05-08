import { Boss, Item } from "../types/interface";

const Items: Item[] = [];

const guns: Item[] = [];
const armors: Item[] = [];
const helmets: Item[] = [];
const backpacks: Item[] = [];
const rigs: Item[] = [];

const bosses: Boss[] = [];

const maps = [
  "Customs",
  "Factory",
  "Interchange",
  "LightHouse",
  "Labs",
  "Reserve",
  "Shoreline",
  "Streets",
  "The Lab",
  "Woods",
];

const roles = ["Scav", "PMCs"];

export { Items, guns, armors, helmets, backpacks, rigs, bosses, maps, roles };
