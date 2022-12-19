const { SlashCommandBuilder } = require("discord.js");

module.exports ={
    data:new SlashCommandBuilder()
    .setName('server')
    .setDescription('Information About the server'),
 async execute(interaction) {
    await interaction.reply (`This is ${interaction.guild.name} and has ${interaction.guild.memberCount} Members.`);
},     

};
