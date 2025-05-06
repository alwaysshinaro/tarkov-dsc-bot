import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { initData } from "./data/init-data";
import { commands } from "./command";

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
});

client.on("messageCreate", async (message) => {
    commands(message);
});

client.login(process.env.DISCORD_TOKEN);
