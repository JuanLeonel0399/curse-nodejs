const net = require('node:net');

function findAvailablePort(getPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(getPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      })
    });
    server.on('error', (err) => {
      if(err.code === 'EADDRINUSE') {
        return findAvailablePort(0).then(port => resolve(port));
      }else {
        server.close();
        reject(err);
      }
      
    });
  });
}

module.exports = { findAvailablePort }