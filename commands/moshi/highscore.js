var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
let table = require("table");
var client = new Discord.Client();
var { embledcolor }  = require("../../config.json");
var r = require("../../highscore.json");
var urls  = require("../../urls.json");

module.exports = {
    name: "highscore",
    aliases: ['h','hs','highscores'],
    description: "get top moshi highscores",
    run: async (client, message, args) => {
      let hs = args.join(" ");
      if (!hs)
      return (message.channel.send("please enter a minigame."))
        fetch(urls[3] + r[hs])
        .then(response => response.json())
        .then(data => {
          var j;
          n = data['name']
          let s = ''
          let u = ''
          try {
            for (const [key, value] of Object.entries(data['scores'])) {
              
            u += value['username'] + "\n"
            s += value['score'] + "\n"
          }
        }
          catch(error) {
                return message.channel.send('invalid minigame.')
              }

data = [
  ['user', 'score'],
  [u,s]
]
 
  let x = table.table(data);
      message.channel.send(embled(`**${n} highscore**\n\`\`\`${x}\`\`\``));
  });

  

function embled(description) {
  return new Discord.MessageEmbed()
      .setDescription(description)
      .setColor(embledcolor)
}
}
}
