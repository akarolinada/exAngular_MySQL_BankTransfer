const routers = require('express').Router()
const conexao = require('./config/conexao')

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

//lista database
routers.get('/', (req,res) => {
    let sql = 'select * from tb_transferencias'
    conexao.query(sql, (erro, rows, fields) => {
        if(erro) throw erro
        res.json(rows)
    })
})

routers.get("/:id", (req, res) => {
    const { id } = req.params;
    let sql = `select * from tb_transferencias where id_transferencia = ${id}`;
    conexao.query(sql, [id], (erro, rows, fields) => {
      if (erro) throw erro;
      res.json(rows[0]);
    });
});

routers.delete("/:id", (req, res) => {
    const { id } = req.params;
    let sql = `delete from tb_transferencias where id_transferencia = ${id}`;
    conexao.query(sql, (erro, rows, fields) => {
      if (erro) throw erro;
      res.json({ status: "Transferencia excluida com sucesso" });
    });
});

routers.post("/", urlencodedParser, (req, res) => {
    const { nomeCliente, valor, contaCliente } = req.body;
    let sql = `insert into tb_transferencias(nomeCliente, valor, contaCliente) values('${nomeCliente}','${valor}', '${contaCliente}')`;
    conexao.query(sql, (erro, rows, fields) => {
      if (erro) throw erro;
      res.json({ status: "Transferencia incluida com sucesso" });
    });
});

routers.put("/:id", urlencodedParser, (req, res) => {
    const { id } = req.params;
    const { nomeCliente, valor, contaCliente } = req.body;
    let sql = `update tb_transferencias set 
               nomeCliente = '${nomeCliente}',
               valor = '${valor}',
               contaCliente = '${contaCliente}'
               where id_transferencia = '${id}'`;
    conexao.query(sql, (erro, rows, fields) => {
      if (erro) throw erro;
      res.json({ status: "Transferencia editada com sucesso" });
    });
});

module.exports = routers