var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");
var m = require("../../moshlings.json");
var isValidJSON = true;

module.exports = {
    name: "moshling",
    description: "get moshi moshling",
    run: async (client, message, args) => {

        let moshling = args.join(" ");
        if (!moshling)
        return (message.channel.send("please enter a moshling."))

        var input = m[moshling]
        try { 
            JSON.parse(input) 
        } 
        catch { 
            message.channel.send('invalid moshling.')
        }

        fetch(urls[10])
        .then(response => response.json())
        .then(data => {
            let catching = ''
            for(let x in data['moshlingSets']) {
                    data1 = data['moshlingSets'][x]
                for(let z in data1['moshlings']) {
                    if(data1['moshlings'][z]['srcId'] == input) {
                        catchtype = data1['moshlings'][z]['catchType']
                        id = data1['moshlings'][z]['srcId']
                        get_method = data1['moshlings'][z]
                        if(catchtype == 'seed') {
                            get_seeds = get_method['moshlingRequirements']
                            for(let a in get_seeds) {
                                catching += get_seeds[a]['name'] + '\n'
                            }
                        }
                        else if(catchtype == 'mission') {
                            get_mission = get_method['missionInfo']
                            en = get_mission['episodeName']
                            sn = get_mission['seasonNumber']
                            mp = get_mission['missionPartNumber']
                            enu = get_mission['episodeNumber']
                            catching = `${en}\ns${sn}:e${enu}:pt${mp}`
                        
                        }
                        else if(catchtype == 'secret') {
                            catching = 'Special Obtained Moshling'
                        }
                    }
                }
            }

        fetch(urls[11])
        .then(response => response.json())
        .then(data => {
            for(let x in data) {
                if(x == input) {
                    n = data[x]['name']
                    moshling_img = `${n}.png`
                    rank = data[x]['rank']
                    catchType = data[x]['catchType']
                    rarity = data[x]['moshlingjournal']['rarity']
                    species = data[x]['moshlingjournal']['species']
                    likes = data[x]['moshlingjournal']['likes']
                    dislikes = data[x]['moshlingjournal']['dislikes']
                    biography = data[x]['moshlingjournal']['biography']
                    set = data[x]['moshlingjournal']['set']
                    }
            }
        
                message.channel.send(embled(''))

    function embled(description) {
      return new Discord.MessageEmbed()
          .setTitle(n)
          .setColor(embledcolor)
          .attachFiles([`imgs/moshlings/${id}.png`])
          .setThumbnail(`attachment://${id}.png`)
          .setDescription(description)
          .addFields(
            { name: 'ID', value: id, inline: true },
            { name: 'Rank', value: rank, inline: true },
            { name: 'Catch', value: catchType, inline: true },
            { name: "Rarity", value: rarity, inline: true},
            { name: "Species", value: species, inline: true },
            { name: "Set", value: set, inline: true },            
            { name: '\u200B', value: '\u200B' },
            { name: 'Likes', value: likes, inline: true },
            { name: 'Dislikes', value: dislikes, inline: true },
            { name: "Catching", value: catching, inline: true},
            { name: "Biography", value: biography }
        )
    }

});
});
}
}
