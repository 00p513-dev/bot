var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");
var s  = require("../../streets.json")

module.exports = {
    name: "street",
    aliases: ['street'],
    description: "get moshi street stats",
    run: async (client, message, args) => {
   let street = args.join(" ");
   if (!street)
   return (message.channel.send("please enter a street."))

   var input = s[street]
   try { 
    JSON.parse(input) 
    } 
    catch { 
    message.channel.send('invalid street.')
    }


   fetch('http://45.76.172.127:6060/street/' + input)
   .then(response => response.json())
   .then(data => {
    
    n = data['street']
    let a = 0
    let mo = ''
    for(let x in data['data']) {
        a += 1
        mo += data['data'][x] + '\n'
    }



message.channel.send(embled(`**${a} users walking down ${n}**\n\n${mo}`));
});

function embled(description) {
  return new Discord.MessageEmbed()
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
