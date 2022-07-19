// Node.js 런타임 환경

// console.log(globalThis); // ES 2020 global

const liveServer = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  cors: true,
  root: './client',
};

liveServer.start(params);
