const Discord = require("discord.js");

module.exports.run = async (client, message, args, ping) => {

message.channel.send("Pong! " + Math.round(client.ping) + "ms").then(msg => {msg.delete(30000)});
}

module.exports.help = {
    name: "ping",
    usage: "ping",
    description: "Shows the ping from the bot"
}
