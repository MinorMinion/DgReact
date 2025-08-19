import { memo } from "react";

function MakeButton({ color, setcolor }) {
  console.log("rerendered");

  return (
    <button
      onClick={() => setcolor(color)}
      className="text-white px-4 py-1 rounded-full"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}
export default memo(MakeButton);
