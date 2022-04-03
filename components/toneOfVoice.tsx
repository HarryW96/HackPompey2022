import { tones } from "../constants";
import { ITone } from "../interfaces";

const defaultStyle = "bg-white text-black border-indigo-400";
const activeStyle = "bg-indigo-600 text-white border-transparent";

interface IProps {
  onChange: (tone: ITone) => void;
  value: ITone;
}

export const ToneOfVoice = ({ onChange, value }: IProps) => {
  const onChangeWrapper = (tone: ITone) => {
    onChange?.(tone);
  }

  return (
    <div className="flex flex-row w-full justify-between">
      {tones.map(({ id, text }) => (
        <button key={`tone-of-voice-${id}`}
          type="button"
          className={`
            text-sm px-1 py-0.5 mx-1
            border rounded
            hover:bg-indigo-700 hover:text-white
            focus:outline-none focus:ring-1 focus:ring-indigo-500
            font-normal flex-1
            ${id === value.id ? activeStyle : defaultStyle}
          `}
          onClick={() => onChangeWrapper({ id, text })}
        >
          {text}
        </button>
      ))}
    </div>
  )
}
