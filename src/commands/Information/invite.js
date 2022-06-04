const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite LavaMusic",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("GitHub 1")
    .setStyle("LINK")
    .setURL("https://github.com/micky0singh"),
    new MessageButton()
    .setLabel("GitHub 2")
    .setStyle("LINK")
    .setURL("https://github.com/Team-Dark-Developers"),
    new MessageButton()
    .setLabel("Support Gaara")
    .setStyle("LINK")
    .setURL("https://discord.gg/zvynSK7Crk")
			);
          const mainPage = new MessageEmbed()
            .setAuthor({ name: 'Quality Music', iconURL: 'https://media.discordapp.net/attachments/982363588264091668/982363769151832174/77291977607bc44476c5a8faf4253dee.png'})
            .setThumbnail('https://media.discordapp.net/attachments/982363588264091668/982363769151832174/77291977607bc44476c5a8faf4253dee.png')
            .setColor('#00FFFF')
            .addField('Invite Quality Music', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
}
