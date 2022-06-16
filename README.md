<div align="center">
  <h1>Voice Connect</h1>
  <p>Deixe um certo numero de usuário conectado em um canal de voz</p>
  <p>Cuidado, isso é contra os Termos do Discord, Use por conta e risco!</p>
</div>

# 📡 Conexão:
#### Va ate o `config.json`:
```json
{
    "Connections": {
        "Tokens": {
            "1": "Token aqui"
        },
        "ChannelVoiceID": {
            "1": "Id do canal aqui
        }
    }
}
});
```

# 👷 Como adicionar mas usuário para conectar?:

# No `config.json`
```json
{
    "Connections": {
        "Tokens": {
            "1": "Token aqui",
            "2": "Token do outro usuário"
        },
        "ChannelVoiceID": {
            "1": "ID do canal aqui",
            "2": "ID do outro usuário"
        }
    }
}
```

# No `index.js`
```js
const { warn, client } = require('./function.js')
warn("Pode demorar entre 1~2 minutos para fazer conexão com usuário")

client(1)
client(2) //Conexão com 2 usuário
```
