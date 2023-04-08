import { useStyles } from "../context/Styles";
import SubirImagen from "./SubirImagen";

export default function Imagen() {
  const {
    imagen,
    classPadding,
    classShadow,
    classRoundness,
    classBackground,
    objetivoHtml,
  } = useStyles();

  return (
    <div ref={objetivoHtml} className={`p-4 h-full ${classBackground}`}>
      {imagen ? (
        <div
          className={`${classPadding} transition-all duration-200 ease-in-out`}
        >
          <img
            className={`${classShadow} ${classRoundness} transition-all duration-200 ease-in-out`}
            src={imagen}
            alt=""
          />
        </div>
      ) : (
        <div className=" h-full flex justify-center items-center">
          <div className="p-8 bg-neutral-800 rounded-2xl">
            <SubirImagen />
          </div>
        </div>
      )}
    </div>
  );
}
