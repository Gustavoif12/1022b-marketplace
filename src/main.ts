import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();

app.use(express.json());
app.use(cors());

// ROTA PARA CADASTRAR UMA COMIC
app.post('/comics', async (req, res) => {
  try {
    const { id, titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem } = req.body;

    const conexao = await mysql.createConnection({
      host: process.env.dbhost ? process.env.dbhost : "localhost",
      user: process.env.dbuser ? process.env.dbuser : "root",
      password: process.env.dbpassword ? process.env.dbpassword : "",
      database: process.env.dbname ? process.env.dbname : "comicsdb",
      port: process.env.dbport ? parseInt(process.env.dbport) : 3306
    });

    const query = `
      INSERT INTO comics VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await conexao.query(query, [id, titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem]);
    await conexao.end();

    res.status(201).send({ message: 'Comic cadastrada com sucesso!' });
  } catch (e) {
    console.error(e);
    res.status(500).send('Erro do servidor');
  }
});

// ROTA PARA LISTAR TODAS AS COMICS
app.get('/comics', async (req, res) => {
  try {
    const conexao = await mysql.createConnection({
      host: process.env.dbhost ? process.env.dbhost : "localhost",
      user: process.env.dbuser ? process.env.dbuser : "root",
      password: process.env.dbpassword ? process.env.dbpassword : "",
      database: process.env.dbname ? process.env.dbname : "comicsdb",
      port: process.env.dbport ? parseInt(process.env.dbport) : 3306
    });

    const [result] = await conexao.query('SELECT * FROM comics');
    await conexao.end();
    res.send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send('Erro do servidor');
  }
});

// INICIAR O SERVIDOR
app.listen(8000, () => {
  console.log('SERVIDOR INICIADO NA PORTA 8000');
});
