var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "dailygrowl",
    aliases: ['dg'],
    description: "get moshi dailygrowl",
    run: async (client, message, args) => {

   fetch('http://45.76.172.127:6060/dailygrowl/')
   .then(response => response.json())
   .then(data => {
    
    des = data['1']['description']
    title = data['1']['title']
    link = data['1']['link']
    category = data['1']['category']
    image = data['1']['image']


message.channel.send(embled(`**${title}**\nCategory: **${category}** / **[link](${link})**\n\n${des}`));
});

function embled(description) {
  return new Discord.MessageEmbed()
      .setThumbnail(image)
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
