import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent 
    ]
});

client.once('ready', () => {
    console.log("Bot is ready!");
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "!NeNi") {
        await message.reply("https://youtu.be/NjD0H4eBfng?si=CL4D3eDRDhFRIlWu");
    }
    if(message.content === "!boyy"){
        await message.reply("https://youtu.be/F08vLi0dI24?si=qB6G5H_EGOwR1zpu");
    }
});

client.login(process.env.DISCORD_TOKEN);