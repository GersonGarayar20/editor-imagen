import { useStyles } from "../context/Styles";

export default function SubirImagen() {
  const { setImagen } = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const objectURL = URL.createObjectURL(e.target.files[0]);
      setImagen(objectURL);
    }
  };
  return (
    <input
      onChange={handleChange}
      className="block text-sm text-neutral-400 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 file:cursor-pointer"
      accept="image/*"
      type="file"
      name="file"
    />
  );
}
