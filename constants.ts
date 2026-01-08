
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Trabalho atual paga o que você merece?",
    category: 'pain',
    imageHint: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400",
    options: [
      { id: 'a', text: "Não, me sinto desvalorizada e muito cansada no fim do dia.", weight: 3 },
      { id: 'b', text: "Sinto que trabalho muito e o dinheiro nunca é suficiente.", weight: 2 },
      { id: 'c', text: "Não, preciso de uma fonte de renda que pague o que eu valho.", weight: 3 }
    ]
  },
  {
    id: 2,
    text: "Maior medo ao cozinhar algo novo?",
    category: 'pain',
    imageHint: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
    options: [
      { id: 'a', text: "Gastar o pouco que tenho em ingredientes e a receita dar errado.", weight: 3 },
      { id: 'b', text: "O salgado ficar ruim e as pessoas criticarem meu trabalho.", weight: 2 },
      { id: 'c', text: "Não acertar o ponto da massa e ela ficar pesada ou encharcada.", weight: 3 }
    ]
  },
  {
    id: 3,
    text: "Já disse 'no' por falta de dinheiro?",
    category: 'pain',
    imageHint: "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?w=400",
    options: [
      { id: 'a', text: "Infelizmente sim, dói o coração não poder dar o que eles pedem.", weight: 3 },
      { id: 'b', text: "Já aconteceu algumas vezes e me sinto muito mal com isso.", weight: 2 },
      { id: 'c', text: "Faço de tudo para não acontecer, mas o dinheiro anda bem curto.", weight: 1 }
    ]
  },
  {
    id: 4,
    text: "Trabalhar em casa cuidando da família?",
    category: 'opportunity',
    imageHint: "https://i.ibb.co/FLzgk7ZV/106ac400616368d83010a78715690749-tplv-tiktokx-cropcenter-1080-1080.jpg",
    options: [
      { id: 'a', text: "Seria a paz que eu tanto procuro: trabalhar perto de quem eu amo.", weight: 3 },
      { id: 'b', text: "Seria um sonho ter liberdade e não ter mais nenhum patrão.", weight: 2 },
      { id: 'c', text: "Seria perfeito para economizar tempo e cuidar melhor da casa.", weight: 1 }
    ]
  },
  {
    id: 5,
    text: "Cozinhar é seu caminho para liberdade?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400",
    options: [
      { id: 'a', text: "Tenho certeza! Cozinhar é o dom que vai mudar minha vida.", weight: 3 },
      { id: 'b', text: "Se eu tiver o método certo, acredito que consigo chegar lá.", weight: 2 },
      { id: 'c', text: "Sim, vejo muitas mulheres lucrando e eu também quero.", weight: 1 }
    ]
  },
  {
    id: 6,
    text: "Qual salgado é mais difícil?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=400",
    options: [
      { id: 'a', text: "A coxinha! Morro de medo dela abrir ou ficar feia no prato.", weight: 1 },
      { id: 'b', text: "O kibe, tenho muita dificuldade em deixar ele sequinho.", weight: 1 },
      { id: 'c', text: "A empada, quero que ela derreta na boca e conquiste o cliente.", weight: 1 }
    ]
  },
  {
    id: 7,
    text: "O que faria com R$ 1.000 de lucro?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
    options: [
      { id: 'a', text: "Compraria algo especial para meus filhos e para minha casa.", weight: 2 },
      { id: 'b', text: "Pagaria as contas atrasadas que estão tirando o meu sono.", weight: 3 },
      { id: 'c', text: "Reinvestiria tudo para dobrar esse valor o mais rápido possível.", weight: 1 }
    ]
  },
  {
    id: 8,
    text: "Vergonha de oferecer produtos?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400",
    options: [
      { id: 'a', text: "Morro de vergonha e medo do que os outros vão pensar de mim.", weight: 3 },
      { id: 'b', text: "Um pouco, mas se for para mudar de vida, eu enfrento o medo.", weight: 2 },
      { id: 'c', text: "Não, tendo um produto maravilhoso eu ofereço com orgulho.", weight: 1 }
    ]
  },
  {
    id: 9,
    text: "Sabia que massa barata é o segredo?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    options: [
      { id: 'a', text: "Não sabia! Agora entendo por que meu dinheiro nunca sobrava.", weight: 2 },
      { id: 'b', text: "Desconfiava, mas não sabia como fazer uma massa de baixo custo.", weight: 2 },
      { id: 'c', text: "Faz todo sentido, quero aprender a economizar sem perder qualidade.", weight: 3 }
    ]
  },
  {
    id: 10,
    text: "Sua maior motivação hoje?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400",
    options: [
      { id: 'a', text: "Dar um futuro digno e sem privações para meus filhos e família.", weight: 3 },
      { id: 'b', text: "Conquistar minha independência e ter meu próprio dinheiro.", weight: 2 },
      { id: 'c', text: "Sair do meu emprego atual para ser minha própria patroa.", weight: 2 }
    ]
  },
  {
    id: 11,
    text: "Quer vender pelo WhatsApp?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400",
    options: [
      { id: 'a', text: "Sim, quero que meu celular não pare de apitar com pedidos!", weight: 1 },
      { id: 'b', text: "Com certeza, sei que todo mundo compra pelo WhatsApp hoje.", weight: 2 },
      { id: 'c', text: "Sim, preciso urgente de um passo a passo para postar e vender.", weight: 1 }
    ]
  },
  {
    id: 12,
    text: "Apoio de comunidade ajuda?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
    options: [
      { id: 'a', text: "Sim, me sinto muito sozinha e preciso de incentivo para continuar.", weight: 1 },
      { id: 'b', text: "Sim, trocar experiências com outras mulheres ajuda muito.", weight: 1 },
      { id: 'c', text: "Com certeza, ter alguém para tirar dúvidas acelera o resultado.", weight: 1 }
    ]
  },
  {
    id: 13,
    text: "Prefere vídeo ou livro?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400",
    options: [
      { id: 'a', text: "Vídeos! Quero ver cada detalhe da mão na massa para não errar.", weight: 1 },
      { id: 'b', text: "Gosto de ambos, quanto mais informação eu tiver, melhor.", weight: 1 },
      { id: 'c', text: "Prefiro o passo a passo direto ao ponto para começar logo.", weight: 2 }
    ]
  },
  {
    id: 14,
    text: "Investiria para ganhar R$ 2 mil?",
    category: 'qualification',
    imageHint: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400",
    options: [
      { id: 'a', text: "Com certeza, é o preço da minha liberdade e da minha felicidade.", weight: 3 },
      { id: 'b', text: "Se o método for garantido e seguro, eu invisto sem medo.", weight: 2 },
      { id: 'c', text: "Sim, desde que o valor seja justo e caiba no meu bolso agora.", weight: 3 }
    ]
  },
  {
    id: 15,
    text: "Promete começar esta semana?",
    category: 'qualification',
    imageHint: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400",
    options: [
      { id: 'a', text: "Eu prometo! Chega de desculpas, vou mudar minha história hoje.", weight: 3 },
      { id: 'b', text: "Vou me esforçar ao máximo para colocar tudo em prática.", weight: 2 },
      { id: 'c', text: "Sim, só preciso do mapa certo para começar a produzir.", weight: 3 }
    ]
  },
  {
    id: 16,
    text: "Quer saber o tempero viciante?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400",
    options: [
      { id: 'a', text: "Meu Deus, é isso que falta para eu dominar as vendas na região!", weight: 1 },
      { id: 'b', text: "Com certeza, o sabor marcante é o que faz o cliente voltar.", weight: 1 },
      { id: 'c', text: "Sim, quero ter esse diferencial exclusivo no meu cardápio.", weight: 1 }
    ]
  },
  {
    id: 17,
    text: "Receitas que buffets escondem?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    options: [
      { id: 'a', text: "Seria meu maior trunfo para bater qualquer concorrência.", weight: 1 },
      { id: 'b', text: "Sim, exclusividade é o que permite cobrar mais caro.", weight: 1 },
      { id: 'c', text: "Quero aprender para entregar um produto de nível profissional.", weight: 1 }
    ]
  },
  {
    id: 18,
    text: "Recheios Gourmet valem o dobro?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400",
    options: [
      { id: 'a', text: "Seria maravilhoso trabalhar menos e ganhar muito mais por isso.", weight: 1 },
      { id: 'b', text: "Sim, valorizar o produto com recheios nobres é o segredo.", weight: 1 },
      { id: 'c', text: "Com certeza, o público gourmet paga o valor justo sem reclamar.", weight: 1 }
    ]
  },
  {
    id: 19,
    text: "Preparada para muitos pedidos?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
    options: [
      { id: 'a', text: "Sim, meu sonho é ver minha agenda lotada de encomendas!", weight: 1 },
      { id: 'b', text: "Estou me preparando para o sucesso que essas receitas trarão.", weight: 1 },
      { id: 'c', text: "Com certeza, estou aqui para trabalhar e lucrar de verdade.", weight: 1 }
    ]
  }
];
