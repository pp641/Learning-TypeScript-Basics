import React from 'react'

type PersonListType = {
        names : {
            firstName : string
            lastName : string
        } []
}

// Array Type

const PersonList = (props : PersonListType) => {
  return (
    <div>
        {props.names.map((data , key) => {
            return(
                <div key={key} >
                    Name : {data.firstName} + " " + {data.lastName} 
                </div>
            )
        }) }
    </div>
  )
}

export default PersonList