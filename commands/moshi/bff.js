var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
let table = require("table");
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");

module.exports = {
    name: "bff",
    aliases: ['b'],
    description: "get moshi player bffs",
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
}

   fetch(urls[7] + player)
   .then(response => response.json())
   .then(data => {

let bff = ''
try {
for(let a of data['friends']) {
    if(a['bestfriends'] == 'true')
        bff += a['friend'] + "\n"
}
}
catch(error) {
    return message.channel.send("user has no bffs :(")
};

data = [
    ['bff'],
    [bff]
  ]
    
  let x = table.table(data);
  message.channel.send(embled(`**${player}'s BFFs**\n\`\`\`${x}\`\`\``));
});
});

function embled(description) {
  return new Discord.MessageEmbed()
      .setDescription(description)
      .setColor(embledcolor)
}
}
}