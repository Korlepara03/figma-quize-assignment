import React from "react";

export default function ProgressBar({
  length,
  current,
}: {
  length: number;
  current: number;
}) {
  return (
    <div className="flex justify-center gap-6 my-8">
      {Array.from({ length }).map((_, idx) => (
        <div
          key={idx}
          className={`w-24 h-2 rounded-full ${
            idx <= current ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
