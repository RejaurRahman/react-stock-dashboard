import React from "react";

export default function Card({ children}) {
  return (
    <div className="w-full h-full bg-white border-2 border-neutral-200 rounded-md relative p-8">
      {children}
    </div>
  )
}
