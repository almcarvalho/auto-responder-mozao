//https://github.com/orkestral/venom

const venom = require('venom-bot');

venom.create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
}).then((client) => start(client)).catch((erro) => {
    //console.log(erro);
});

function start(client) {
    client.onMessage((msg) => {
        //Oi de 557598743948@c.us
        console.log(msg.body + ' de ' + msg.from);
        if (msg.body.includes('dia')) {
            if (msg.from == '557598743948@c.us') { //numero do seu mozao aqui
                client.reply(msg.from, `${msg.body} pra você também 💖☀`) //auto resposta
            }
        }
    });
}