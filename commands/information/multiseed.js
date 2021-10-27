var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var { embledcolor }  = require("../../config.json");
var urls  = require("../../urls.json");
var s  = require("../../seeds.json")
var isValidJSON = true;

module.exports = {
    name: "multiseeds",
    aliases: ['multiseed'],
    description: "get multi seeds",
    run: async (client, message, args) => {

        var [seed, ...restArgs] = args;
        var seed = args[0]
        if(!seed) 
        return (message.channel.send("please enter 2 seeds."))
        var seed1 = restArgs.join(' ')
        if(!seed1)
        return(message.channel.send('please enter a second seed.'))
        
        var input = s[seed]
        var input2 = s[seed1]
        // check if input is even in the json. //
        try { JSON.parse(input) } 
        catch { 
           message.channel.send('seeds MUST be no spaces for now.')
        }
        try { JSON.parse(input2) } 
        catch { 
           message.channel.send('seeds MUST be no spaces for now.')
        }

        

        fetch(urls[9])
        .then(response => response.json())
        .then(data => {
            for(let x in data) {
                if(x == input) {
                seedname = data[x]['name']
                id2 = x
                level = data[x]['level']
                rox = data[x]['rocks']
                d = data[x]['description']
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
            e = re.split('\n')

            var r = [];
            e.forEach(function(e) {
                if(r.indexOf(e) < 0) {
                    r.push(e);
                }
            });
            
            let mo = ''

            for(let z in r.slice(0, -1)) {
                mo += '\`' + r[z] + '\`, '
            }
    

            message.channel.send(embled(''))
   
                    
            function embled(description) {
                return new Discord.MessageEmbed()
                    .setTitle(`${seedname}`)
                    .setColor(embledcolor)
                    .attachFiles([`imgs/seeds/${input}.webp`])
                    .setThumbnail(`attachment://${input}.webp`)              
                    .setDescription(description)
                    .addFields(
                        { name: 'Attracted Moshlings', value: mo.slice(0, -2) },
                        { name: 'Description', value: d }
                    )
                }
              
            });
            
        });



}
}

    
