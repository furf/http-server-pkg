const path = require('path');
const openport = require('openport');
const httpServer = require('http-server');
const opn = require('opn');

const startingPort = 8000;
const endingPort = 8999;
const root = path.join(__dirname, 'public');

// Search for an available port in the supplied range.
openport.find({ startingPort, endingPort }, (error, port) => {
  // Handle error.
  if (error) {
    console.error(error);
    return;
  }

  // Start server.
  const server = httpServer.createServer({ root });
  server.listen(port);

  // Launch browser.
  const url = `http://localhost:${port}`;
  opn(url);
  console.log(`http-server-pkg listening at ${url}`);
});
