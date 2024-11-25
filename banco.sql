USE comicsdb;

CREATE TABLE IF NOT EXISTS comics (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  autor VARCHAR(50),
  ano_de_publicacao INT,
  editora VARCHAR(50),
  sinopse VARCHAR(200),
  preco DECIMAL(10, 2),
  imagem VARCHAR(300)
);

INSERT INTO comics VALUES
(1, 'Homem-Aranha: De Volta ao Lar', 'Stan Lee', 2017, 'Marvel Comics', 'Peter Parker enfrenta novos desafios ao retornar para Nova York.', 49.90, 'https://exemplo.com/imagem-homem-aranha.jpg');
