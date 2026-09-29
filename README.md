# Groove — discos que ficam

Frontend acadêmico em Angular 21, componentes standalone e Bootstrap 5.3.8.

## Abrir o projeto

Na pasta groove-projeto-teste, execute:

```sh
npm install
npm start
```

Abra http://localhost:4200. Na cópia original, as dependências já estão instaladas; basta `npm start`.
No Windows, você também pode abrir INICIAR-GROOVE.cmd após instalar as dependências.

## Gerar a versão final

```sh
npm run build
npm run serve:ssr:web02
```

A versão compilada abre em http://localhost:4000.

## O que foi finalizado

- Identidade roxa, tipografia Fraunces + Work Sans, logo vetorial, cabeçalho, busca, navegação e rodapé.
- Vitrine com banner, quatro discos em destaque, catálogo de 20 álbuns e 15 promoções.
- Catálogo de ferramentas substituído por discos: nomes, descrições, palavras-chave e preços demonstrativos.
- Capas reais em public/1.png até public/20.png, relacionadas aos mesmos códigos do catálogo.
- Prévias de aproximadamente 30 segundos em public/audio/1.mp3 até public/audio/20.mp3.
- Player de áudio nos detalhes, nome da faixa e link para ouvi-la no Deezer.
- Busca por título, artista e gênero, ignorando acentos; detalhes acessíveis por ?codigo=18.
- Cesta com contador, controle de quantidade, limite de estoque, persistência, resumo e finalização.
- Login, cadastro e recuperação simulada com a mesma identidade visual e mensagens condicionais.
- Método clienteLogado() incluído no serviço para corrigir a chamada já existente no cabeçalho.
- Bootstrap, fontes, capas e áudios locais: a apresentação não depende de carregar CDNs.
- Rotas, nomes de arquivos de componentes e campos dos modelos preservados.

## Demonstração

1. Abra a vitrine e clique na capa da Amy Winehouse.
2. Dê play na prévia e adicione o disco à cesta.
3. Altere a quantidade e recarregue: a cesta permanece salva.
4. Finalize o pedido e abra Meus pedidos.
5. Cadastre um usuário e entre com o mesmo e-mail e senha.
6. Busque "legiao" para demonstrar a busca sem acentos.

CPF: use o formato 123.456.789-09. Telefone: 99999-9999.
A senha exige oito caracteres, maiúscula, minúscula, número e um símbolo entre @$!%*?&.

## Validação

- `ng build`: concluído sem erros ou avisos, com 10 rotas pré-renderizadas.
- Navegador Chrome: vitrine, detalhe, cesta, busca, login, cadastro, reenvio e promoções em 375, 768 e 1280 pixels.
- Cadastro e login válidos/inválidos, busca vazia, estoque, preço promocional, persistência e pedidos verificados.
- As 20 imagens carregam e as 20 prévias MP3 foram decodificadas pelo navegador.
- Nenhum erro JavaScript nos fluxos verificados.

## Mídia e créditos

Capas e prévias musicais obtidas do catálogo público do Deezer em 29/09/2026. Cada código, álbum, faixa e fonte está documentado em public/media-creditos.json. As músicas completas não estão incluídas. Direitos das capas e gravações pertencem aos respectivos titulares.

Fontes: Google Fonts, licenças OFL incluídas em public/fonts. Bootstrap: licença MIT preservada no cabeçalho do arquivo.

Esta é uma loja demonstrativa para a P1: preços, estoque e contato são fictícios; não há cobrança, entrega ou envio de e-mail. O cadastro e a autenticação usam localStorage, conforme a arquitetura original, sem backend.

O projeto recebido não tinha capas de discos, pasta de áudio nem arquivo 21.png. Foram criados os recursos correspondentes aos 20 produtos, sem inventar um produto de código 21.
