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
  data_reserva VARCHAR(50)
);

INSERT INTO comics VALUES
(1, 'Batman: Veneno', "Denny O'Neil, Russell Braun e Trevor Von Eeden", 2025, 'DC Comics', 'Depois que o Homem-Morcego fracassa ao tentar salvar uma jovem, ele acaba se tornando viciado na perigosa substância conhecida como Veneno, e sua vida inteira sai totalmente de controle!', 69.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_5h18p4fuu55ajfbchqt49tjb3a/-S897-FWEBP');

INSERT INTO reservas VALUES
(1, 'Gustavo Silva', 'Batman: Veneno', 'Cartão de crédito', '2024-11-25');
