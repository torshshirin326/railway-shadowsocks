const Shadowsocks = require('shadowsocks-nodejs');

const server = Shadowsocks.createServer({
  server: '0.0.0.0',
  port: process.env.PORT || 443,
  password: process.env.PASSWORD,
  method: process.env.METHOD || 'aes-256-gcm'
});

server.listen(() => {
  console.log('Shadowsocks server running on port ' + (process.env.PORT || 443));
});
