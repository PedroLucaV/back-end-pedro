--Para atualizar uma tabela, usamos o UPDATE
UPDATE usuarios SET nome = "Nome de Teste" --Assim mudaremos todos os dados de nome, dessa forma tudo será modificado, para evitar isso usamos sempre o WHERE
UPDATE usuarios SET nome = "Pedro Lucas" WHERE idade = 8;
UPDATE usuarios SET nome = "Jose Carlos" WHERE idade = 21;
UPDATE usuarios SET nome = "Luana Beatriz" WHERE idade = 2;