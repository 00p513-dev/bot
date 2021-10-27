var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "rate",
    aliases: ['pro'],
    description: "rate moshi",
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


   fetch('http://45.76.172.127:6060/rate/' + player)
   .then(response => response.json())
   .then(data => {

    s = data['status']

message.channel.send(embled(`you have rated **${player}** 5 stars: **${s}**`));
});
});


function embled(description) {
  return new Discord.MessageEmbed()
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
