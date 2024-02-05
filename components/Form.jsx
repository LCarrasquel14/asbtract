"use client";
import { useRef } from "react";
import Link from "next/link";
const Form = () => {
  const inputRef = useRef(null);
  function handleClick() {
    console.log(inputRef.current.value);
  }
  return (
    <div className=" w-4/5 flex flex-col justify-center items-center">
      <h1 className=" text-7xl font-medium">How can we help?</h1>
      <div className="box w-full">
        <input
          className=" w-full mt-9 p-4 rounded-md search"
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Search"
        />
        <Link href="/">
          <button type="submit" className="button-search" onClick={handleClick}>
            {"->"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
