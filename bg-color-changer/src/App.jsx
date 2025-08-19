import { memo, useState } from "react";
import MakeButton from "./assets/components/MakeButton";

const colorsName = [
  "Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Grey", "Olive",
];

function App() {
  const [color, setcolor] = useState("lavender");
  return (
    <div
      className="w-full h-screen transition-colors duration-1500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed top-2 inset-x-0 flex flex-wrap w-full py-2 justify-center bg-blue-500 ">
        <div className="flex flex-wrap gap-3 py-2 px-3 rounded-full bg-white">
          {colorsName.map((c) => (
            <MakeButton key={c} color={c} setcolor={setcolor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
