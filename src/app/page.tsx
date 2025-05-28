import React from 'react'

let title: string = 'Hello world'

type Color = "red" | "yellow" | "blue" | "black"

type ButtonProps = {
  text: string,
  subtitle?: string,
  color?: Color,
  backgroundColor?: Color
}

function Button(props: ButtonProps) {
  const { text, color, subtitle } = props
  return (
    <button>
      {text}
    </button>
  )
}

const Page = () => {
  return (
    <div>
      <Button
        text="hello world"
        backgroundColor='red'
      />
    </div>
  )
}

export default Page