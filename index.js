'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: 'http://www.nnn.ed.nico/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});

