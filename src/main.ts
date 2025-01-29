import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import BancoMysql from './db/bancoMysql';

const app = express();

app.use(express.json());
app.use(cors());

// ROTA PARA CADASTRAR UMA COMIC
app.post("/comics", async (req, res) => {
    try {
        const { id, titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem } = req.body;
        console.log(id, titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem);

        const banco = new BancoMysql();
        const comic = { id: parseInt(id), titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem };

        const result = await banco.inserirComic(comic);
        console.log(result);

        await banco.end();

        res.status(201).send({ message: 'Comic cadastrada com sucesso!' });
    } catch (e) {
        console.error(e);
        res.status(500).send('Erro do servidor');
    }
});

// ROTA PARA LISTAR TODAS AS COMICS
app.get("/comics", async (req, res) => {
    try {
        const banco = new BancoMysql();
        const result = await banco.listarComic();
        console.log(result);

        await banco.end();
        res.send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA LISTAR UMA COMIC PELO ID
app.get("/comics/:id", async (req, res) => {
    try {
        const banco = new BancoMysql();
        const result = await banco.listarComicPorId(req.params.id);
        console.log(result);

        await banco.end();
        res.send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA ATUALIZAR UMA COMIC
app.put("/comics/:id", async (req, res) => {
    console.log("Tentando alterar comic de id:", req.params.id);
    try {
        const { titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem } = req.body;
        const comic = { titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem };

        const banco = new BancoMysql();
        const result = await banco.alterarComic(req.params.id, comic);

        res.status(200).send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA DELETAR UMA COMIC
app.delete("/comics/:id", async (req, res) => {
    console.log("Tentando excluir comic de id:", req.params.id);
    try {
        const banco = new BancoMysql();
        const result = await banco.excluirComic(req.params.id);

        res.status(200).send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA CADASTRAR UMA RESERVA
app.post("/reservas", async (req, res) => {
    try {
        const { id, nome_comprador, titulo_comic, forma_pagamento, data_reserva } = req.body;
        console.log(id, nome_comprador, titulo_comic, forma_pagamento, data_reserva);

        const banco = new BancoMysql();
        const reserva = { id: parseInt(id), nome_comprador, titulo_comic, forma_pagamento, data_reserva };

        const result = await banco.inserirReserva(reserva);
        console.log(result);

        await banco.end();

        res.status(201).send({ message: 'Reserva cadastrada com sucesso!' });
    } catch (e) {
        console.error(e);
        res.status(500).send('Erro do servidor');
    }
});

// ROTA PARA LISTAR TODAS AS RESERVAS
app.get("/reservas", async (req, res) => {
    try {
        const banco = new BancoMysql();
        const result = await banco.listarReserva();
        console.log(result);

        await banco.end();
        res.send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA LISTAR UMA RESERVA PELO ID
app.get("/reservas/:id", async (req, res) => {
    try {
        const banco = new BancoMysql();
        const result = await banco.listarReservaPorId(req.params.id);
        console.log(result);

        await banco.end();
        res.send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA ATUALIZAR UMA RESERVA
app.put("/reservas/:id", async (req, res) => {
    console.log("Tentando alterar reserva de id:", req.params.id);
    try {
        const { nome_comprador, titulo_comic, forma_pagamento, data_reserva } = req.body;
        const reserva = { nome_comprador, titulo_comic, forma_pagamento, data_reserva };

        const banco = new BancoMysql();
        const result = await banco.alterarReserva(req.params.id, reserva);

        res.status(200).send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// ROTA PARA DELETAR UMA RESERVA
app.delete("/reservas/:id", async (req, res) => {
    console.log("Tentando excluir reserva de id:", req.params.id);
    try {
        const banco = new BancoMysql();
        const result = await banco.excluirReserva(req.params.id);

        res.status(200).send(result);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro do servidor");
    }
});

// INICIAR O SERVIDOR
app.listen(8000, () => {
    console.log('SERVIDOR INICIADO NA PORTA 8000');
});
