var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "avatar",
    aliases: ['pfp'],
    description: "get user avatar",
    run: async (client, message, args) => {

var user
if (!args[0]) {
    user = client.users.cache.get(message.author.id);
} else {
    user = client.users.cache.get(args[0].replace(/[@!<>]/g, ""));
}
if (!user) return message.channel.send("please mention a username.");

var embed = new Discord.MessageEmbed()
    .setTitle(`${user.username}'s avatar`)
    .setImage(user.avatarURL({dynamic: true, size: 256, format: "png"}))
    .setColor(embledcolor)
message.channel.send(embed)
}
}
