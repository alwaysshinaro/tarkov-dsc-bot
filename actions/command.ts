import { Message, OmitPartialGroupDMChannel } from "discord.js";
import getMaps from "../func/map-func";
import getBosses from "../func/boss-func";
import getChallenge from "../func/challenge-func";
import getItems from "../func/item-func";
import { ITEM_CATEGORIES } from "../types/interface";
import getEquipment from "../func/equip-func";
import getRoles from "../func/role-func";

const commands = (message: OmitPartialGroupDMChannel<Message<boolean>>) => {
  if (message.author.bot) return;
  if (message.content === "!help") {
    message.channel.send(
      "Commands:\n!map\n!weapon\n!armor\n!helmet\n!rig\n!backpack\n!equipment\n!boss\n!challenge\n!role"
    );
  }
  if (message.content === "!map") {
    const map = getMaps();
    message.channel.send(`Random map: ${map}`);
  }
  if (message.content === "!weapon") {
    const gun = getItems(ITEM_CATEGORIES.guns);
    message.channel.send(`Random weapon: ${gun.name}\nWIKI: ${gun.wikiLink}`);
  }
  if (message.content === "!armor") {
    const armor = getItems(ITEM_CATEGORIES.armors);
    message.channel.send(
      `Random armor: ${armor.name}\nWIKI: ${armor.wikiLink}`
    );
  }
  if (message.content === "!helmet") {
    const helmet = getItems(ITEM_CATEGORIES.helmets);
    message.channel.send(
      `Random helmet: ${helmet.name}\nWIKI: ${helmet.wikiLink}`
    );
  }
  if (message.content === "!rig") {
    const rig = getItems(ITEM_CATEGORIES.rigs);
    message.channel.send(`Random rig: ${rig.name}\nWIKI: ${rig.wikiLink}`);
  }
  if (message.content === "!backpack") {
    const backpack = getItems(ITEM_CATEGORIES.backpacks);
    message.channel.send(
      `Random backpack: ${backpack.name}\nWIKI: ${backpack.wikiLink}`
    );
  }
  if (message.content === "!equipment") {
    const equipment = getEquipment();
    message.channel.send(
      `Random equipment:\nGun: [${equipment.gun.name}](${equipment.gun.wikiLink}),
      \nArmor: [${equipment.armor.name}](${equipment.armor.wikiLink}),
      \nHelmet: [${equipment.helmet.name}](${equipment.helmet.wikiLink}),
      \nBackpack: [${equipment.backpack.name}](${equipment.backpack.wikiLink}),
      \nRig: [${equipment.rig.name}](${equipment.rig.wikiLink})`
    );
  }
  if (message.content === "!boss") {
    const boss = getBosses();
    message.channel.send(`Random boss: ${boss.name}\n${boss.imagePosterLink}`);
  }
  if (message.content === "!challenge") {
    const challenge = getChallenge();
    message.channel.send(challenge);
  }
  if(message.content === "!role"){
    const role = getRoles();
    message.channel.send(`Random role: ${role}`);
  }
};

export default commands;
