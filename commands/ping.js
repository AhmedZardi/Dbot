const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Testing Latency'),
    async execute(interaction) {
        await interaction.reply('Pong !')
    },
};

