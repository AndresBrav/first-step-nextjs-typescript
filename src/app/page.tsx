import React from 'react'

let title:string = 'Hello world'


function Button(){
  return(
    <button>Click me</button>
  )
}

const Page = () => {
  return (
    <div>
      <Button/>
    </div>
  )
}

export default Page