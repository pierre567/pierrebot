const Discord = require ("discord.js")

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Méga-Bot, ;help");
    console.log("le bot a bien étais connecte");
});

bot.login("NDM3NTk1NDg4NTI3NzEyMjY4.Db5Fwg._xQ-X17WbK1taUEclfhfJmuNbVk");
