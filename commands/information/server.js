var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "server",
    aliases: ["guild"],
    description: "returns server information",
    run: (client, message, args) => {
    var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = '0';
    } else {
        emojis = message.guild.emojis.cache.size;
    }

message.channel.send(reply(`**${message.guild.name}**\n\nUser Count: **${message.guild.memberCount}**\nCreated: **${message.guild.createdAt.toString().substr(0, 15)}**\nRoles: **${message.guild.roles.cache.size}**\nChannels: **${message.guild.channels.cache.size}**\nEmojis: **${emojis}/100**\nVerification Level: **${message.guild.verificationLevel}**`))
 

function reply(description) {
    return new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setColor(embledcolor)
        .setDescription(description)
  }
}
}
