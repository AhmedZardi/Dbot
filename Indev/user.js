const { SlashCommandsBuilder } =require("discord.js");

module.exports={
    data: new SlashCommandsBuilder()
    .setname('user')
    .setdescription('get information about a user'),
 async execute(interaction) {
    await interaction.reply (`This Command was run by ${interaction.user.username} !, His ID is ${interaction.user.id} who joined this server on ${interaction.member.joinedAt}.`);
},
};