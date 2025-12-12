import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";

export type Q = {
  id: number;
  text: string;
  choices: string[];
  answerIndex: number;
};

const questions: Q[] = [
  { id: 1, text: "What sound does a cat make?", choices: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], answerIndex: 1 },
  { id: 2, text: "What would you probably find in your fridge?", choices: ["Shoes", "Ice Cream", "Books"], answerIndex: 1 },
  { id: 3, text: "What color are bananas?", choices: ["Blue", "Yellow", "Red"], answerIndex: 1 },
  { id: 4, text: "How many stars are in the sky?", choices: ["Two", "Infinite", "One Hundred"], answerIndex: 1 },
];

function App() {
  const [score, setScore] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {score === null ? (
        <Quiz questions={questions} onFinish={(s) => setScore(s)} />
      ) : (
        <Result score={score} total={questions.length} onRestart={() => setScore(null)} />
      )}
    </div>
  );
}

export default App;
