const mysql = require('mysql')
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'142536',
    port: 3306,
    database:'db_conta'
})

conexao.connect((erro) => {
    if(erro) throw erro
    console.log('Database conectado')
})

module.exports = conexao
