import html2canvas from "html2canvas";
import { createContext, useContext, useRef, useState } from "react";

const ContextStyles = createContext({});

export const useStyles = (): any => {
  return useContext(ContextStyles);
};

export const ContextStylesProvider = ({ children }: any) => {
  const [imagen, setImagen] = useState("");
  const [padding, setPadding] = useState<Size>("small");
  const [shadow, setShadow] = useState<Size>("large");
  const [roundness, setRoundness] = useState<Size>("small");
  const [background, setBackground] = useState(0);

  const sizePadding = {
    none: "p-0",
    small: "p-10",
    medium: "p-20",
    large: "p-32",
  };
  const sizeShadow = {
    none: "drop-shadow-none",
    small: "drop-shadow-lg",
    medium: "drop-shadow-xl",
    large: "drop-shadow-2xl",
  };
  const sizeRoundness = {
    none: "rounded-none",
    small: "rounded-2xl",
    medium: "rounded-3xl",
    large: "rounded-[32px]",
  };

  const bg = [
    "bg-gradient-to-br from-pink-300 via-orange-200 to-red-300",
    "bg-gradient-to-br from-green-300 via-yellow-200 to-green-200",
    "bg-gradient-to-br from-green-200 via-blue-100 to-blue-300",
    "bg-gradient-to-br from-indigo-300 via-blue-400 to-purple-500",
    "bg-gradient-to-br from-red-300 via-orange-300 to-yellow-200",
    "bg-gradient-to-br from-pink-300 via-pink-400 to-red-400",
    "bg-gradient-to-br from-slate-400 via-gray-500 to-gray-700",
    "bg-gradient-to-br from-orange-300 via-orange-400 to-red-400",
    "bg-gradient-to-br from-teal-300 to-cyan-400",
    "bg-gradient-to-br from-red-300 to-purple-600",
    "bg-white",
    "bg-black",
  ];

  const objetivoHtml = useRef<HTMLElement>();

  const guardarHtml = () => {
    if (objetivoHtml.current) {
      html2canvas(objetivoHtml.current).then((canvas) => {
        let enlace = document.createElement("a");
        enlace.download = "imagen";
        enlace.href = canvas.toDataURL();
        enlace.click();
      });
    }
  };

  return (
    <ContextStyles.Provider
      value={{
        imagen,
        setImagen,
        padding,
        setPadding,
        classPadding: sizePadding[padding],
        shadow,
        setShadow,
        classShadow: sizeShadow[shadow],
        roundness,
        setRoundness,
        classRoundness: sizeRoundness[roundness],
        bg,
        setBackground,
        classBackground: bg[background],
        objetivoHtml,
        guardarHtml,
      }}
    >
      {children}
    </ContextStyles.Provider>
  );
};

type Size = "none" | "small" | "medium" | "large";
