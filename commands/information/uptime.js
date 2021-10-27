var exec = require('child_process').exec;

module.exports = {
    name: "uptime",
    description: "bot's uptime.",
    run: async (client, message, args) => {
    var myShellScript = exec('uptime -p | cut -c 4-');
    myShellScript.stdout.on('data', (data) => { 
        message.channel.send(`${data}`)
    });

    myShellScript.stderr.on('data', (data) => {
        console.error(data);
    });

}
}
