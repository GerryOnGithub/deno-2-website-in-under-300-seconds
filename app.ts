import express from 'express';
const app = express();

import * as http from 'node:http';
const server = http.createServer(app);

app.use(express.static('./'));

const port = 5678;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
