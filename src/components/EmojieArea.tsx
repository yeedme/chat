import React, { useRef } from "react";
//emoji 面板
const emojis = [
  {
    emoji: "😂",
    unicode: "\u{1F602}",
  },
  {
    emoji: "😃",
    unicode: "\u{1F603}",
  },
  {
    emoji: "🙃",
    unicode: "\u{1F643}",
  },
  {
    emoji: "🤣",
    unicode: "\u{1F923}",
  },
  {
    emoji: "😊",
    unicode: "\u{1F60A}",
  },
  {
    emoji: "🥰",
    unicode: "\u{1F970}",
  },
  {
    emoji: "👍",
    unicode: "\u{1F44D}",
  },
  {
    emoji: "🌸",
    unicode: "\u{1F338}",
  },
  {
    emoji: "🐶",
    unicode: "\u{1F436}",
  },
  {
    emoji: "💖",
    unicode: "\u{1F496}",
  },
  {
    emoji: "🎉",
    unicode: "\u{1F389}",
  },
  {
    emoji: "🦄",
    unicode: "\u{1F984}",
  },
  {
    emoji: "🌈",
    unicode: "\u{1F308}",
  },
  {
    emoji: "🍔",
    unicode: "\u{1F354}",
  },
  {
    emoji: "🚀",
    unicode: "\u{1F680}",
  },
  {
    emoji: "🍦",
    unicode: "\u{1F366}",
  },
  {
    emoji: "🎵",
    unicode: "\u{1F3B5}",
  },
  {
    emoji: "🏝️",
    unicode: "\u{1F3DD}\uFE0F",
  },
  {
    emoji: "🤖",
    unicode: "\u{1F916}",
  },
  {
    emoji: "🎭",
    unicode: "\u{1F3AD}",
  },
  {
    emoji: "🦜",
    unicode: "\u{1F99C}",
  },
  {
    emoji: "📚",
    unicode: "\u{1F4DA}",
  },
  {
    emoji: "🍁",
    unicode: "\u{1F341}",
  },
  {
    emoji: "💻",
    unicode: "\u{1F4BB}",
  },
];
interface Props {
  pushEmoji: (emoji: string) => void;
}

//emoji库
export default function EmojieArea({ pushEmoji }: Props) {
  return (
    <>
      <div className="w-28 flex h-full flex-wrap border-2 text-2xl p-auto bg-gray-100 ">
        {emojis.map((t) => {
          return (
            <div
              key={t.unicode}
              onClick={() => pushEmoji(t.emoji)}
              className="shrink-0 hover:bg-white  "
            >
              {t.emoji}
            </div>
          );
        })}
      </div>
    </>
  );
}
