var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");
let table = require("table");

module.exports = {
    name: "gift",
    aliases: ['gifts'],
    description: "gifts moshi",
    run: async (client, message, args) => {
   let player = args.join(" ");
   if (!player)
   return (message.channel.send("please enter a username."))

   fetch(urls[2] + player)
.then(response => response.json())
.then(data => {
if (data['rank'] == 'Banned') {
	return message.channel.send("this user is banned");
}
if (error = data['error']) {
return message.channel.send("please enter a valid username.")
}; 


   fetch('http://45.76.172.127:6060/gifts/' + player)
   .then(response => response.json())
   .then(data => {

    sender = ''
    gift = ''
    opened = ''
    a = 0

    for(let x in data) {
        a += 1
        sender += data[x]['sender'] + '\n'
        gift += data[x]['gift'] + '\n'
    }

    data = [
        ['sender', 'gift'],
        [sender,gift]
      ]

      if(a == 0) {
        data = [
            ['this user has no gifts.']
        ]
    }
    
        let x = table.table(data);

message.channel.send(embled(`**${player}**'s gifts (**${a}**):\n\n\`\`\`${x}\`\`\``));
});
});


function embled(description) {
  return new Discord.MessageEmbed()
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
