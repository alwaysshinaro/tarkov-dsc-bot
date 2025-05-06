import { Message, OmitPartialGroupDMChannel } from "discord.js";
import { getMaps } from "./data/map-data";
import { getItems, ITEM_CATEGORIES, returnEquipment } from "./data/item-data";
import { getBosses } from "./data/boss-data";
import { getChallenge } from "./data/challenge";

export const commands = (
  message: OmitPartialGroupDMChannel<Message<boolean>>
) => {
  if (message.author.bot) return;
  if (message.content === "!map") {
    message.channel.send("Random map: " + getMaps());
  }
  if (message.content === "!weapon") {
    message.channel.send("Random weapon: " + getItems(ITEM_CATEGORIES.guns));
  }
  if (message.content === "!armor") {
    message.channel.send("Random armor: " + getItems(ITEM_CATEGORIES.armors));
  }
  if (message.content === "!helmet") {
    message.channel.send("Random helmet: " + getItems(ITEM_CATEGORIES.helmets));
  }
  if (message.content === "!rig") {
    message.channel.send("Random rig: " + getItems(ITEM_CATEGORIES.rigs));
  }
  if (message.content === "!backpack") {
    message.channel.send(
      "Random backpack: " + getItems(ITEM_CATEGORIES.backpacks)
    );
  }
  if (message.content === "!equipment") {
    const equipment = returnEquipment();
    message.channel.send(
      `Random equipment:\n Gun: ${equipment.gun},\n Armor: ${equipment.armor},\n Helmet: ${equipment.helmet},\n Backpack: ${equipment.backpack},\n Rig: ${equipment.rig}`
    );
  }
  if (message.content === "!boss") {
    const boss = getBosses();
    message.channel.send("Random boss: " + boss);
  }
  if (message.content === "!challenge") {
    const challenge = getChallenge();
    message.channel.send(challenge);
  }
};
