import React from "react";
import clsx from "clsx";

type Props = {
  questionNumber: number;
  text: string;
  choices: string[];
  selected: number | null;
  onChoose: (idx: number) => void;
};

export default function QuestionCard({
  questionNumber,
  text,
  choices,
  selected,
  onChoose,
}: Props) {
  return (
    <div className="text-center">
      <div className="max-w-[700px] mx-auto mb-6">
        <div className="bg-cyanLight py-4 px-6 rounded-md font-medium text-primary">
          {questionNumber}. {text}
        </div>
      </div>

      <div className="max-w-[500px] mx-auto space-y-4">
        {choices.map((c, idx) => (
          <button
            key={idx}
            onClick={() => onChoose(idx)}
            className={clsx(
              "w-full px-6 py-4 border rounded-md text-center transition",
              selected === idx
                ? "bg-cyanLight border-transparent shadow-md"
                : "bg-white border-gray-200 hover:bg-gray-50"
            )}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
