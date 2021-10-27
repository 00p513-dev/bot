var { Client, Collection } = require('discord.js-selfbot');
var { config } = require("dotenv");
var { rpmessage,p }  = require("./config.json");
var fs = require('fs')
var client = new Client({
    disableEveryone: false
})

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is online.`);
    client.user.setStatus('invisible');
});

client.on("message", async message => {
    var prefix = `${p}`;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
        command.run(client, message, args);
});

client.login(process.env.TOKEN);
