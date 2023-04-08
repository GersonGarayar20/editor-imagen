import Options from "./components/Options";
import Imagen from "./components/Imagen";
import Menu from "./components/Menu";

export default function App() {
  return (
    <main className="">
      <div className="md:flex h-full">
        <div className="md:w-96 p-4 ">
          <Menu />
          <Options />
        </div>
        <div className="flex-1">
          <Imagen />
        </div>
      </div>
    </main>
  );
}
