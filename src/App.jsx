import { useState } from "react";

let data = [
  {
    text: "Turbo",
    color: "#f9ca24",
  },
  {
    text: "Blueple",
    color: "#4834d4",
  },
  {
    text: "Silver",
    color: "#bdc3c7",
  },
  {
    text: "Mint Leaf",
    color: "#00b894",
  },
  {
    text: "AliZarin",
    color: "#e74c3c",
  },
];

function App() {
  const [color, setColor] = useState("lightgray");

  // const changeBgColor = (color) => {
  //   setColor(color);
  // };

  return (
    <div
      className="w-full h-screen transition duration-130 ease-in-out"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-10 rounded-xl bg-white px-4 py-3 ">
          {data &&
            data.map((item, index) => {
              return (
                <button
                  key={index}
                  className="rounded-lg px-4 py-4 font-mono shadow-lg text-white text-lg transform hover:scale-125 transition duration-130  ease-in-out"
                  style={{ backgroundColor: `${item.color}` }}
                  // onClick={() => changeBgColor(item.color)}
                  onClick={() => setColor(item?.color)}
                >
                  {item.text}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
