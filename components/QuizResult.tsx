
import React from 'react';
import ProfitCalculator from './ProfitCalculator';

interface QuizResultProps {
  score: number;
  isUpsellMode?: boolean;
  onContinueToUpsell?: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, isUpsellMode, onContinueToUpsell }) => {
  
  const getResultInfo = () => {
    if (score >= 40) {
      return {
        title: "🔥 VOCÊ TEM PERFIL DE MESTRA DE ELITE!",
        desc: "Os resultados do seu teste mostram que você tem a garra e o talento necessários para faturar alto."
      };
    }
    return {
      title: "🚀 O CAMINHO ESTÁ ABERTO PARA VOCÊ!",
      desc: "Você tem o desejo de mudança. Com o método correto, o sucesso financeiro na sua cozinha é inevitável."
    };
  };

  const result = getResultInfo();
  const CHECKOUT_LINK_PRINCIPAL = "https://pay.kirvano.com/63a28a47-b22b-43a7-afdf-9a9696d76c76";
  const CHECKOUT_LINK_RECEITAS = "https://pay.kirvano.com/2b3f1b1f-f4d4-43b3-9863-8a97bc45b0ba";

  if (isUpsellMode) {
    return (
      <div className="max-w-2xl mx-auto p-4 animate-in fade-in duration-700 pb-20">
        <div className="bg-red-600 text-white p-4 rounded-t-3xl text-center font-bold uppercase tracking-wider animate-pulse">
          ⚠️ OPORTUNIDADE ÚNICA E EXCLUSIVA
        </div>
        <div className="bg-white p-8 rounded-b-3xl shadow-2xl border-x-4 border-b-4 border-red-50">
          <h2 className="text-3xl font-black text-gray-900 leading-tight mb-4 text-center">
            🔥 O SEGREDO REVELADO: <br/>
            <span className="text-red-600 text-2xl uppercase">As Receitas que os Buffets Escondem!</span>
          </h2>
          <img 
            src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop" 
            alt="Receitas Lu" 
            className="w-full h-56 object-cover rounded-xl mb-6 shadow-md border-2 border-orange-100"
          />
          <p className="text-gray-700 text-lg mb-6 leading-relaxed text-center font-medium">
            O atalho definitivo para quem quer vender 10x mais rápido com recheios que ninguém consegue copiar!
          </p>
          
          <ul className="space-y-3 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <li className="flex items-start gap-2 text-gray-800">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Receitas Testadas:</strong> Nada de perder ingredientes com testes.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-800">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Passo a Passo Simples:</strong> Mesmo que você nunca tenha fritado um ovo.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-800">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Segredos do YouTube:</strong> Coisas que ninguém revela de graça.</span>
            </li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-dashed border-yellow-400 mb-8 text-center">
            <p className="text-gray-500 line-through text-sm">De R$ 97,00</p>
            <p className="text-5xl font-black text-green-600">Por R$ 17,90</p>
            <p className="text-xs text-orange-600 font-bold mt-2 uppercase">Acesso Vitalício + Bônus</p>
          </div>

          <div className="space-y-4">
            <a 
              href={CHECKOUT_LINK_RECEITAS}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-black py-6 rounded-2xl text-2xl shadow-xl transition-all text-center transform hover:scale-105 active:scale-95"
            >
              SIM! LIBERAR ACESSO IMEDIATO ➔
            </a>
          </div>

          <p className="mt-8 text-center text-gray-400 text-xs">
            O pagamento é feito em uma página segura fora desta plataforma.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 animate-in fade-in duration-700 pb-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-orange-900 mb-2 leading-tight uppercase">{result.title}</h1>
        <p className="text-gray-600 text-lg font-medium">{result.desc}</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-orange-500 relative overflow-hidden mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center uppercase tracking-tight">
          CURSO <span className="text-orange-600">MESTRE DOS SALGADOS</span> – LUANA SOUZA
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=600&auto=format&fit=crop" 
            alt="Salgados" 
            className="w-full h-48 object-cover rounded-2xl shadow-md"
          />
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700 font-bold">✅ Receitas que vendem todo dia</li>
            <li className="flex items-center gap-2 text-gray-700 font-bold">✅ Passo a passo do zero</li>
            <li className="flex items-center gap-2 text-gray-700 font-bold">✅ Ideal para renda extra</li>
            <li className="flex items-center gap-2 text-gray-700 font-bold">✅ Certificado Mestra incluso</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-3xl text-center shadow-2xl">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-2">Oferta Especial</p>
          <p className="text-5xl font-black mb-6">R$ 47,90</p>
          <a 
            href={CHECKOUT_LINK_PRINCIPAL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl text-2xl shadow-xl transition-transform hover:scale-105 text-center uppercase"
          >
            QUERO O CURSO AGORA! ➔
          </a>
        </div>
      </div>

      <ProfitCalculator />

      {/* BLOCO DE TRANSIÇÃO DESTACADO */}
      <div className="mt-12 bg-orange-100 p-8 rounded-3xl border-4 border-dashed border-orange-400 text-center shadow-lg relative overflow-hidden">
        <div className="absolute -top-2 -right-10 bg-red-600 text-white px-12 py-1 rotate-12 font-bold text-xs shadow-md">
            EXCLUSIVO
        </div>
        <h3 className="text-2xl font-black text-orange-900 mb-2 uppercase">
            ⚠️ VOCÊ ACABA DE GANHAR UM ACESSO ESPECIAL!
        </h3>
        <p className="text-orange-800 mb-6 font-bold">
            A Lu liberou um presente extra para quem quer resultados 10x mais rápidos e lucros imediatos.
        </p>
        
        <button 
          onClick={onContinueToUpsell}
          className="w-full max-w-md bg-orange-600 hover:bg-orange-700 text-white font-black py-6 rounded-2xl text-xl shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto uppercase"
        >
          <span>VER MINHA OPORTUNIDADE EXTRA</span>
          <span className="text-2xl">➔</span>
        </button>
        
        <p className="text-orange-600 text-sm mt-4 font-black animate-bounce uppercase">
            Clique acima para destravar os segredos da Lu 👆
        </p>
      </div>

      <div className="mt-16 text-center text-gray-400 text-sm">
        Mestre dos Salgados © 2024 • Página 100% Segura
      </div>
    </div>
  );
};

export default QuizResult;
