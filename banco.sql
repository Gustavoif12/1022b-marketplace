USE defaultdb;

CREATE TABLE IF NOT EXISTS comics (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50),
  autor VARCHAR(50),
  ano_de_publicacao INT,
  editora VARCHAR(50),
  sinopse VARCHAR(200),
  preco DECIMAL(10, 2),
  imagem VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS reservas (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  nome_comprador VARCHAR(50),
  titulo_comic VARCHAR(50),
  forma_pagamento VARCHAR(50),
  data_reserva TIMESTAMP
);

INSERT INTO comics VALUES
(1, 'Homem-Aranha: De Volta ao Lar', 'Stan Lee', 2017, 'Marvel Comics', 'Peter Parker enfrenta novos desafios ao retornar para Nova York.', 49.90, 'https://exemplo.com/imagem-homem-aranha.jpg');

INSERT INTO reservas VALUES
(1, 'Vinicius Menezes', 'Homem-Aranha: De Volta ao Lar', 'Cartão de crédito');
