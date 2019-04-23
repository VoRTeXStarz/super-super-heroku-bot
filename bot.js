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
client.login(NTcwMzM4NTI1NjQ0MzI0ODcz.XL9zOQ.8_jYH9riXHEhEjzAKFiiHqNj0d0);
