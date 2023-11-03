const http = require('http');
const { readFileSync } = require('fs');

const navbar = readFileSync('./navbar-app/index.html');
const navstyle = readFileSync('./navbar-app/styles.css');
const navlogo = readFileSync('./navbar-app/logo.svg');
const navlogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(navbar);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(navstyle);
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(navlogo);
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(navlogic);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(5000);
