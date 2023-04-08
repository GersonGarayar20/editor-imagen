import { useStyles } from "../context/Styles";
import Collapse from "./Collapse";
import OptionButton from "./OptionButton";

export default function Options() {
  const {
    padding,
    setPadding,
    shadow,
    setShadow,
    roundness,
    setRoundness,
    bg,
    setBackground,
  } = useStyles();

  return (
    <div className="p-4 bg-neutral-800 text-neutral-400 rounded-xl">
      <h2 className="text-center">Screenshot Options</h2>
      <Collapse title="padding">
        <OptionButton value="none" state={padding} setState={setPadding} />
        <OptionButton value="small" state={padding} setState={setPadding} />
        <OptionButton value="medium" state={padding} setState={setPadding} />
        <OptionButton value="large" state={padding} setState={setPadding} />
      </Collapse>
      <Collapse title="Shadow">
        <OptionButton value="none" state={shadow} setState={setShadow} />
        <OptionButton value="small" state={shadow} setState={setShadow} />
        <OptionButton value="medium" state={shadow} setState={setShadow} />
        <OptionButton value="large" state={shadow} setState={setShadow} />
      </Collapse>
      <Collapse title="roundness">
        <OptionButton value="none" state={roundness} setState={setRoundness} />
        <OptionButton value="small" state={roundness} setState={setRoundness} />
        <OptionButton
          value="medium"
          state={roundness}
          setState={setRoundness}
        />
        <OptionButton value="large" state={roundness} setState={setRoundness} />
      </Collapse>
      <Collapse title="background">
        <div className="grid grid-cols-7 gap-2">
          {bg.map((el: string, i: number) => (
            <button
              key={i}
              className={`${el} w-10 h-10 rounded-full`}
              onClick={() => setBackground(i)}
            ></button>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
