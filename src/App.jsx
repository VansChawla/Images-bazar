import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userdata, setUserdata] = useState([]);

  const [index, setIndex] = useState(1)


  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );
    setUserdata(response.data);
  };


  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = <h3 className="text-gray-200 text-md lg:text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h3>

  if (userdata.length > 0)
    [
      (printUserData = userdata.map(function (elem, idx) {
        return (
          <div className="my-1 lg:my-5" key={idx}>
            <Card elem={elem}/>
          </div>
        );
      })),
    ];

  return (
    <div className="overflow-auto bg-black h-screen text-white p-4">
      {/* <h1 className="fixed text-6xl bg-red-500">{index}</h1> */}
      <h1 className="text-4xl mb-1 lg:mb-4 lg:mt-0 font-bold lg:text-5xl flex justify-center">Images Bazar</h1>
      <div className="justify-center flex flex-wrap gap-9 gap-y-0 p-4 lg:h-[80%] h-[82.5%]">{printUserData}</div>
      <div className="flex justify-center gap-4 lg:gap-6 items-center p-4">
        <button style={{opacity:index == 1 ? 0.5 : 1 }} onClick={()=>{
          if(index>1){
            setUserdata([])
            setIndex(index-1)
          }
        }} className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-2 py-1 text-sm lg:px-4 lg:py-2 lg:text-sm font-semibold">Prev</button>
        <h4 className="text-sm lg:text-lg">Page {index}</h4>
        <button onClick={()=>{
            setUserdata([])
            setIndex(index+1)
        }} className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-2 py-1 text-sm lg:px-4 lg:py-2 lg:text-sm font-semibold">Next</button>
      </div>
    </div>
  );
};

export default App;
