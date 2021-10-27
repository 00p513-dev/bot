var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");

module.exports = {
    name: "seeds",
    aliases: ['seed'],
    description: "get seeds",
    run: async (client, message, args) => {

        let seeds = args.join(" ");
        if (!seeds)
        return (message.channel.send("please enter a seed."))

        var input = seeds.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        // var seeds_img = `${input}.webp`.replace(/ /g, '_');

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
                        if(catchtype[a]['name'] == input) {
                        var re = result += mosh + '\n'                    
		
                    }
                }
            }
            }
                try {
                message.channel.send(embled(`Seed **${input}** can catch:\n\n${re}`))
                function embled(description) {
                    return new Discord.MessageEmbed()
                        .setColor(embledcolor)
                        // .attachFiles([`imgs/seeds/${seeds_img}`])
                        // .setThumbnail(`attachment://${seeds_img}`)              
                        .setDescription(description)
                  }
                }
                catch(error) {
                    message.channel.send('invalid seed, make sure it is spelt correctly.')
                }
            });

}
}
