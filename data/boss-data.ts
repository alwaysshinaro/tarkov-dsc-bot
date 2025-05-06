export interface Boss{
    name: string;
}

export interface BossRes{
    bosses: Boss[];
}

export const bosses: Boss[] = [];

export const getBosses = () => {
    const randomIndex = Math.floor(Math.random() * bosses.length);
    const boss = bosses[randomIndex];
    return boss.name;
};