USE defaultdb;

CREATE TABLE IF NOT EXISTS produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);

INSERT INTO produtos VALUES
(1, 'Iphone', 'Celular RUIM', 5000.50, 'SEM IMAGEM'),
(2, 'Samsung', 'Celular BOM', 1900.50, 'SEM IMAGEM');

CREATE TABLE IF NOT EXISTS usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

INSERT INTO usuarios VALUES
(1, 'Guilherme Viana', 'guilherme.viana@gmail.com', '2024-10-21 10:30:00', '2024-10-21 10:30:00'),
(2, 'Gustavo Silva', 'gustavo.silva@gmail.com', '2024-10-21 10:33:00', '2024-10-21 10:33:00'),
(3, 'João Caetano', 'joao.caetano@gmail.com', '2024-10-21 10:37:00', '2024-10-21 10:37:00'),
(4, 'Vinicius Menezes', 'vinicius.menezes@gmail.com', '2024-10-21 10:40:00', '2024-10-21 10:40:00');
