var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");


module.exports = {
    name: "kms",
    description: "bot help",
    run: async (client, message, args) => {
	message.channel.send(embled(`**Why don't you do 'this' so people read FAQ?** Because I legit tried everything POSSIBLE, this is a never ending battle. First. I made a Discord bot which flagged people's messages down for being Frequently Asked Questions, but the problem with this is, on the Moshi Pinboards if you try to say *glasses* you'll get flagged because gl*ass*es. So, naturally this came with a lot of false flags and I had to make a special role that if folks were here for a certain amount of time, they were given it. Later, I'd just make this a command via *>verify* but people started talking over the bot and ignoring it. So, I just disabled it but because of the false flags, this is why a mute or kick system couldn't work for people that didn't read it.\n\n**Why don't you put something on the questions channels etc?** Well because Discord is sadly limited and I can not do this but I did however delete the channels before for a month but this actually KILLED the Discord so badly that it'd go 12 hours without a single message. This is why this isn't an healthy option.\n\n**Why don't you guys chill out?** Because when you hear the same thing over and over again it starts to become triggering. Try dealing with this bullshit for about a year now over and over nonstop. You'd snap too so don't give me that shit.\n\n**lol** When you join, Gogo made this nice banner, that LEGIT TELLS THEM ON joining to read <#852007674295222302> BEFORE asking a question.`))
    }
}


function embled(description) {
	    return new Discord.MessageEmbed()
	        .setColor(embledcolor)
		.setFooter(`we can always jump off a bridge -ana`)
		.setImage('https://cdn.discordapp.com/attachments/870952719161114624/883702450727579698/Screenshot_20210904-141746_Discord.jpg')
	        .setDescription(description)
}
