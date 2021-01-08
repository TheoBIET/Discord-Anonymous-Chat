const Discord = require('discord.js');
const client = new Discord.Client();

let idChannel = 'PUT-HERE-THE-ANONYMOUS-CHANNEL-ID';
let active = false;
const prefix = '²';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Commande pour définir un channel comme salon de DarkChat
client.on('message', message => {

  // ²help
  if (message.content === prefix + "help"){
    message.channel.send('Pour configurer DarkChat, vous devez simplement aller dans le channel ou vous souhaitez rendre anonymez puis coller cette commande : ``²²²²DarkSetup``')
  }

  // ²²²²DarkSetup
  if (message.content === prefix + "²²²DarkSetup"){
    idChannel = message.channel.id
    message.delete()
    message.channel.send('L\'id du Channel du DarkChat mis à jour **' + idChannel + '**')
    return idChannel, active;
  }

  //Envoi de messages anonymes
  let idChannelMessage = message.channel.id
  if (message.author.id != client.user.id && idChannel === idChannelMessage) {
    if (message.content.slice(1) === 'DarkSetup' || idChannelMessage == undefined){
      return
    }
    else {
      let anonymousMessage = message.content
      const cryptedMessage = new Discord.MessageEmbed()
          .setColor('#4f545c')
          .setAuthor('Message Crypté - DarkNet', 'https://images.lpcdn.ca/924x615/201304/16/675500.jpg')
          .setDescription('Activation du VPN...... ⏳ \n Connexion établie! 🌐')
          //.setTimestamp()
          .addField(anonymousMessage,'Déconnexion....⏳', true)
      message.delete();
      message.channel.send(cryptedMessage);
    }
  }
});

client.login("PUT-HERE-YOUR-BOT-TOKEN");
