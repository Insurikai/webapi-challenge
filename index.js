const express = require('express');
const server = express();
const port = 8000;
const projectsRoute = require('./projectsRoute');
const actionsRoute = require('./actionsRoute');

server.use(express.json());
server.use('/api/projects', projectsRoute);
server.use('/api/actions', actionsRoute);


server.listen(port, () => {
  console.log(`\n Running on port ${port} \n`);
});
