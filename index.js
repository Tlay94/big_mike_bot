const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log('${bot.user.username} is online!');
  bot.user.setActivity("Your mom")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === "!maze"){
    return message.channel.send("@rhoxio#4731, GET YO ASS IN HERE, BOI!");
  }

  if(cmd === "!tim"){
    return message.channel.send("@timboslice#0032 YO TIM, GET THE FUCK OVER HERE!");
  }
});


bot.login(botconfig.token);