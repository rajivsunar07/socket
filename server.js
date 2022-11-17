const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const router = express.Router()
const cors = require('cors')

router.get("/", (req, res) => {
    res.send({ response: "Server is up and running." }).status(200);
  });

app.use(cors())
app.use(router)

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        // origin: ['http://localhost:3000', "https://admin.socket.io"],
        origin: ['*'],
        credentials: true
    }
}) 

server.listen(process.env.PORT || 3001,  () => {
    console.log('Server is running');
})