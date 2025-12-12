import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import type { Q } from "./App";

type Props = {
  questions: Q[];
  onFinish: (score: number) => void;
};

export default function Quiz({ questions, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[index];

  function handleChoose(choiceIndex: number) {
    setSelected(choiceIndex);
  }

  function handleNext() {
    if (selected === null) return;

    if (selected === q.answerIndex) setScore((s) => s + 1);

    const next = index + 1;

    if (next < questions.length) {
      setIndex(next);
      setSelected(null);
    } else {
      onFinish(score + (selected === q.answerIndex ? 1 : 0));
    }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
      setSelected(null);
    }
  }

  return (
    <div className="w-[1100px] bg-white rounded-2xl shadow-lg p-12">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-serifTitle text-primary">
          Test Your <span className="italic">Knowledge</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">Answer all questions to see your results</p>
      </header>

      <ProgressBar length={questions.length} current={index} />

      <QuestionCard
        questionNumber={index + 1}
        text={q.text}
        choices={q.choices}
        selected={selected}
        onChoose={handleChoose}
      />

      <div className="flex justify-between mt-10">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 border rounded-md bg-white disabled:opacity-40"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={selected === null}
          className="px-6 py-2 bg-cyanLight rounded-md border border-primary text-primary disabled:opacity-40"
        >
          {index + 1 === questions.length ? "Submit" : "→"}
        </button>
      </div>
    </div>
  );
}
