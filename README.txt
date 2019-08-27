/////////////////////////////
/////  //  //     //  ///  /  
////  //  //  //////  /  //
///      //    //////  ///
//  //  //  ////////  ///
/  //  //      ////  ///
///////////////////////

▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉


This is a example bot created by BlackDeadSkulll!
This bot is free to use in any way!
Thank for using my bot :D
if you need help send me a message on discord!

@BlackDeadSkulll#2095

note:
npm i discord.js fs
if you dont do this the bot will not work!

==========================================================================================================================================================

Index.js:

// Node version check! node version is 10.16.0 or higher
if (Number(process.version.slice(1).split(".")[0]) < 10) throw new Error("Node 10.16.0 or higher is required. Update Node on your system.");

// load Discord.js\fs\config
const Discord = require('discord.js');
const fs = require('fs');
const { token, prefix } = require('./src/config.json');
// New client (some people call it 'bot') you can call it everything you want!
const client = new Discord.Client();
client.commands = new Discord.Collection();

// Token and prefix check!
if(token==='') throw new Error("You have forgot to input a token! Make sure you have written in the ./src/config.js");
if(prefix==='') throw new Error("You have forgot to input a prefix! Make sure you have written in the ./src/config.js");
// Command handler
// Here we load **commands** into memory, as a collection, so they're accessible
fs.readdir('./cmds/', (err, file) => {
    if(err) console.log(err);
    let cmdsjsf = file.filter(files => files.split(".").pop() === "js")
    if(cmdsjsf.length <= 0){
        console.log('Commands Not Found or do NOT exsist!');
        return;
    }
    console.log("Commands: loading... " + cmdsjsf.length + " command(s) found!")
    cmdsjsf.forEach((files, i) =>{

        let loadme = require(`./cmds/${files}`);
        console.log("- " + files + " has been loaded!");
        client.commands.set(loadme.help.name, loadme);

    });
});

// Events
// Then we load events, which will include our ready, disconnect, guildCreate , guildDelete and message event.
 client.once('ready', async () =>{
     console.log("                                  BotName: " +client.user.username + "\n                                  Status: ONLINE!\n                                  Guild(s): " + client.guilds.size + "\n                                  Channel(s): " + client.channels.size + "\n                                  Members: " + client.users.size + "\n                                  Prefix: " + prefix + "\n                                  Token: " + token);
     // This event triggers when you start the bot!
    console.log('Servers: ' + client.guilds.size)
    client.guilds.forEach((guild) =>{
        console.log("- "+ guild.name)
    });
});

client.on("disconnect", function(event){
    // This event triggers when the bot disconnects.
    console.log(`The WebSocket has closed and will no longer attempt to reconnect`);
});

client.on("guildCreate", guild => {
	// This event triggers when the bot joins a guild.
	console.log(`i have been added in ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    console.log('Servers: ' + client.guilds.size)
    client.guilds.forEach((guild) => {
		console.log(" - " + guild.name)
	});
});

client.on("guildDelete", guild => {
    // This event triggers when the bot is removed from a guild.
	console.log(`i have been deleted from ${guild.name} (id: ${guild.id}) :ç`);
	console.log('Servers: ' + client.guilds.size)
    client.guilds.forEach((guild) => {
		console.log(" - " + guild.name)
	});
});
client.on("message", async message =>{
    // This event triggers when user do a command.
	if(message.author.bot) return;
	if(message.channel.type === "dm") return message.channel.send("Sorry i am disabled for the DM function!");
	let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
	let args = messageArray.slice(1);
	if (!message.content.startsWith(`${prefix}`)) return;
	let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile){ commandfile.run(client,message,args)} else { message.channel.send("Command does not exist try " + prefix + "help!")};
});

// You can get more triggers in ./node_modules/discord.js/client/actions ;)
// If you dont know what you are doing dont do that!


//Usefull info (will spam console)
// client.on("error", (error) => console.error(error));
// client.on("warn", (error) => console.warn(error));
// client.on("debug", (error) => console.info(error))

client.login(token);



==========================================================================================================================================================

config.json

{
    "token": ""Your token here",
    "prefix": "Your Prefix here"
}

==========================================================================================================================================================

name.js 

module.exports.run = async (client, message, args) => { // Do not edit this

// Your commands

} // Do not edit this


module.exports.help = { // Do not edit this
    name: "name", //name needs to be the filename else you will get a error
    usage: "name", //change the use from here
    description: "This is a test command!" //change the description from here
}// Do not edit this
==========================================================================================================================================================