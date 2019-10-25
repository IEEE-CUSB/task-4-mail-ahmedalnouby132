const express = require('express')
const route = require('./routes')
const server= express()


server.use(route)
const port =3000

server.listen(port)
