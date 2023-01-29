const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();

let toggle = false;
let targetUser = ["861732270804172831","1055603187740057600","1060308111342182451"]; // w2w#2695 , w2w a király#0867 , májgergely#6316
let lastMessageTimestamp = new Map();
let antiSpamTimeout = 3.5; // 3.5mp

client.on('ready', () => {
    console.log(`indul a mandula ${client.user.username}!`);
});

client.on('message', msg => {
    if (msg.guild == null) {
         return 0;
    }
    if (msg.content.startsWith("!majgeri") && msg.author.id == "REPLACE_WITH_YOUR_ID" && msg.guild.id == "1047288655653371964") {
        toggle = !toggle;
        if (toggle) {
            msg.react('🟢').then(() => {
                msg.delete();
            });
        } else {
            msg.react('🔴').then(() => {
                msg.delete();
            });
        }
    }
    if (toggle && targetUser.includes(msg.author.id)) {
        if(lastMessageTimestamp.has(msg.author.id) && (Date.now() - lastMessageTimestamp.get(msg.author.id)) < antiSpamTimeout * 1000) {
            return;
        }
        lastMessageTimestamp.set(msg.author.id, Date.now());
        msg.channel.send(`"${msg.content}"` + "  🤓");
    }
});

client.login('REPLACE_WITH_YOUR_TOKEN');
