const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(NjgxODgzNTY5MDM1MDE4Mjcy.XlZm8g.acHh_WoiU9djmUTnN0-hBX2GxVo);//BOT_TOKEN is the Client Secret
