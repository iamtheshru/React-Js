const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

function initializeSocket(server) {
    // Implement socket functionality here or leave it empty if not needed
    console.log('Socket initialized');
}

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = { initializeSocket };