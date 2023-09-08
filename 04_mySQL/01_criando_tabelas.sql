-- Para inciar uma tabela, usamos o comando CREATE TABLE e depois seu nome e abre parenteses, depois dentro dele irá se criar as colunas;
--Exemplo: A tabela usuarios, tem as colunas: nome, email e idade
--Para trabalhar com letras, geralmente usamos o VARCHAR() e definimos o número de caracteres máximos que queremos dentro das celulas das colunas, para criar outra usamos a virgula
--Já para a de idade, usaremos o tipo INT, de inteiro

CREATE TABLE usuarios(
    nome VARCHAR(25),
    email VARCHAR(100),
    idade INT
);

--Depois copiaremos a tabela e colocaremos no mysql cmd, dessa forma criamos ela, e usamos o comando DESCRIBE usuarios; para poder olhar oque há nela