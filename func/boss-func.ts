import { bosses } from "../data/data";

export const getBosses = () => {
    const randomIndex = Math.floor(Math.random() * bosses.length);
    const boss = bosses[randomIndex];
    return boss.name;
};