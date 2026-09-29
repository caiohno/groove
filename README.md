# Groove 🎵

O **Groove** é uma loja virtual de discos de vinil desenvolvida para a P1 da disciplina de Desenvolvimento Web da FATEC.

O projeto simula uma experiência de compra completa: explorar o catálogo, ouvir prévias das músicas, pesquisar discos, adicionar produtos à cesta e finalizar pedidos.

## Tecnologias utilizadas

- Angular 21
- TypeScript
- HTML
- CSS
- Bootstrap 5
- LocalStorage

## Funcionalidades

- Catálogo com 20 discos de vinil
- Capas, informações e preços dos álbuns
- Prévia de áudio dos discos
- Busca por álbum, artista ou gênero
- Página de detalhes do produto
- Produtos em destaque
- Página de promoções
- Cesta de compras com controle de quantidade
- Validação de estoque
- Persistência da cesta no LocalStorage
- Cadastro e login simulados
- Recuperação de senha simulada
- Finalização e histórico de pedidos
- Layout responsivo para celular, tablet e computador

## Como executar

Primeiro, instale as dependências:

```bash
npm install
```

Depois, inicie o projeto:

```bash
npm start
```

Acesse no navegador:

```
http://localhost:4200
```

> No Windows, também é possível abrir o arquivo `INICIAR-GROOVE.cmd` depois de instalar as dependências.

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos gerados ficarão na pasta `dist`.

## Estrutura principal

```
src/app/
├── barra-busca/
├── cadastro/
├── cesta/
├── detalhe/
├── lista-pedidos/
├── login/
├── model/
├── pedido/
├── reenvio/
├── resultado-busca/
├── service/
└── vitrine/
```

## Armazenamento

Como o projeto não possui backend, os dados são armazenados no **LocalStorage** do navegador.

São armazenados localmente:

- cadastro do cliente;
- cliente autenticado;
- produtos adicionados à cesta;
- quantidade dos produtos;
- pedidos finalizados;
- termo pesquisado.

> Por ser uma aplicação acadêmica, o pagamento, o envio de pedidos e a recuperação de senha são apenas simulações.

## Validações realizadas

O projeto foi verificado nas seguintes larguras:

| Largura | Dispositivo |
|---------|-------------|
| 375px   | Celular     |
| 768px   | Tablet      |
| 1280px  | Computador  |

Também foram testados:

- cadastro e login;
- mensagens de validação;
- pesquisa com e sem acentos;
- adição e remoção de produtos;
- alteração de quantidades;
- limite de estoque;
- persistência da cesta;
- finalização de pedidos;
- reprodução das prévias de áudio.

## Observações

- Os preços e estoques apresentados são fictícios e utilizados somente para fins acadêmicos.
- As capas dos discos e as prévias musicais pertencem aos seus respectivos titulares. Os arquivos são utilizados apenas para demonstrar o funcionamento do projeto.
