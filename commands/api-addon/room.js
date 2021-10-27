var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");
var { embledcolor }  = require("../../config.json");

module.exports = {
    name: "room",
    description: "get moshi room",
    run: async (client, message, args) => {
   let player = args.join(" ");
   if (!player)
   return (message.channel.send("please enter a username."))

   fetch(urls[2] + player)
.then(response => response.json())
.then(data => {
if (data['rank'] == 'Banned') {
	return message.channel.send("this user is banned");
}
if (error = data['error']) {
return message.channel.send("please enter a valid username.")
}; 

if(monster = data['monster'] == 'Diavlo') 
monster = "Diavlo.png",
e = '#da0008'
else if(monster = data['monster'] == 'Furi') 
monster = "Furi.png",
e = '#ab540f'
else if(monster = data['monster'] == 'Poppet') 
monster = "Poppet.png",
e = '#ef80b3'
else if(monster = data['monster'] == 'Luvli')
monster = "Luvli.png",
e = '#ef4b66'
else if(monster = data['monster'] == 'Katsuma')
monster = "Katsuma.png",
e = '#f7a11a'
else if (monster = data['monster'] == 'Zommer')
monster = "Zommer.png",
e = '#acc4e5'


   fetch('http://45.76.172.127:6060/room/' + player)
   .then(response => response.json())
   .then(data => {


    let mo = ''
    let a = 0
    for(let x in data['moshlings']) {
        a += 1
        mo += '\`' + data['moshlings'][x] + '\`, '
    }

    if(a == 0) {
        mo = '\`no moshlings\`gs'
    }

    house_style = data['house']['style']

    if(house_style == 'cake_house') {
        house_style = 'Cake House'
    }
    else if(house_style == 'haunted_house') {
        house_style = 'Haunted House'
    }
    else if(house_style == 'tree_house') {
        house_style = 'Tree House'
    }
    else if(house_style == 'default') {
        house_style = 'Default'
    }
    else if(house_style == 'mountain_house') {
        house_style = 'Mountain House'
    }
    else if(house_style == 'princess_castle') {
        house_style = 'Princess Castle'
    }


    let rooms = 0
    let inventory = 0
    let room1 = 0
    let room2 = 0
    let room3 = 0
    let room4 = 0
    let room5 = 0
 
    for(let x in data['house']['rooms']) {
        rooms += 1 }

    for(let x in data['inventory']) {
        inventory += 1 }

    for(let x in data['room1']) {
        room1 += 1 }

    for(let x in data['room2']) {
        room2 += 1 }

    for(let x in data['room3']) {
        room3 += 1 }

    for(let x in data['room4']) {
        room4 += 1 }

    for(let x in data['room5']) {
        room5 += 1 }

    var room = room1+room2+room3+room4+room5

    message.channel.send(embled(`**${player}'s Room**\n\n**${rooms}** room(s)\n**${inventory}** items in inventory\n**${room}** items in rooms\n**${house_style}** style house\n\n**${a}** moshlings in room:\n${mo.slice(0,-2)}`))
   });
});


    function embled(description) {
        return new Discord.MessageEmbed()
        .setColor(e)
        .attachFiles([`imgs/etc/${monster}`])
        .setThumbnail(`attachment://${monster}`)
        .setDescription(description)
      }
      }
      }
      