import { bosses } from "../data/data";

const getBosses = () => {
    const randomIndex = Math.floor(Math.random() * bosses.length);
    const boss = bosses[randomIndex];
    return boss.name;
};

export default getBosses;