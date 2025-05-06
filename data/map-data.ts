export const maps = [
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

export const getMaps = () => {
  const randomIndex = Math.floor(Math.random() * maps.length);
  const map = maps[randomIndex];
  return map;
};
