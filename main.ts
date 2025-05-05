import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const maps = ["Customs", "Factory", "Interchange", "Labs", "Reserve", "Shoreline", "Streets", "The Lab", "Woods"];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if(message.content === "!map"){
    const randomIndex = Math.floor(Math.random() * maps.length);
    await message.channel.send("Random map: " + maps[randomIndex]);
  }
});

client.login(process.env.DISCORD_TOKEN);
