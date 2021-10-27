var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "profile",
    aliases: ['pro'],
    description: "get moshi profile stats",
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


   fetch('http://45.76.172.127:6060/profile/' + player)
   .then(response => response.json())
   .then(data => {

    fav_color = data['fav_color']
    fav_food = data['fav_food']
    fav_music = data['fav_music']
    fav_moshling = data['fav_moshling']
    mood = data['mood']


message.channel.send(embled(`**${player}'s Profile**\n\nFavorite Food: **${fav_food}**\nFavorite Moshling: **${fav_moshling}**\nFavorite Color: **${fav_color}**\nFavorite Music: **${fav_music}**`));
});
});


function embled(description) {
  return new Discord.MessageEmbed()
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
