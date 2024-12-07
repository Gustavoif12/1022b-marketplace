CREATE DATABASE defaultdb;
USE defaultdb;

CREATE TABLE IF NOT EXISTS comics (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50),
  autor VARCHAR(200),
  ano_de_publicacao INT,
  editora VARCHAR(50),
  sinopse VARCHAR(1000),
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
(1, 'Watchmen', 'Alan Moore, Dave Gibbons', 2024, 'Panini', 'Em um mundo alternativo onde a mera presença de super-heróis americanos mudou a história, os EUA venceram a Guerra do Vietnã, Nixon ainda é presidente e a Guerra Fria está em pleno andamento. Considerado a maior graphic novel da história do gênero, WATCHMEN começa como um mistério de assassinato, mas logo se desenrola em uma conspiração que altera o planeta. Um grupo de heróis reunidos — Rorschach, Coruja, Silk Spectre, Dr. Manhattan e Ozymandias — deve testar os limites de suas convicções e questionar onde está a verdadeira linha entre o bem e o mal', 79.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_ti0um7p3292arbv3ogb40r3b0n/-S897-FWEBP'),
(2, 'Batman: Silêncio', 'Jeph Loeb, Jim Lee, Scott Williams', 2025, 'Panini', 'Os piores criminosos de Gotham City parecem decididos a perturbar a vida de Batman. Mas seus ataques repetidos fazem, na verdade, parte de um plano diabólico arquitetado por uma figura misteriosa: Silêncio, um inimigo aparentemente muito próximo de Bruce Wayne e determinado a destruir o Cavaleiro das Trevas de uma vez por todas. Empurrado além de todos os seus limites físicos e psicológicos, Batman é desafiado a usar todas as habilidades que o tornaram o maior detetive do mundo', 69.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_ei0s1dl1sl15d0327nn8h27b2v/-S897-FWEBP'),
(3, 'Reino Do Amanhã', 'Alex Ross, Mark Waid', 2024, 'Panini', 'Em um futuro não muito distante, a Terra se tornou o reino dos super-heróis. Infelizmente para os habitantes não tão poderosos do planeta, esses “heróis” vêm se tornando cada vez mais irresponsáveis e destrutivos, colocando em risco a sobrevivência do mundo inteiro. E para piorar a situação, o único que pode devolver o bom-senso a essa raça de novas e irascíveis divindades, o envelhecido Superman, se aposentou e está recolhido há anos', 49.90, 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_364u1iskfh0gd93ve1imdfnr5m/-S897-FWEBP');

INSERT INTO reservas VALUES
(1, 'Guilherme Viana', 'Watchmen', 'Cartão de crédito', '2024-11-25'),
(2, 'Gustavo Silva', 'Batman: Silêncio', 'PIX', '2024-11-26'),
(3, 'João Caetano', 'Reino Do Amanhã', 'Boleto', '2024-11-28');
