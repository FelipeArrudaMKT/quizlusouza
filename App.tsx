
import React, { useState } from 'react';
import { QUESTIONS } from './constants';
import { QuizState } from './types';
import ProgressBar from './components/ProgressBar';
import QuizResult from './components/QuizResult';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentStep: 0,
    answers: {},
    isFinished: false,
    score: 0
  });

  const [isIntro, setIsIntro] = useState(true);
  const [isShowingMainOffer, setIsShowingMainOffer] = useState(false);
  const [isShowingUpsellOffer, setIsShowingUpsellOffer] = useState(false);

  const handleStart = () => {
    setIsIntro(false);
  };

  const handleAnswer = (optionId: string, weight: number = 0) => {
    const nextStep = state.currentStep + 1;
    
    // Após a pergunta 15, mostramos a oferta do curso
    if (nextStep === 15) {
      setIsShowingMainOffer(true);
      return;
    }

    // Após a pergunta 19, mostramos a oferta do upsell
    const isLastStep = nextStep === QUESTIONS.length;
    if (isLastStep) {
      setIsShowingUpsellOffer(true);
      return;
    }

    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [QUESTIONS[prev.currentStep].id]: optionId },
      score: prev.score + weight,
      currentStep: nextStep
    }));
  };

  const startMiniQuiz = () => {
    setIsShowingMainOffer(false);
    // Move para a pergunta 16 (index 15)
    setState(prev => ({ ...prev, currentStep: 15 }));
  };

  if (isIntro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden text-center p-8 border-4 border-orange-200">
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=600&auto=format&fit=crop" 
              alt="Salgados" 
              className="w-full h-48 object-cover rounded-2xl shadow-md mb-6"
            />
            <h1 className="text-3xl font-black text-orange-900 leading-tight">
              Descubra seu potencial para faturar <span className="text-orange-600">R$ 5.000/mês</span> na cozinha!
            </h1>
            <p className="mt-4 text-gray-600 font-medium">
              Responda 15 perguntas rápidas e veja se você tem o perfil para ser uma Mestra dos Salgados.
            </p>
          </div>
          <button 
            onClick={handleStart}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl text-xl shadow-lg transform hover:scale-105 transition-all"
          >
            QUERO DESCOBRIR ➔
          </button>
          <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest">
            Grátis • Rápido • Personalizado
          </p>
        </div>
      </div>
    );
  }

  if (isShowingMainOffer || isShowingUpsellOffer) {
    return (
      <div className="min-h-screen bg-orange-50 py-10">
        <QuizResult 
          score={state.score} 
          isUpsellMode={isShowingUpsellOffer} 
          onContinueToUpsell={startMiniQuiz} 
        />
      </div>
    );
  }

  const currentQuestion = QUESTIONS[state.currentStep];

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 border border-orange-100 animate-in slide-in-from-bottom-4 duration-500">
        <ProgressBar current={state.currentStep} total={QUESTIONS.length} />
        
        <div className="mb-6">
          <p className={`font-bold text-sm uppercase mb-1 ${state.currentStep >= 15 ? 'text-green-600' : 'text-orange-500'}`}>
            {state.currentStep >= 15 ? 'BÔNUS: Receitas Secretas' : `Questão ${currentQuestion.id} de 15`}
          </p>
          <h2 className="text-2xl font-black text-gray-900 leading-tight mb-6">
            {currentQuestion.text}
          </h2>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-sm border border-gray-100">
            <img 
              src={currentQuestion.imageHint} 
              alt="Ilustração" 
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id, option.weight)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all group flex items-center gap-4 ${
                  state.currentStep >= 15 
                  ? 'border-gray-100 hover:border-green-500 hover:bg-green-50' 
                  : 'border-gray-100 hover:border-orange-500 hover:bg-orange-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-gray-400 font-bold transition-all ${
                  state.currentStep >= 15
                  ? 'group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white'
                  : 'group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white'
                }`}>
                  {option.id.toUpperCase()}
                </div>
                <span className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            {state.currentStep >= 15 ? '🔓 Destravando segredos da Lu' : '🔒 Suas respostas são seguras'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
