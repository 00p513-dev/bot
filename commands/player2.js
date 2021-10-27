var fetch = require('node-fetch');
var Discord = require('discord.js-selfbot');
var client = new Discord.Client();
var urls  = require("../../urls.json");

module.exports = {
    name: "player",
    aliases: ['p'],
    description: "get moshi player stats",
    run: async (client, message, args) => {
   let player = args.join(" ");
   if (!player)
   return (message.channel.send("please enter a username."))


   fetch('http://45.76.172.127:6060/player/' + player)
   .then(response => response.json())
   .then(data => {

    pb = data['pinboard_messages']
    age = data['age']
    country = data['country']
    gender = data['gender']
    happiness = data['happiness']
    health = data['health']
    gifts = data['gifts']
   
   fetch(urls[7] + player)
   .then(response => response.json())
   .then(data => {
try {
  friends = data['player']['total_friends']
}
catch (error) {
  friends = '0'
};

let bff = 0
try {
for(let a of data['friends']) {
    if(a['bestfriends'] == 'true')
        bff += 1
}
}
catch(error) {
    bff = '0'
}

fetch(urls[2] + player)
.then(response => response.json())
.then(data => {
  moshlings = data['moshlings']
  join_date = data['join_date']
  last_login = data['last_login']
    if (data['rank'] == 'Banned') {
      return message.channel.send("this user is banned");
    }
  level = data['level']
  rox = data['rox']
  level_progress = data['level_progress']
  room_rate = data['room_rate']
  room_views = data['room_views']
  monstar = data['monstar']
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
  if (error = data['error']) {
    return message.channel.send("please enter a valid username.")
  }; 

message.channel.send(embled(`**${player}'s Statistics**\n\nGender: **${gender}**\nAge: **${age}**\nCountry: **${country}**\nLevel: **${level}** (**${level_progress}**)\nHealth: **${health}**\nHappiness: **${happiness}**\nRox: **${rox}**\nFriends: **${friends}**\nBest friends: **${bff}**\nMonstar: **${monstar}**\nVisits: **${room_views}**\nRoom Rating: **${room_rate}**\nMoshlings: **${moshlings}**\nGifts: **${gifts}**\nPinboard messages: **${pb}**\nJoined: **${join_date}**\nLast login: **${last_login}**`));
});
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
