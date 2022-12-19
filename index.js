//Requires Necessary discordjs classes
const { Client, Events, GatewayIntentBits, } = require('discord.js')
const { token } = require('./config.json');
//create a client instance
const client = new Client ({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages]})
//when client is ready run this once
client.once(Events.ClientReady, c => {
    console.log(`Ready,Logged in as ${c.user.tag}`);
});
//login to discord with the token 
client.login(token);