import React from "react";

export default function Result({
  score,
  total,
  onRestart,
}: {
  score: number;
  total: number;
  onRestart: () => void;
}) {
  const percent = Math.round((score / total) * 100);

  return (
    <div className="w-[900px] bg-white rounded-2xl p-24 text-center shadow-lg">
      <p className="text-sm text-gray-500 mb-4">Keep Learning!</p>
      <h2 className="text-4xl font-serifTitle text-primary mb-3">Your Final score is</h2>

      <div className="text-[120px] font-serifTitle text-primary leading-none">
        {percent}
        <span className="text-4xl align-top">%</span>
      </div>

      <button
        onClick={onRestart}
        className="mt-10 px-6 py-3 bg-cyanLight border border-primary rounded-md text-primary"
      >
        Start Again
      </button>
    </div>
  );
}
