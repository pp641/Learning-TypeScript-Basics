import React from 'react'

type ButtonType = {
    onClick : (event : React.MouseEvent<HTMLButtonElement>, id: number)=> void
}


const Button = (props : ButtonType) =>{
    return <button onClick= {(event) => props.onClick(event,1)} > Button </button> 
}

const EventProps = () => {
  return (
    <Button onClick={(e)=>{
       console.log("Event called", e)     
    }} />
  )
}

export default EventProps;