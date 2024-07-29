/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { QuestionOne } from "./(components)/question-one";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS } from "@/constants/papuexamen/questions";
import { QuestionTwo } from "./(components)/question-two";
import { QuestionThree } from "./(components)/question-three";
import { QuestionFour } from "./(components)/question-four";
import { QuestionFive } from "./(components)/question-five";
import { QuestionSix } from "./(components)/question-six";
import { QuestionSeven } from "./(components)/question-seven";

export default function PapuExamenPage() {
  const [question, setQuestion] = useState<string>(QUESTIONS[1]);
  const [progress, setProgress] = useState(0);

  const handleProgress = (number: number) => {
    setProgress(number);
  };

  const handleQuestion = (question: string) => {
    setQuestion(question);
  };

  return (
    <main className="relative min-h-screen h-full w-full overflow-hidden">
      {question === QUESTIONS[5] && (
        <img
          src="/5.jpg"
          alt="5"
          className="absolute top-0 w-full h-full -z-50 object-cover opacity-20"
        />
      )}
      <section className="max-w-7xl mx-auto pt-8 px-4 space-y-8">
        <Progress value={progress} />
        {question === QUESTIONS[1] && (
          <QuestionOne
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
        {question === QUESTIONS[2] && (
          <QuestionTwo
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
        {question === QUESTIONS[3] && (
          <QuestionThree
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
        {question === QUESTIONS[4] && (
          <QuestionFour
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
        {question === QUESTIONS[5] && (
          <QuestionFive
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
        {question === QUESTIONS[6] && (
          <QuestionSix
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
        {question === QUESTIONS[7] && (
          <QuestionSeven
            setProgress={handleProgress}
            setQuestion={handleQuestion}
          />
        )}
      </section>
    </main>
  );
}
