var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");


module.exports = {
    name: "bexy",
    description: "bot help",
    run: async (client, message, args) => {
	message.channel.send(embled(`OCT 26, 2016  |  11:09AM BST 
		Bexy replied:
		Hello Joe,

		I am going to give you the best customer service that I just KNOW you love :wink:

		I need to be vague with these answers because we do want the books to be extra special to the people that are buying them. If I give you the answers you're seeking then it may ruin the surprise for others.

		I am sure once people start buying them, you'll find out the answers you're seeking, but at present the book is so early on we don't want to give too much away.

		If you've purchased a book you'll see just how fab they are!

		Thank you for all of your hard work on the Moshi Wiki, it's always a pleasure to see your updates.

		All the best,
		Bexy`))
    }
}


function embled(description) {
	    return new Discord.MessageEmbed()
	        .setColor(embledcolor)
	        .setDescription(description)
}
