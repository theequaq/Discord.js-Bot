///// This is a help command for help [command] this will be autoadded!
//// You only need to fill in ..txt/help.txt
/// For the rest this is really easy

const Discord = require("discord.js");
const fs = require('fs');
const { prefix } = require('../src/config.json');
module.exports.run = async (client, message, args) => {
    if(args[0]){
    const path = `cmds/${args[0]}.js`;

    fs.access(path, (err) => {
        if (err) {
          console.error(err)
          message.channel.send("Not a valid command!");
          return
        }
        const filename = require('./'+ args[0] + '.js');
    let helpEmbed = new Discord.RichEmbed() 
    .setTitle("Command: " + prefix + args[0])
    .setColor('RANDOM')
    .setDescription("**Prefix**: ``" + prefix + "``\n**Usage**: ``" + prefix + filename.help.usage + "``\n**Description**: ``" + filename.help.description + "``")
    .setAuthor(message.author.tag, message.author.displayAvatarURL)

    message.channel.send(helpEmbed).then(msg => {msg.delete(30000)});
        //file exists
      });
} else {
    const infoList = fs.readFileSync("./txt/help.txt", "utf8");
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("HelpList")
    .setColor('RANDOM')
    .setDescription("prefix: " + prefix + "\n" + infoList)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)

    message.channel.send(helpEmbed).then(msg => {msg.delete(30000)});

}
}
module.exports.help = {
    name: "help",
    usage: "help [command]",
    description: "test"
    
}
