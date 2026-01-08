
import { QUESTIONS } from './constants';

// Configurações e Dados
const CHECKOUT_CURSO = "https://pay.kirvano.com/63a28a47-b22b-43a7-afdf-9a9696d76c76";
const CHECKOUT_RECEITAS = "https://pay.kirvano.com/2b3f1b1f-f4d4-43b3-9863-8a97bc45b0ba";

let currentStep = -1; // -1 é a Intro
let score = 0;
const app = document.getElementById('app');

function render() {
    if (!app) return;
    if (currentStep === -1) renderIntro();
    else if (currentStep < 15) renderQuestion(currentStep);
    else if (currentStep === 15) renderMainOffer();
    else if (currentStep < 19) renderQuestion(currentStep);
    else renderUpsellOffer();
}

function renderIntro() {
    if (!app) return;
    app.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-200 text-center fade-in">
            <img src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=600" class="w-full h-48 object-cover rounded-2xl mb-6 shadow-md">
            <h1 class="text-3xl font-black text-orange-900 leading-tight">
                Descubra seu potencial para faturar <span class="text-orange-600">R$ 5.000/mês</span> na cozinha!
            </h1>
            <p class="mt-4 text-gray-600 font-medium">Responda 15 perguntas e veja se você pode ser uma Mestra dos Salgados.</p>
            <button onclick="next()" class="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl text-xl shadow-lg transform transition active:scale-95 uppercase">
                Quero Descobrir ➔
            </button>
        </div>
    `;
}

function renderQuestion(index: number) {
    if (!app) return;
    const q = QUESTIONS[index];
    const isMini = index >= 15;
    const progress = Math.round(((isMini ? index - 15 : index) / (isMini ? 4 : 15)) * 100);

    app.innerHTML = `
        <div class="w-full bg-white rounded-3xl shadow-xl p-8 border border-orange-100 fade-in">
            <div class="w-full bg-orange-100 rounded-full h-3 mb-6 overflow-hidden">
                <div class="bg-orange-500 h-full transition-all duration-300" style="width: ${progress}%"></div>
            </div>
            <p class="font-bold text-xs uppercase mb-1 ${isMini ? 'text-green-600' : 'text-orange-500'}">
                ${isMini ? 'Bônus: Receitas Secretas' : `Pergunta ${index + 1} de 15`}
            </p>
            <h2 class="text-2xl font-black text-gray-900 leading-tight mb-6">${q.text}</h2>
            <img src="${q.imageHint}" class="w-full h-48 object-cover rounded-2xl mb-8 shadow-sm" onerror="this.src='https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400'">
            <div class="space-y-4">
                ${q.options.map(opt => `
                    <button onclick="next(${opt.weight || 0})" class="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:bg-orange-50 font-bold text-gray-700 transition-all flex items-center gap-4 group">
                        <div class="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white uppercase">${opt.id}</div>
                        <span>${opt.text}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderMainOffer() {
    if (!app) return;
    app.innerHTML = `
        <div class="w-full py-6 fade-in space-y-8">
            <div class="text-center">
                <h1 class="text-3xl font-black text-orange-900 uppercase">🔥 PERFIL DE MESTRA DETECTADO!</h1>
                <p class="text-gray-600 font-medium">Você tem tudo para faturar alto com salgados.</p>
            </div>

            <div class="bg-white rounded-3xl shadow-2xl border-t-8 border-orange-500 p-8">
                <h2 class="text-xl font-black text-center mb-6 uppercase">CURSO MESTRE DOS SALGADOS - LUANA SOUZA</h2>
                <div class="grid md:grid-cols-2 gap-4 mb-6">
                    <img src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=400" class="rounded-xl shadow">
                    <ul class="text-sm font-bold space-y-2 text-gray-700">
                        <li>✅ Receitas que vendem todo dia</li>
                        <li>✅ Passo a passo do zero</li>
                        <li>✅ Ideal para renda extra</li>
                        <li>✅ Certificado incluso</li>
                    </ul>
                </div>
                <div class="bg-gray-900 rounded-2xl p-6 text-center text-white">
                    <p class="text-orange-400 text-xs font-bold uppercase">Oferta Especial</p>
                    <p class="text-5xl font-black my-2">R$ 47,90</p>
                    <a href="${CHECKOUT_CURSO}" target="_blank" class="block w-full bg-orange-500 py-4 rounded-xl font-black text-xl hover:bg-orange-600 transition uppercase shadow-lg">
                        Quero o Curso Agora! ➔
                    </a>
                </div>
            </div>

            <!-- Calculadora -->
            <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200">
                <h3 class="text-lg font-bold text-orange-800 text-center mb-4 uppercase">Quanto você pode ganhar? 💸</h3>
                <input type="range" id="profitRange" min="20" max="300" value="50" class="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500">
                <div class="flex justify-between font-bold text-orange-600 my-4">
                    <span>20 un</span>
                    <span id="rangeValue" class="text-2xl">50 un/dia</span>
                    <span>300 un</span>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-orange-50 p-4 rounded-xl text-center">
                        <p class="text-[10px] uppercase font-bold text-orange-400">Lucro Diário</p>
                        <p id="daily" class="text-xl font-black text-orange-900">R$ 45.00</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded-xl text-center border-2 border-green-100">
                        <p class="text-[10px] uppercase font-bold text-green-400">Lucro Mensal</p>
                        <p id="monthly" class="text-xl font-black text-green-900">R$ 990.00</p>
                    </div>
                </div>
            </div>

            <!-- Botão de Transição -->
            <div class="bg-orange-100 p-8 rounded-3xl border-4 border-dashed border-orange-400 text-center shadow-lg relative">
                <h3 class="text-xl font-black text-orange-900 uppercase">⚠️ ACESSO ESPECIAL LIBERADO!</h3>
                <p class="text-orange-800 font-bold text-sm mb-6">A Lu liberou um presente para quem quer resultados 10x mais rápidos.</p>
                <button onclick="next()" class="w-full bg-orange-600 py-5 rounded-2xl text-white font-black text-xl shadow-xl hover:bg-orange-700 transition transform hover:scale-105 uppercase">
                    Ver Oportunidade Extra ➔
                </button>
                <p class="mt-4 text-orange-600 text-xs font-black animate-bounce uppercase">Clique acima para destravar os segredos 👆</p>
            </div>
        </div>
    `;
    setupCalc();
}

function renderUpsellOffer() {
    if (!app) return;
    app.innerHTML = `
        <div class="w-full py-6 fade-in max-w-lg mx-auto">
            <div class="bg-red-600 text-white p-4 rounded-t-3xl text-center font-black uppercase tracking-widest animate-pulse">
                ⚠️ OPORTUNIDADE ÚNICA E EXCLUSIVA
            </div>
            <div class="bg-white p-8 rounded-b-3xl shadow-2xl border-x-4 border-b-4 border-red-50">
                <h2 class="text-3xl font-black text-gray-900 text-center mb-4 uppercase">
                    🔥 O SEGREDO REVELADO:<br>
                    <span class="text-red-600 text-xl">As Receitas que os Buffets Escondem!</span>
                </h2>
                <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600" class="w-full h-48 object-cover rounded-xl mb-6 border-2 border-orange-50">
                <p class="text-center text-gray-700 font-medium mb-8">Atalho definitivo para vender 10x mais rápido com recheios exclusivos.</p>
                
                <div class="bg-yellow-50 p-6 rounded-2xl border-2 border-dashed border-yellow-400 text-center mb-8">
                    <p class="text-gray-400 line-through text-sm">De R$ 97,00</p>
                    <p class="text-5xl font-black text-green-600">Por R$ 17,90</p>
                    <p class="text-xs font-black text-orange-600 mt-2 uppercase">Acesso Vitalício + Bônus</p>
                </div>

                <a href="${CHECKOUT_RECEITAS}" target="_blank" class="block w-full bg-green-600 py-6 rounded-2xl text-white font-black text-2xl text-center shadow-xl hover:bg-green-700 transition transform hover:scale-105 uppercase">
                    SIM! LIBERAR AGORA ➔
                </a>
                
                <p class="text-[10px] text-gray-400 text-center mt-6 uppercase">O pagamento é feito em uma página 100% segura.</p>
            </div>
            <p class="text-center text-gray-400 text-[10px] mt-10 uppercase font-bold">Mestre dos Salgados © 2024</p>
        </div>
    `;
}

// Lógica Auxiliar
(window as any).next = (weight: number = 0) => {
    score += weight;
    currentStep++;
    render();
    window.scrollTo(0,0);
};

function setupCalc() {
    const range = document.getElementById('profitRange') as HTMLInputElement;
    const val = document.getElementById('rangeValue');
    const daily = document.getElementById('daily');
    const monthly = document.getElementById('monthly');

    if (!range) return;

    range.oninput = function() {
        const units = parseInt((this as HTMLInputElement).value);
        if (val) val.innerText = `${units} un/dia`;
        const dProfit = units * 0.9;
        if (daily) daily.innerText = `R$ ${dProfit.toFixed(2)}`;
        if (monthly) monthly.innerText = `R$ ${(dProfit * 22).toFixed(2)}`;
    };
}

// Inicializar
render();
