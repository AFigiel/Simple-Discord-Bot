const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

//Console Start Message
client.once('ready', () => {
	console.log('Ready!');
});

//Basic Message Command + Console Log of Messages
client.on('message', message => {
if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong!');
} else if (message.content.startsWith(`${prefix}beep`)) {
	message.channel.send('Boop!');
}
else if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
	console.log(message.content);
});

//Login Information
client.login(token);
