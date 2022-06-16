<div align="center">
  <h1>Voice Connect</h1>
  <p>Leave a certain number of user logged into a voice channel</p>
  <p>Caution, this is against Discord Terms, Use at your own risk!</p>
</div>

# 📡 Conexão:
#### Va ate o `config.json`:
```json
{
    "Connections": {
        "Tokens": {
            "1": "Token here"
        },
        "ChannelVoiceID": {
            "1": "Channel ID here"
        }
    }
}
```

# 👷 How to add more user to connect?:

# In `config.json`
```json
{
    "Connections": {
        "Tokens": {
            "1": "Token here",
            "2": "Other user's token"
        },
        "ChannelVoiceID": {
            "1": "Channel ID here",
            "2": "Other user id"
        }
    }
}
```

# In `index.js`
```js
const { warn, client } = require('./function.js')
warn("It may take between 1~2 minutes to connect with user")

client(1)
client(2) // Second user connection
```
