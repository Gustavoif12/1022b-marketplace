USE defaultdb;

CREATE TABLE IF NOT EXISTS comics (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50),
  autor VARCHAR(200),
  ano_de_publicacao INT,
  editora VARCHAR(50),
  sinopse VARCHAR(500),
  preco DECIMAL(10, 2),
  imagem VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS reservas (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  nome_comprador VARCHAR(50),
  titulo_comic VARCHAR(50),
  forma_pagamento VARCHAR(50),
  data_reserva VARCHAR(50)
);

INSERT INTO comics VALUES
(1, 'Batman: Veneno', "Denny O'Neil, Russell Braun e Trevor Von Eeden", 2025, 'DC Panini Comics', 'Depois que o Batman fracassa ao tentar salvar uma jovem, ele acaba se tornando viciado na perigosa substância conhecida como Veneno, e sua vida inteira sai totalmente de controle', 69.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_5h18p4fuu55ajfbchqt49tjb3a/-S897-FWEBP'),
(2, 'Asa Noturna', 'Bruno Redondo, Neil Edwards, Rick Leonardi e Tom Taylor', 2024, 'DC Panini Comics', 'Asa Noturna está de volta, e sua vontade de manter Blüdhaven segura nunca foi tão forte! Mas sua cidade adotiva elegeu um novo prefeito com o sobrenome Zucco, o nome do assassino de seus pais', 44.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_sd73mkbmap1b7dr266ir7hrb04/-S897-FWEBP'),
(3, 'Lanterna Verde', 'Jeremy Adams, Montos, Phillip Kennedy Johnson e Xermanico', 2024, 'DC Panini Comics', 'Incapaz de deixar a atmosfera, o Lanterna Verde procura ajuda de uma fonte mística, que o leva a um portal misterioso e a desvendar respostas surpreendentes sobre a origem do anel de Hal', 19.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_7dk3h18ef55s7448pd8l1hc10n/-S897-FWEBP');

INSERT INTO reservas VALUES
(1, 'Gustavo Silva', 'Batman: Veneno', 'Cartão de crédito', '2024-11-25');
