import { useState } from "react";

interface ITone {
  id: number;
  tone: string;
}

const tones: ITone[] = [
  { id: 1, tone: "Professional" },
  { id: 2, tone: "Friendly" },
  { id: 3, tone: "Witty" },
  { id: 4, tone: "Defensive" },
  { id: 5, tone: "Aggressive" },
];

const defaultStyle = "bg-white text-black border-indigo-400";
const activeStyle = "bg-indigo-600 text-white border-transparent";

interface IProps {
  onChange: (tone: string) => void;
}

export const ToneOfVoice = ({ onChange }: IProps) => {
  const [activeTone, setActiveTone] = useState(1);

  // Easy way to set first tone
  onChange?.(tones[0].tone);

  const onChangeWrapper = ({ id, tone }: ITone) => {
    setActiveTone(id);
    onChange?.(tone);
  }

  return (
    <div className="flex flex-row w-full justify-between">
      {tones.map(({ id, tone }) => (
        <button key={`tone-of-voice-${id}`}
          type="button"
          className={`
            text-sm px-1 py-0.5 mx-1
            border rounded
            hover:bg-indigo-700 hover:text-white
            focus:outline-none focus:ring-1 focus:ring-indigo-500
            font-normal flex-1
            ${id === activeTone ? activeStyle : defaultStyle}
          `}
          onClick={() => onChangeWrapper({ id, tone })}
        >
          {tone}
        </button>
      ))}
    </div>
  )
}
