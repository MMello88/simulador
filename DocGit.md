# Branche

## Criação de Brance

```sh
# git checkout -b nome-da-branche
```

Ao fazer o checkout de uma nova branche automaticamente o projeto já esta direcionando para esta branche.

> Nota: **# git status** vc pode verificar sua nova branche configurada

## Adicionar

Adicionar tudo de uma unica vez

```sh
# git add .
```

**ou**

Adicionar por arquivos selecionados

```sh
# git add -A -- /diretório/arquivo.text
```

## Commit

```sh
# git commit -m "msg"
```

### Nota

> Nota: Após realizar os commits na primeira vez que fizer o **# git push** para o repositório online deve-se criar esta brenche lá e trocar para receber nesta branche criada.

## Criando Branche Repositório online

Comando para mudar e criar a branche da sua origem

```sh
# git push --set-upstream origin correcoes-home
```