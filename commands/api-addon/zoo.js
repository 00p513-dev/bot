var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "zoo",
    aliases: ['zoo'],
    description: "get moshi zoo stats",
    run: async (client, message, args) => {
   let zoo = args.join(" ");
   if (!zoo)
   return (message.channel.send("please enter a username."))


   fetch(urls[2] + zoo)
.then(response => response.json())
.then(data => {
if (data['rank'] == 'Banned') {
	return message.channel.send("this user is banned");
}
if (error = data['error']) {
    return message.channel.send("please enter a valid username.")
};

   fetch('http://45.76.172.127:6060/zoo/' + zoo)
   .then(response => response.json())
   .then(data => {

    let mo = ''
    let a = 0
    for(let x in data['moshlings']) {
        a += 1
        mo += '\`' + data['moshlings'][x] + '\`, '
    }

    if(a > 170) {
        mo = '\`more moshlings than discord can handle in a message. thanks joe.\`aa'
    }



message.channel.send(embled(`**${zoo}'s Zoo** (**${a}** moshlings)\n\n${mo.slice(0,-2)}`));
});
});


function embled(description) {
  return new Discord.MessageEmbed()
      .setColor(embledcolor)
      .setDescription(description)
}
}
}
