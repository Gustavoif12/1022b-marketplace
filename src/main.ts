// LIVE SERVER é do FRONT-END
// QUEM É O LIVE SERVER DO BACK-END?

// 1 - Para construir um servidor back-end e responder
// Vamos utilizar EXPRESS
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
//CRIAR UM OBJETO DO TIPO EXPRESS
const app = express()
// Incluir pra ele receber json
app.use(express.json())  //Middleware
// Incluir o CORS -> QUANDO A GENTE TEM OUTRA PORTA FAZENDO REQUISIÇÃO PARA A PORTA DO SERVIDOR
app.use(cors())
//ROTAS
app.get("/produtos", async (req, res) => {

    //O que eu tenho que fazer aqui dentro?
    //PASSO 1: Criar o banco de dados
    //PASSO 2: Usar a lib mysql2 para conectar com o banco
    try {
        const conexao = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "banco1022b",
            port: 3306
        })
    } catch (e) {
        res.status(500).send("Erro do servidor")
    }
    //PASSO 3: QUERY -> SELECT * FROM produtos
    const [result, fields] = await conexao.query("SELECT * FROM produtos")
    //PASSO 4: Colocar os dados do banco de dados
    res.send({ mensagem: "Eu sou a rota de produtos" })
})
//INICIAR O SERVIDOR
app.listen(8000, () => {
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})