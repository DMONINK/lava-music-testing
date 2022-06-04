const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
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
    .setLabel("Support DEMON")
    .setStyle("LINK")
    .setURL("https://discord.gg/5gamFREPRW"),
    new MessageButton()
    .setLabel("Support Gaara")
    .setStyle("LINK")
    .setURL("https://discord.gg/zvynSK7Crk")
			);

      const mainPage = new MessageEmbed()
            .setAuthor({ name: 'Quality Music', iconURL: 'https://media.discordapp.net/attachments/982363588264091668/982363769151832174/77291977607bc44476c5a8faf4253dee.png'})
            .setThumbnail('https://media.discordapp.net/attachments/982363588264091668/982363769151832174/77291977607bc44476c5a8faf4253dee.png')
            .setColor('#00FFFF')
            .addField('Creator', '<@612803327675334673> & <@730424922639302693>', true)
            .addField('Organization', '[Micky](https://github.com/MickySinghSahni) & [Arya](https://github.com/Arya0077)', true)
            .addField('Repository', '[Here](https://github.com/micky0singh/Gaara-Bot)', true)
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
