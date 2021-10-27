var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");
let table = require("table");

module.exports = {
    name: "codes",
    description: "get moshi codes",
    run: async (client, message, args) => {
    let player = args.join(" ");
    if (!player)
    fetch(urls[1])
    .then(response => response.json())
    .then(data => {

        let a = 0
        let c1 = 0
        let a2 = 0
        let r = 0
        
        for(let x in data) {
            let j = data[x]['type']
            if(j == 'ROX') {
                r += 1 }
            else if(j == 'ACCESSORY') {
                a += 1 }
        }
        
        for(let x in data) {
            let j = data[x]['status']
            if(j == 'Active') {
                a2 += 1 }
            else if(j == 'Expired') {
                c1 += 1 }
        }   
            
        return message.channel.send(embled(`**Moshi Rewritten Code Statistics**\n\nactive: **${a2}**\nexpired: **${c1}**\nrox codes: **${r}**\naccessory codes: **${a}**\n\nusage: >codes \`accessory\`, \`rox\``));
    })
    if (player == 'rox')
    fetch(urls[1])
    .then(response => response.json())
    .then(d => {
        let rox = ''
        let value = ''
        for(let q in d) {
            let j = d[q]['type']
            if(j == 'ROX') {
                rox += d[q]['code'] + '\n'
                value += d[q]['value'] + '\n'
            }

            data = [
                ['rox', 'value'],
                [rox,value]
              ]
                
    }
    let x = table.table(data)
    message.channel.send(embled(`**Rox Codes**\n\n\`\`\`${x}\`\`\``));
});
if (player == 'accessory')
    fetch(urls[1])
    .then(response => response.json())
    .then(da => {
        let rox = ''
        let value = ''
        for(let qq in da) {
            let j = da[qq]['type']
            if(j == 'ACCESSORY') {
                rox += da[qq]['code'] + '\n'
            }

            data = [
                ['accessory'],
                [rox]
              ]
                
    }
    let x = table.table(data)
    message.channel.send(embled(`**Accessory Codes**\n\n\`\`\`${x}\`\`\``));
});
    function embled(description) {
      return new Discord.MessageEmbed()
          .setColor(embledcolor)
          .attachFiles([`imgs/etc/logo.png`])
          .setThumbnail(`attachment://logo.png`)
          .setDescription(description)
    }
}
}