"use client";
import { useState } from "react";
import { getCode } from "@/actions/getCode";
import DisplayCode from "./components/DisplayCode";

export default function Home() {
  const [code, setCode] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleClick = async () => {
    // Call the getCode function with the current input value
    const searched = await getCode(code);
    console.log(searched);
    setData(searched);
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={handleInputChange}
        placeholder="Enter code"
      />
      <button onClick={handleClick}>click</button>
      {data && <DisplayCode items={data} />}
    </div>
  );
}
