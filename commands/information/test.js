const Discord = require('discord.js');
var client = new Discord.Client();

module.exports = (client) => {

    client.on('message', async message => {
        const BannedWords = ['']

        const count = 1950;
        const Msg = message.content.slice(0, count) + (message.content.length > count ? " ..." : "");
        
        if (message.attachments.size > 0) {
           deleteEmbed.addField(`Attach:`, `${message.attachments.map((a) => a.url)}`, true)
        }
        
        if( BannedWords.some(word => message.content.includes(word)) ) {
            message.delete()
            message.channel.send(BlacklistEmbed(`${message.author}, please do not use that kind of language again.`))
            message.guild.channels.cache.get("888039819178016779").send(BlacklistEmbed(`${message.author} said a blacklisted word in ${message.channel}.\n\n**Blacklisted Message**: \`\`\`${Msg}\`\`\``))
        }

//  You do not to need to have embeds everywhere, just make them into a function.
   function BlacklistEmbed(description) {
    return new Discord.MessageEmbed()
      .setAuthor(`bot security`)
      .setColor('BLURPLE')
      .setDescription(description)
  }
});
}
   