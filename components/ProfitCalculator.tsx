
import React, { useState } from 'react';

const ProfitCalculator: React.FC = () => {
  const [dailySales, setDailySales] = useState(50);
  const pricePerUnit = 1.5; // Average price for mini snacks
  const costPerUnit = 0.6; // Average cost
  
  const dailyProfit = dailySales * (pricePerUnit - costPerUnit);
  const monthlyProfit = dailyProfit * 22; // Working 22 days/month

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200 mt-8">
      <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">
        Quanto você pode ganhar? 💸
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantos salgados você quer vender por dia?
          </label>
          <input
            type="range"
            min="20"
            max="300"
            step="10"
            value={dailySales}
            onChange={(e) => setDailySales(parseInt(e.target.value))}
            className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>20 unidades</span>
            <span className="font-bold text-orange-600 text-lg">{dailySales} un/dia</span>
            <span>300 unidades</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-orange-50 p-4 rounded-xl text-center">
            <p className="text-xs text-orange-600 uppercase font-bold">Lucro Diário</p>
            <p className="text-xl font-extrabold text-orange-900">
              R$ {dailyProfit.toFixed(2)}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-center border-2 border-green-200">
            <p className="text-xs text-green-600 uppercase font-bold">Lucro Mensal</p>
            <p className="text-xl font-extrabold text-green-900">
              R$ {monthlyProfit.toFixed(2)}
            </p>
          </div>
        </div>
        
        <p className="text-[10px] text-gray-400 text-center mt-2 italic">
          *Estimativa baseada em mini salgados com custo de R$0,60 e venda a R$1,50.
        </p>
      </div>
    </div>
  );
};

export default ProfitCalculator;
