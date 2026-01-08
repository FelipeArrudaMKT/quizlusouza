
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full bg-orange-100 rounded-full h-4 mb-6 relative overflow-hidden">
      <div
        className="bg-orange-500 h-full transition-all duration-300 ease-out flex items-center justify-center text-[10px] text-white font-bold"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
