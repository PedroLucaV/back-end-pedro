--Para inserir dados, usaremos o comando: INSERT INTO nome(dentro do parenteses você inserira onde você quer inserir esse dado), usando o VALUES(), colocaremos quais valores serão inseridos dentro daquelas colunas, estando na ordem **TUDO DO TIPO TEXTO DEVE SER POSTO ENTRE ASPAS**
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Luano Beatricio",
    "lulu@princesa.com",
    2
);

--Para listar esses dados, usaremos o comando SELECT (para listar os dados) * (seleciona todos os dados) FROM usuarios (lista todos os dados de usuarios)

--Mas caso eu queira consultar um especifico, usamos o WHERE (onde)
SELECT * FROM usuarios WHERE idade = 2;

SELECT * FROM usuarios WHERE nome = "Pedro Lucas";
--Tambem funciona para operadores comparacionais:
SELECT * FROM usuarios WHERE idade >= 18;