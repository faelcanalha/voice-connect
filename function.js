require('colors')
function error(message) {
    console.log("[ERROR] ".red + message)
}
function warn(message) {
    console.log("[WARNING] ".yellow + message)
}
function sucess(message) {
    console.log("[SUCESS] ".green + message)
}

async function client(x) {
    console.clear()
    const setTitle = require('console-title')
    setTitle("FaelVoice-Connect 1.0.0")
    const Discord = require("discord.js-self")
    const config = require('./config.json')
    let client = new Discord.Client()

    client.on("ready", () => {
        let channel = client.channels.cache.get(config.Connections.ChannelVoiceID[x])
        channel.join()
        .then(() => {
            sucess(`Connected to voice channel: ${channel.name} | Server: ${channel.guild.name} | ` + `${client.user.tag} | TOKEN-${x}`.cyan)
        })
    })
    client.login(config.Connections.Tokens[x])
    .catch(() => {
        error("Could not connect to " + `TOKEN-${x}`.cyan)
    })
}
module.exports.error = error
module.exports.warn = warn
module.exports.sucess = sucess
module.exports.client = client
