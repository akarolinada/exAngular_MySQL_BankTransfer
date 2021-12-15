require('./config/conexao')
const { json } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

const rotasTransferencias = require('./rotas')
app.use('/bank_statement', rotasTransferencias)

app.listen(port, () => {
    console.log('Servidor ok')
})