USE defaultdb;

CREATE TABLE IF NOT EXISTS produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);

INSERT INTO produtos VALUES
(1, 'Iphone', 'Celular RUIM', 5000.50, 'SEM IMAGEM');

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

INSERT INTO usuarios VALUES
(1, 'Vinicius Menezes', 'vinicius.menezes@estudante.ifms.edu.br', '2024-10-21 10:30:00', '2024-10-21 10:30:00');

/*
Criamos a tabela `usuarios` seguindo um modelo similar
ao da tabela `produtos`, ajustando-a conforme as especificações
solicitadas e inserindo uma tupla usando `INSERT INTO`.
*/
