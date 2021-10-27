var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");
var s  = require("../../shops.json")

module.exports = {
    name: "shop",
    aliases: ['shop'],
    description: "get moshi shop stats",
    run: async (client, message, args) => {
   let shop = args.join(" ");
   if (!shop)
   return (message.channel.send("please enter a shop."))

   var input = s[shop]
   try { 
    JSON.parse(input) 
    } 
    catch { 
    message.channel.send('invalid shop.')
    }

   fetch('http://45.76.172.127:6060/shop/' + input)
   .then(response => response.json())
   .then(data => {

    n = data['store']

    let mo = ''
    let a = 0
    for(let x in data['shop']) {
        a += 1
        mo += '\`' + data['shop'][x] + '\`, '
    }

message.channel.send(embled(`**${n}'s current stock** (**${a}** items)\n\n${mo.slice(0,-2)}`));
});

function embled(description) {
  return new Discord.MessageEmbed()
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
