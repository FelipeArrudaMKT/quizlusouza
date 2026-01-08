
import { Question } from './types';

export const QUESTIONS: Question[] = [
  // 1-15: Quiz Principal
  {
    id: 1,
    text: "Você sente que o seu esforço no trabalho atual não combina com o saldo da sua conta bancária?",
    category: 'pain',
    imageHint: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, trabalho muito e ganho pouco", weight: 3 },
      { id: 'b', text: "O dinheiro acaba antes do mês", weight: 2 },
      { id: 'c', text: "Queria uma renda extra urgente", weight: 1 }
    ]
  },
  {
    id: 2,
    text: "Qual é o seu maior medo ao tentar fazer uma receita nova de salgado?",
    category: 'pain',
    imageHint: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Perder ingredientes e dinheiro", weight: 3 },
      { id: 'b', text: "Ficar ruim e ninguém querer comprar", weight: 2 },
      { id: 'c', text: "A massa ficar pesada ou encharcada", weight: 3 }
    ]
  },
  {
    id: 3,
    text: "Você já teve que dizer 'no' para um desejo de um filho por falta de dinheiro?",
    category: 'pain',
    imageHint: "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Infelizmente sim, dói muito", weight: 3 },
      { id: 'b', text: "Acontece às vezes", weight: 2 },
      { id: 'c', text: "Faço de tudo para não acontecer", weight: 1 }
    ]
  },
  {
    id: 4,
    text: "Como seria sua vida se você pudesse trabalhar em casa, cuidando da sua família?",
    category: 'opportunity',
    imageHint: "https://i.ibb.co/FLzgk7ZV/106ac400616368d83010a78715690749-tplv-tiktokx-cropcenter-1080-1080.jpg",
    options: [
      { id: 'a', text: "Seria um sonho realizado", weight: 2 },
      { id: 'b', text: "Traria muita paz e segurança", weight: 1 },
      { id: 'c', text: "É tudo o que eu mais quero", weight: 3 }
    ]
  },
  {
    id: 5,
    text: "Você acredita que cozinhar pode ser o seu caminho para a liberdade financeira?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, eu amo cozinhar!", weight: 1 },
      { id: 'b', text: "Sim, se eu tiver o método certo", weight: 2 },
      { id: 'c', text: "Acredito que sim, é lucrativo", weight: 1 }
    ]
  },
  {
    id: 6,
    text: "Qual desses salgados você acha mais difícil de acertar o ponto?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Coxinha (fechamento perfeito)", weight: 1 },
      { id: 'b', text: "Kibe (não desmanchar no óleo)", weight: 1 },
      { id: 'c', text: "Empada (massa que derrete)", weight: 1 }
    ]
  },
  {
    id: 7,
    text: "O que você faria com seus primeiros R$ 1.000 de lucro extra?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Pagaria contas atrasadas", weight: 2 },
      { id: 'b', text: "Compraria algo para minha casa", weight: 1 },
      { id: 'c', text: "Reinvestiria para ganhar mais", weight: 1 }
    ]
  },
  {
    id: 8,
    text: "Você tem vergonha de oferecer seus produtos para as pessoas?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, morro de vergonha", weight: 3 },
      { id: 'b', text: "Um pouco, mas eu tento", weight: 2 },
      { id: 'c', text: "Não, se o produto for bom eu vendo", weight: 1 }
    ]
  },
  {
    id: 9,
    text: "Você sabia que a maioria das pessoas desiste por não ter uma massa base econômica?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Faz todo sentido, o lucro some", weight: 2 },
      { id: 'b', text: "Não sabia, quero aprender a economizar", weight: 3 },
      { id: 'c', text: "Quero uma massa barata e boa", weight: 1 }
    ]
  },
  {
    id: 10,
    text: "Qual é a sua maior motivação para começar hoje?",
    category: 'opportunity',
    imageHint: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Meus filhos e minha família", weight: 3 },
      { id: 'b', text: "Minha independência financeira", weight: 2 },
      { id: 'c', text: "Sair de um emprego que odeio", weight: 3 }
    ]
  },
  {
    id: 11,
    text: "Você gostaria de aprender a divulgar seus salgados no Instagram e WhatsApp?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, não sei como começar", weight: 1 },
      { id: 'b', text: "Com certeza, as vendas estão lá", weight: 2 },
      { id: 'c', text: "Sim, quero atrair clientes novos", weight: 1 }
    ]
  },
  {
    id: 12,
    text: "Ter o apoio de uma comunidade de mulheres que fazem o mesmo que você te ajudaria?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, juntas somos mais fortes", weight: 1 },
      { id: 'b', text: "Sim, para tirar dúvidas", weight: 1 },
      { id: 'c', text: "Com certeza, motiva muito", weight: 1 }
    ]
  },
  {
    id: 13,
    text: "Você prefere aprender por vídeos rápidos ou livros de receitas?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Vídeos, é muito mais fácil de ver", weight: 1 },
      { id: 'b', text: "Ambos seriam perfeitos", weight: 1 },
      { id: 'c', text: "Quero ver a mão na massa", weight: 2 }
    ]
  },
  {
    id: 14,
    text: "Quanto você estaria disposta a investir para ter um negócio que rende R$ 2 mil mensais?",
    category: 'qualification',
    imageHint: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Qualquer valor justo e acessível", weight: 3 },
      { id: 'b', text: "O que for necessário para mudar", weight: 2 },
      { id: 'c', text: "Preciso de um valor promocional", weight: 3 }
    ]
  },
  {
    id: 15,
    text: "Você promete que, se tiver o passo a passo, vai começar ainda essa semana?",
    category: 'qualification',
    imageHint: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, eu prometo!", weight: 3 },
      { id: 'b', text: "Vou fazer de tudo para começar", weight: 2 },
      { id: 'c', text: "Sim, chega de adiar!", weight: 3 }
    ]
  },
  // 16-19: Mini-Quiz Upsell (Receitas Secretas)
  {
    id: 16,
    text: "Você sabia que a Lu tem um tempero 'secreto' que faz o cliente viciar no primeiro mordida?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Quero muito descobrir qual é!", weight: 1 },
      { id: 'b', text: "Isso é o que diferencia o sucesso", weight: 1 },
      { id: 'c', text: "Salgado sem tempero não vende", weight: 1 }
    ]
  },
  {
    id: 17, // 2nd of mini-quiz
    text: "Você gostaria de ter em mãos as receitas que os buffets famosos tentam esconder?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, para ser a melhor da região", weight: 1 },
      { id: 'b', text: "Exclusividade gera mais lucro", weight: 1 },
      { id: 'c', text: "Com certeza, quero ser referência", weight: 1 }
    ]
  },
  {
    id: 18,
    text: "O que você acha de aprender recheios gourmet que permitem cobrar o dobro do preço?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Seria incrível para meu lucro", weight: 1 },
      { id: 'b', text: "Quero aprender a valorizar meu trabalho", weight: 1 },
      { id: 'c', text: "Público gourmet paga mais feliz", weight: 1 }
    ]
  },
  {
    id: 19, // 4th of mini-quiz
    text: "Você está preparada para o volume de pedidos que essas receitas exclusivas vão gerar?",
    category: 'exclusivity',
    imageHint: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop",
    options: [
      { id: 'a', text: "Sim, estou pronta para o sucesso!", weight: 1 },
      { id: 'b', text: "Minha cozinha vai ferver!", weight: 1 },
      { id: 'c', text: "É por isso que estou aqui", weight: 1 }
    ]
  }
];
