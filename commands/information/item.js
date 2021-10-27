var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");

module.exports = {
    name: "item",
    description: "get a moshi item and it's information",
    run: async (client, message, args) => {
      let item = args.join(" ");
      if (!item)
      return (message.channel.send("please enter a item."))
        fetch(urls[5])
        .then(response => response.json())
        .then(data => {

          try {
                for (let x in data) {
                if(data[x]['name'] === item) {

                type = data[x]['type']
                rox = data[x]['rocks']
                happiness = data[x]['happiness']
                health = data[x]['health']
                d = data[x]['description']
                level = data[x]['level']

                if(data[x]['rarity'] == "3") {
                rarity = 'Common' }
                else if(data[x]['rarity'] == "2") {
                rarity = 'Uncommon' }
                else if(data['rarity'] == "1") {
                rarity = 'Rare' }
                else if(data[x]['rarity'] == "0") {
                rarity = 'Ultra Rare' }
                else if(data[x]['rarity'] == '') {
                rarity = 'No Rarity' }
                            
                message.channel.send(embled(`**${data[x]['name']}**:\n\ntype: **${type}**\n<:Level:881169014473232434> level: **${level}**\n<:Health:881168914405552218> health: **${health}**\n<:Happiness:881168695135719435> happiness: **${happiness}**\n<:Rox:881169130613514240> rox: **${rox}**\nrarity: **${rarity}**\n\n`))
              }}
          }
          catch(error) {
            return message.channel.send(`invalid item.`)
          }
  });

  

function embled(description) {
  return new Discord.MessageEmbed()
      .setDescription(description)
      .setColor(embledcolor)
      .addFields(
        { name: 'Description', value: d }
      )
}
}
}
