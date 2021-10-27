var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
let table = require("table");
var client = new Discord.Client();
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");
var response = ['rox', 'level', 'visits']

module.exports = {
    name: "top",
    aliases: ['t'],
    description: "get top moshi players",
    run: async (client, message, args) => {
        let j = args.join(response);
        if (!j)
        return (message.channel.send(`usage: \`>top [${response}]\``))

        if(j == response[0])
            es = 'rocks',link= "rox"
        
        else if(j == response[1])
            es = 'level',link= "level"
        
        else if(j == response[2])
            es = 'views',link='visits'
	
        else if(j == args.join(" "))
            return message.channel.send(`usage: \`>top [${response}]\``)
        
    

        fetch(urls[4] + link)
        .then(response => response.json())
        .then(data => {
          let a = ''
          let r = ''
            for(let x in data) {
                a += data[x]['username'] + "\n"
                r += data[x][`${es}`] + "\n"
            }
      
      data = [
        ['user', 'score'],
        [a, r]
      ]
        
      let x = table.table(data);
      message.channel.send(embled(`**top ${link}**\n\`\`\`${x}\`\`\``));
  });

  

function embled(description) {
  return new Discord.MessageEmbed()
      .setDescription(description)
      .attachFiles([`imgs/etc/logo.png`])
      .setThumbnail(`attachment://logo.png`)
      .setColor(embledcolor)
}
}
}
