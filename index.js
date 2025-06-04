
const venom = require('venom-bot');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

venom
  .create({
    session: 'bot-ffc',
    multidevice: true,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase().includes('cimento')) {
      await client.sendText(message.from, 'Temos cimento por R$ 25,00 o saco.');
    } else if (message.body.toLowerCase().includes('tijolo')) {
      await client.sendText(message.from, 'Tijolo comum a R$ 0,80 a unidade.');
    } else if (message.body.toLowerCase().includes('areia')) {
      await client.sendText(message.from, 'Areia lavada disponível a R$ 120,00 o metro.');
    } else {
      await client.sendText(message.from, 'Olá! Digite o nome de um produto (cimento, tijolo, areia) para saber mais.');
    }
  });
}

app.get('/', (req, res) => {
  res.send('Bot está rodando!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
