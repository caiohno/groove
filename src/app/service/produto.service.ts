import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  lista: Produto[] = [
  {
    "codigo": 1,
    "nome": "The Dark Side of the Moon - Pink Floyd",
    "descritivo": "Rock progressivo, atmosferas imersivas e uma viagem para ouvir do começo ao fim.",
    "keywords": "rock progressivo psicodélico, Pink Floyd, vinil",
    "valor": 159.9,
    "valorPromo": 0,
    "quantidade": 18,
    "destaque": 1
  },
  {
    "codigo": 2,
    "nome": "Abbey Road - The Beatles",
    "descritivo": "Harmonias e melodias que fazem deste disco uma parada obrigatória na coleção.",
    "keywords": "rock pop britânico, The Beatles, vinil",
    "valor": 189.9,
    "valorPromo": 0,
    "quantidade": 12,
    "destaque": 0
  },
  {
    "codigo": 3,
    "nome": "Thriller - Michael Jackson",
    "descritivo": "Pop, soul e funk em um disco cheio de ritmo e faixas inesquecíveis.",
    "keywords": "pop soul funk, Michael Jackson, vinil",
    "valor": 179.9,
    "valorPromo": 149.9,
    "quantidade": 0,
    "destaque": 0
  },
  {
    "codigo": 4,
    "nome": "Nevermind - Nirvana",
    "descritivo": "Guitarras intensas e a energia do grunge em um clássico do rock alternativo.",
    "keywords": "rock grunge alternativo, Nirvana, vinil",
    "valor": 169.9,
    "valorPromo": 139.9,
    "quantidade": 0,
    "destaque": 0
  },
  {
    "codigo": 5,
    "nome": "Rumours - Fleetwood Mac",
    "descritivo": "Rock melódico, harmonias delicadas e emoções à flor da pele em cada lado.",
    "keywords": "rock pop soft rock, Fleetwood Mac, vinil",
    "valor": 179.9,
    "valorPromo": 149.9,
    "quantidade": 15,
    "destaque": 0
  },
  {
    "codigo": 6,
    "nome": "Kind of Blue - Miles Davis",
    "descritivo": "Jazz para desacelerar: melodias livres e o timbre marcante do trompete de Miles Davis.",
    "keywords": "jazz instrumental, Miles Davis, vinil",
    "valor": 199.9,
    "valorPromo": 169.9,
    "quantidade": 10,
    "destaque": 1
  },
  {
    "codigo": 7,
    "nome": "Purple Rain - Prince",
    "descritivo": "Guitarras, sintetizadores e soul na mistura eletrizante de Prince.",
    "keywords": "pop rock funk soul, Prince, vinil",
    "valor": 189.9,
    "valorPromo": 0,
    "quantidade": 16,
    "destaque": 0
  },
  {
    "codigo": 8,
    "nome": "A Night at the Opera - Queen",
    "descritivo": "Rock teatral, arranjos ousados e a voz inconfundível de Freddie Mercury.",
    "keywords": "rock clássico hard rock, Queen, vinil",
    "valor": 189.9,
    "valorPromo": 159.9,
    "quantidade": 20,
    "destaque": 0
  },
  {
    "codigo": 9,
    "nome": "The Miseducation of Lauryn Hill - Lauryn Hill",
    "descritivo": "Soul, R&B e hip-hop se encontram nas rimas e na voz envolvente de Lauryn Hill.",
    "keywords": "hip hop rap soul r&b, Lauryn Hill, vinil",
    "valor": 219.9,
    "valorPromo": 189.9,
    "quantidade": 12,
    "destaque": 1
  },
  {
    "codigo": 10,
    "nome": "Clube da Esquina - Milton Nascimento & Lô Borges",
    "descritivo": "A riqueza da música brasileira em melodias, harmonias e encontros que atravessam gerações.",
    "keywords": "mpb música brasileira brasil, Milton Nascimento & Lô Borges, vinil",
    "valor": 179.9,
    "valorPromo": 0,
    "quantidade": 18,
    "destaque": 0
  },
  {
    "codigo": 11,
    "nome": "Legião Urbana - Legião Urbana",
    "descritivo": "Guitarras e letras diretas na estreia que traduz a força do rock brasileiro.",
    "keywords": "rock nacional brasil punk, Legião Urbana, vinil",
    "valor": 139.9,
    "valorPromo": 119.9,
    "quantidade": 22,
    "destaque": 0
  },
  {
    "codigo": 12,
    "nome": "Raimundos - Raimundos",
    "descritivo": "Peso, velocidade e influências nordestinas na mistura irreverente dos Raimundos.",
    "keywords": "rock nacional punk hardcore brasil, Raimundos, vinil",
    "valor": 149.9,
    "valorPromo": 129.9,
    "quantidade": 14,
    "destaque": 0
  },
  {
    "codigo": 13,
    "nome": "Sobrevivendo no Inferno - Racionais MC's",
    "descritivo": "Narrativas contundentes e batidas marcantes em um disco essencial do rap brasileiro.",
    "keywords": "rap hip hop nacional brasil, Racionais MC's, vinil",
    "valor": 199.9,
    "valorPromo": 0,
    "quantidade": 20,
    "destaque": 0
  },
  {
    "codigo": 14,
    "nome": "Discovery - Daft Punk",
    "descritivo": "Batidas eletrônicas, disco e melodias luminosas para colocar a agulha e dançar.",
    "keywords": "eletrônica house disco dance, Daft Punk, vinil",
    "valor": 219.9,
    "valorPromo": 189.9,
    "quantidade": 17,
    "destaque": 0
  },
  {
    "codigo": 15,
    "nome": "Back in Black - AC/DC",
    "descritivo": "Riffs poderosos e hard rock sem rodeios para ouvir com o volume lá em cima.",
    "keywords": "rock hard rock, AC/DC, vinil",
    "valor": 169.9,
    "valorPromo": 139.9,
    "quantidade": 25,
    "destaque": 0
  },
  {
    "codigo": 16,
    "nome": "The Chronic - Dr. Dre",
    "descritivo": "Batidas de G-funk e rimas da Costa Oeste em um marco do hip-hop.",
    "keywords": "rap hip hop g-funk, Dr. Dre, vinil",
    "valor": 199.9,
    "valorPromo": 169.9,
    "quantidade": 15,
    "destaque": 0
  },
  {
    "codigo": 17,
    "nome": "Elvis Presley - Elvis Presley",
    "descritivo": "A energia do rock and roll e a voz de Elvis em seu álbum de estreia.",
    "keywords": "rock and roll rockabilly, Elvis Presley, vinil",
    "valor": 139.9,
    "valorPromo": 119.9,
    "quantidade": 24,
    "destaque": 0
  },
  {
    "codigo": 18,
    "nome": "Back to Black - Amy Winehouse",
    "descritivo": "Soul de inspiração retrô e a voz singular de Amy em canções cheias de sentimento.",
    "keywords": "soul jazz r&b, Amy Winehouse, vinil",
    "valor": 179.9,
    "valorPromo": 149.9,
    "quantidade": 18,
    "destaque": 1
  },
  {
    "codigo": 19,
    "nome": "Lemonade - Beyoncé",
    "descritivo": "R&B, pop e diferentes sonoridades em um álbum intenso sobre afeto e transformação.",
    "keywords": "pop r&b soul, Beyoncé, vinil",
    "valor": 239.9,
    "valorPromo": 199.9,
    "quantidade": 10,
    "destaque": 0
  },
  {
    "codigo": 20,
    "nome": "Spice - Spice Girls",
    "descritivo": "Pop contagiante e a energia das Spice Girls para cantar junto a cada faixa.",
    "keywords": "pop dance girl power, Spice Girls, vinil",
    "valor": 169.9,
    "valorPromo": 139.9,
    "quantidade": 12,
    "destaque": 0
  }
];
  readonly previas: Record<number, { faixa: string; url: string }> = {
  "1": {
    "faixa": "Money",
    "url": "https://www.deezer.com/track/116914026"
  },
  "2": {
    "faixa": "Come Together (Remastered 2009)",
    "url": "https://www.deezer.com/track/116348452"
  },
  "3": {
    "faixa": "Thriller",
    "url": "https://www.deezer.com/track/831319"
  },
  "4": {
    "faixa": "Smells Like Teen Spirit",
    "url": "https://www.deezer.com/track/13791930"
  },
  "5": {
    "faixa": "Dreams (2004 Remaster)",
    "url": "https://www.deezer.com/track/63480987"
  },
  "6": {
    "faixa": "So What (feat. John Coltrane, Cannonball Adderley & Bill Evans)",
    "url": "https://www.deezer.com/track/15599529"
  },
  "7": {
    "faixa": "Purple Rain",
    "url": "https://www.deezer.com/track/2806039702"
  },
  "8": {
    "faixa": "Bohemian Rhapsody",
    "url": "https://www.deezer.com/track/4091937401"
  },
  "9": {
    "faixa": "Doo Wop (That Thing)",
    "url": "https://www.deezer.com/track/400418902"
  },
  "10": {
    "faixa": "Tudo O Que Você Podia Ser",
    "url": "https://www.deezer.com/track/716531362"
  },
  "11": {
    "faixa": "Será",
    "url": "https://www.deezer.com/track/3530731"
  },
  "12": {
    "faixa": "Selim",
    "url": "https://www.deezer.com/track/80134952"
  },
  "13": {
    "faixa": "Jorge da Capadócia",
    "url": "https://www.deezer.com/track/140639829"
  },
  "14": {
    "faixa": "One More Time",
    "url": "https://www.deezer.com/track/3135553"
  },
  "15": {
    "faixa": "Back In Black",
    "url": "https://www.deezer.com/track/92720046"
  },
  "16": {
    "faixa": "Nuthin' But A \"G\" Thang",
    "url": "https://www.deezer.com/track/2132919007"
  },
  "17": {
    "faixa": "Blue Suede Shoes",
    "url": "https://www.deezer.com/track/69070922"
  },
  "18": {
    "faixa": "Back To Black",
    "url": "https://www.deezer.com/track/2176856"
  },
  "19": {
    "faixa": "Formation",
    "url": "https://www.deezer.com/track/669486732"
  },
  "20": {
    "faixa": "Wannabe",
    "url": "https://www.deezer.com/track/3133738"
  }
};

  calcularDesconto(valor: number, valorPromo: number): number {
    return valor > 0 && valorPromo > 0 && valorPromo < valor
      ? Math.round((1 - valorPromo / valor) * 100) : 0;
  }

  formatar(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  titulo(produto: Produto): string { return produto.nome.split(' - ')[0]; }
  artista(produto: Produto): string { return produto.nome.split(' - ').slice(1).join(' - '); }
}
