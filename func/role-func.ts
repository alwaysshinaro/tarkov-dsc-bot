import {roles} from "../data/data";

const getRoles = () => {
    const randomIndex = Math.floor(Math.random() * roles.length);
    const role = roles[randomIndex];
    return role;
};

export default getRoles;