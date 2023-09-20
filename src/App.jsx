import { useEffect, useState } from "react";
import axios from "axios";

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
  const [color, setColor] = useState("lightgrey");
  // const [colorDetail, setColorDetail] = useState([]);

  // useEffect(() => {
  //   console.log("run");
  //   // console.log(axios.isCancel("something"));
  //   axios.get("http://www.colr.org/json/color/random").then((Response) => {
  //     console.log(Response);
  //   });
  // }, []);
  // const changeBgColor = (color) => {
  //   setColor(color);
  // };

  return (
    <div
      className="min-h-screen  flex items-center justify-center px-20 transition duration-135"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="bg-white p-5 rounded-lg shadow-lg flex flex-wrap space-x-10  ">
        {data &&
          data.map((item, index) => {
            return (
              <button
                className="transform hover:scale-125 transition duration-75 border-solid font-mono  text-white text-xl px-5 py-4 shadow-2xl rounded-lg "
                style={{ backgroundColor: `${item?.color}` }}
                key={index}
                onClick={() => setColor(item?.color)}
              >
                {item?.text}
              </button>
            );
          })}
      </div>
    </div>
    // <div
    //   className="w-full h-screen transition duration-130 ease-in-out"
    //   style={{ backgroundColor: `${color}` }}
    // >
    //   <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-10 rounded-xl bg-white px-4 py-3 ">
    //       {data &&
    //         data.map((item, index) => {
    //           return (
    //             <button
    //               key={index}
    //               className="rounded-lg px-4 py-4 font-mono shadow-lg text-white text-lg transform hover:scale-125 transition duration-130  ease-in-out"
    //               style={{ backgroundColor: `${item.color}` }}
    //               // onClick={() => changeBgColor(item.color)}
    //               onClick={() => setColor(item?.color)}
    //             >
    //               {item.text}
    //             </button>
    //           );
    //         })}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
