export default function OptionButton({ value, state, setState }: any) {
  return (
    <button
      className={`${
        state === value
          ? "bg-green-500 text-white"
          : "bg-neutral-700 text-neutral-200"
      } py-2 px-4 rounded-lg capitalize`}
      onClick={() => setState(value)}
    >
      {value}
    </button>
  );
}
