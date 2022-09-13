CREATE TABLE status_os (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO status_os (nome) values ('Em Andamento');
INSERT INTO status_os (nome) values ('Aguardando Material');
INSERT INTO status_os (nome) values ('Finalizada');


CREATE TABLE escola (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO escola (nome, email) values ('Escola Municipal Maria Suave dos Santos','mariasuave@gmail.com');
INSERT INTO escola (nome, email) values ('Centro Municipal de Educação Infantil Vila Mutirão','vilamultirao@gmail.com');
INSERT INTO escola (nome, email) values ('Escola Municipal Vinícius de Aquino Ramos','vilamultirao@gmail.com');

CREATE TABLE tecnico (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    ativo BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tecnico (nome, email, ativo) values ('Yago Neves','yago@gmail.com', true);
INSERT INTO tecnico (nome, email, ativo) values ('Ligia Christine','ligia@gmail.com', true);
INSERT INTO tecnico (nome, email, ativo) values ('Calil Dugue','calil@gmail.com', false);

CREATE TABLE ordemservico (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	assunto VARCHAR(100) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
	data_criacao DATE NOT NULL,
	data_resolucao DATE,
	observacao VARCHAR(500),
	codigo_status BIGINT(20) NOT NULL,
    codigo_escola BIGINT(20) NOT NULL,
	codigo_tecnico BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_status) REFERENCES status_os(codigo),
    FOREIGN KEY (codigo_escola) REFERENCES escola(codigo),
	FOREIGN KEY (codigo_tecnico) REFERENCES tecnico(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO ordemservico (assunto, descricao, data_criacao, data_resolucao, observacao, codigo_status, codigo_escola, codigo_tecnico)
 values ('Computador Secretaria', 'Computador nao liga e nao pega internet','2017-06-10', null, 'urgente invasao alienigena em breve', 1, 1, 2);
INSERT INTO ordemservico (assunto, descricao, data_criacao, data_resolucao, observacao, codigo_status, codigo_escola, codigo_tecnico)
 values ('Computador Coordenacao', 'Computador nao abre e nao pega office','2017-06-10', '2017-06-11', 'vir a tarde', 2, 3, 1);
 
 CREATE TABLE usuario (
	codigo BIGINT(20) PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissao (
	codigo BIGINT(20) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	codigo_usuario BIGINT(20) NOT NULL,
	codigo_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (codigo_usuario, codigo_permissao),
	FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo),
	FOREIGN KEY (codigo_permissao) REFERENCES permissao(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario (codigo, nome, email, senha) values (1, 'Administrador', 'admin@gmail.com', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');
INSERT INTO usuario (codigo, nome, email, senha) values (2, 'Maria Silva', 'maria@gmail.com', '$2a$10$Zc3w6HyuPOPXamaMhh.PQOXvDnEsadztbfi6/RyZWJDzimE8WQjaq');

INSERT INTO permissao (codigo, descricao) values (1, 'ROLE_CADASTRAR_STATUS');
INSERT INTO permissao (codigo, descricao) values (2, 'ROLE_PESQUISAR_STATUS');

INSERT INTO permissao (codigo, descricao) values (3, 'ROLE_CADASTRAR_TECNICO');
INSERT INTO permissao (codigo, descricao) values (4, 'ROLE_REMOVER_TECNICO');
INSERT INTO permissao (codigo, descricao) values (5, 'ROLE_PESQUISAR_TECNICO');

INSERT INTO permissao (codigo, descricao) values (6, 'ROLE_CADASTRAR_ESCOLA');
INSERT INTO permissao (codigo, descricao) values (7, 'ROLE_REMOVER_ESCOLA');
INSERT INTO permissao (codigo, descricao) values (8, 'ROLE_PESQUISAR_ESCOLA');

INSERT INTO permissao (codigo, descricao) values (9, 'ROLE_CADASTRAR_ORDEMSERVICO');
INSERT INTO permissao (codigo, descricao) values (10, 'ROLE_REMOVER_ORDEMSERVICO');
INSERT INTO permissao (codigo, descricao) values (11, 'ROLE_PESQUISAR_ORDEMSERVICO');

-- admin
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 4);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 6);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 7);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 8);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 9);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 10);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 11);

-- maria
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 8);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 11);

