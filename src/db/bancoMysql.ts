import mysql, { Connection, RowDataPacket } from 'mysql2/promise';

class BancoMysql {
  // Propriedade
  private conexao: Promise<Connection>;

  // Métodos
  constructor() {
    this.conexao = mysql.createConnection({
      host: process.env.dbhost ? process.env.dbhost : "localhost",
      user: process.env.dbuser ? process.env.dbuser : "root",
      password: process.env.dbpassword ? process.env.dbpassword : "",
      database: process.env.dbname ? process.env.dbname : "banco1022b",
      port: process.env.dbport ? parseInt(process.env.dbport) : 3306
    });
  }

  async getConnection() {
    const conn = await this.conexao;
    return conn;
  }

  async end() {
    const conn = await this.conexao;
    await conn.end();
  }

  // Métodos para Comics
  async listarComic() {
    const conn = await this.getConnection();
    const [result, fields] = await conn.query("SELECT * FROM comics");
    return result;
  }

  async inserirComic(comic: { id: number, titulo: string, autor: string, ano_de_publicacao: string, editora: string, sinopse: string, preco: string, imagem: string }) {
    const conn = await this.getConnection();
    const sqlQuery = "INSERT INTO comics (id, titulo, autor, ano_de_publicacao, editora, sinopse, preco, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const parametro = [comic.id, comic.titulo, comic.autor, comic.ano_de_publicacao, comic.editora, comic.sinopse, comic.preco, comic.imagem];
    const [result, fields] = await conn.query(sqlQuery, parametro);
    return result;
  }

  async excluirComic(id: string) {
    const conn = await this.getConnection();
    const sqlQuery = "DELETE FROM comics WHERE id = ?";
    const parametro = [id];
    const [result, fields] = await conn.query(sqlQuery, parametro);
    return result;
  }

  async alterarComic(id: string, comic: { titulo: string, autor: string, ano_de_publicacao: string, editora: string, sinopse: string, preco: string, imagem: string }) {
    const conn = await this.getConnection();
    const sqlQuery = "UPDATE comics SET titulo=?, autor=?, ano_de_publicacao=?, editora=?, sinopse=?, preco=?, imagem=? WHERE id = ?";
    const parametro = [comic.titulo, comic.autor, comic.ano_de_publicacao, comic.editora, comic.sinopse, comic.preco, comic.imagem, id];
    const [result, fields] = await conn.query(sqlQuery, parametro);
    return result;
  }

  async listarComicPorId(id: string) {
    const conn = await this.getConnection();
    const sqlQuery = "SELECT * FROM comics WHERE id = ?";
    const parametro = [id];
    const [result, fields] = await conn.query(sqlQuery, parametro) as RowDataPacket[];
    return result[0];
  }

  // Métodos para Reservas
  async listarReserva() {
    const conn = await this.getConnection();
    const [result, fields] = await conn.query("SELECT * FROM reservas");
    return result;
  }

  async inserirReserva(reserva: { id: number, nome_comprador: string, titulo_comic: string, forma_pagamento: string, data_reserva: string }) {
    const conn = await this.getConnection();
    const sqlQuery = "INSERT INTO reservas (id, nome_comprador, titulo_comic, forma_pagamento, data_reserva) VALUES (?, ?, ?, ?, ?)";
    const parametro = [reserva.id, reserva.nome_comprador, reserva.titulo_comic, reserva.forma_pagamento, reserva.data_reserva];
    const [result, fields] = await conn.query(sqlQuery, parametro);
    return result;
  }

  async excluirReserva(id: string) {
    const conn = await this.getConnection();
    const sqlQuery = "DELETE FROM reservas WHERE id = ?";
    const parametro = [id];
    const [result, fields] = await conn.query(sqlQuery, parametro);
    return result;
  }

  async alterarReserva(id: string, reserva: { nome_comprador: string, titulo_comic: string, forma_pagamento: string, data_reserva: string }) {
    const conn = await this.getConnection();
    const sqlQuery = "UPDATE reservas SET nome_comprador=?, titulo_comic=?, forma_pagamento=?, data_reserva=? WHERE id = ?";
    const parametro = [reserva.nome_comprador, reserva.titulo_comic, reserva.forma_pagamento, reserva.data_reserva, id];
    const [result, fields] = await conn.query(sqlQuery, parametro);
    return result;
  }

  async listarReservaPorId(id: string) {
    const conn = await this.getConnection();
    const sqlQuery = "SELECT * FROM reservas WHERE id = ?";
    const parametro = [id];
    const [result, fields] = await conn.query(sqlQuery, parametro) as RowDataPacket[];
    return result[0];
  }
}

export default BancoMysql;
