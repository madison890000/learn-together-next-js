"use client"
import React from "react";
import DemoOfSwr from "./DemoOfSwr";
import DemoOfReactQuerySwr from "./DemoOfReactQuerySwr";


const Swr = () => {
  return (
    <div className="min-h-screen m-2 p-2">
      <h3 className="text-2xl">Demo of SWR(npm) </h3>
      <DemoOfSwr/>
      <h3 className="text-2xl">Demo of SWR(react-query v5) </h3>
      <DemoOfReactQuerySwr/>
    </div>
  )
}
export default Swr