import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { initData, getItems, RETURN_ITEMS, returnEquipment } from "./data";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  initData();
  console.log("Bot is ready!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "!map") {
    const map = getItems(RETURN_ITEMS.maps);
    await message.channel.send("Random map: " + map);
  }
  if (message.content === "!weapon") {
    const weapon = getItems(RETURN_ITEMS.guns);
    await message.channel.send("Random weapon: " + weapon);
  }
  if (message.content === "!armor") {
    const armor = getItems(RETURN_ITEMS.armors);
    await message.channel.send("Random armor: " + armor);
  }
  if (message.content === "!helmet") {
    const helmet = getItems(RETURN_ITEMS.helmets);
    await message.channel.send("Random helmet: " + helmet);
  }
  if (message.content === "!rig") {
    const rig = getItems(RETURN_ITEMS.rigs);
    await message.channel.send("Random rig: " + rig);
  }
  if (message.content === "!backpack") {
    const backpack = getItems(RETURN_ITEMS.backpacks);
    await message.channel.send("Random backpack: " + backpack);
  }
  if (message.content === "!equipment") {
    const equipment = returnEquipment();
    const gun = equipment.gun;
    await message.channel.send(
      `Random equipment:\n Gun: ${equipment.gun},\n Armor: ${equipment.armor},\n Helmet: ${equipment.helmet},\n Backpack: ${equipment.backpack},\n Rig: ${equipment.rig}`
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
