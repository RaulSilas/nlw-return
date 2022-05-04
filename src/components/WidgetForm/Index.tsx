import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageIrl from "../../assets/bug.svg";
import ideaImageIrl from "../../assets/idea.svg";
import thoughtImageIrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageIrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageIrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageIrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackTypeState, setFeedbackTypeState] =
    useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackTypeState(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackTypeState ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypeState} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackTypeState}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-ts text-neutral-400">
        Feito com ♥ pela{" "}
        <a href="#" className="underline underline-offset-2">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
