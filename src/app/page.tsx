"use client"

import React, { useState,Dispatch,SetStateAction } from 'react'


let title: string = 'Hello world'

type Color = "red" | "yellow" | "blue" | "black"

// type ButtonProps = {
//   text: string,
//   subtitle?: string,
//   color?: Color,
//   backgroundColor?: Color
// }
type ButtonProps = {
  setCount: Dispatch<React.SetStateAction<number>>
}

function Button({setCount}: ButtonProps) {
  // const [count, setCount] = useState<number>(0)
  return (
    <button onClick={()=> setCount(prev => prev + 10)}>
      test
    </button>
  )
}

const Page = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <Button setCount={setCount}/> 
      
    </div>
  )
}

export default Page