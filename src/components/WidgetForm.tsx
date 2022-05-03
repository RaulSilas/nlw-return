import { CloseButton } from "./CloseButton";

import bugImageIrl from "../assets/bug.svg";
import ideaImageIrl from "../assets/idea.svg";
import thoughtImageIrl from "../assets/thought.svg";

const feedbackTypes = {
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

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

      <footer className="text-ts text-neutral-400">
        Feito com ♥ pela{" "}
        <a href="#" className="underline underline-offset-2">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
