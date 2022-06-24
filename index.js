const express = require("express"); // use express
const app = express(); // create instance of express
const server = require("http").Server(app); // create server
const io = require("socket.io")(server); // create instance of socketio

app.use(express.static("public")); // use "public" directory for static files
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render(__dirname + '/public/index.ejs', {username: "Repl.it User"});
});

server.listen(3000);