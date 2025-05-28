import React from 'react'

let title: string = 'Hello world'

type Color = "red" | "yellow" | "blue" | "black"

// type ButtonProps = {
//   text: string,
//   subtitle?: string,
//   color?: Color,
//   backgroundColor?: Color
// }
type ButtonProps = {
  children: React.ReactNode; /* any type of element */
}

function Button({ children }: ButtonProps) {
  return (
    <button>
      test
    </button>
  )
}

const Page = () => {
  return (
    <div>
      <Button> 
        <span>test</span>
        <div>asdasd</div>
      </Button>
      
    </div>
  )
}

export default Page