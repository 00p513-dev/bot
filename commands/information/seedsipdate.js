var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");
var s  = require("../../seeds.json")
module.exports = {
    name: "hjfdsdf",
    aliases: ['sefdafdsafed'],
    description: "get seeds",
    run: async (client, message, args) => {

        let seeds = args.join(" ");
        if (!seeds)
        return (message.channel.send("please enter a seed."))

        var input = s[seeds]
        fetch(urls[9])
        .then(response => response.json())
        .then(data => {
            for(let x in data) {
                if(x == input) {
                var id1 = data[x]
                var seedname = data[x]['name']
                            
                }
            }

        fetch(urls[10])
        .then(response => response.json())
        .then(data => {
            let result = ''
            for(let x in data['moshlingSets']) {
                    data1 = data['moshlingSets'][x]  
                
                for(let z in data1['moshlings']) {
                    mosh = data1['moshlings'][z]['name']
                        id = data1['moshlings'][z]['srcId']
                        get_method = data1['moshlings'][z]
                        catchtype = get_method['moshlingRequirements']
                        
                        for(let a in catchtype) {
                        if(catchtype[a]['name'] == seedname) {
                        var re = result += mosh + '\n'                    
		
                    }
                }
            }
            }
                message.channel.send(embled(`Seed **${seedname}** can catch:\n\n${re}`))
            
                
            function embled(description) {
                return new Discord.MessageEmbed()
                    .setColor(embledcolor)
                    .attachFiles([`imgs/seeds/${input}.webp`])
                    .setThumbnail(`attachment://${input}.webp`)              
                    .setDescription(description)
                }
              
            });
            
        });



}
}

    
