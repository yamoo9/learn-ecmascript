// Node.js 런타임 환경

// console.log(process.env.LANG);

const liveServer = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  cors: true,
  root: './client',
};

liveServer.start(params);
