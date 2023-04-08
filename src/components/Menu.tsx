import { useStyles } from "../context/Styles";
import SubirImagen from "./SubirImagen";
import confetti from "canvas-confetti";

export default function Menu() {
  const { guardarHtml } = useStyles();

  const handleClick = () => {
    confetti();
    guardarHtml();
  };
  return (
    <div className="p-4 flex gap-4">
      <SubirImagen />
      <button
        className="text-white py-2 px-4 rounded bg-green-500"
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
}
