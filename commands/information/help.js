var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");


module.exports = {
    name: "help",
    description: "bot help",
    run: async (client, message, args) => {
	message.channel.send(embled(`users: \`help\`, \`uptime\`, \`avatar\`, \`server\`\nmoshi: \`player\`, \`room\`, \`zoo\`, \`gifts\`, \`codes\`, \`highscore\`, \`top\`, \`bff\`, \`moshling\`, \`seed\`\n\ndeveloper: <@794467558057181224>`))
    }
}


function embled(description) {
	    return new Discord.MessageEmbed()
	        .setColor(embledcolor)
	        .setDescription(description)
}
