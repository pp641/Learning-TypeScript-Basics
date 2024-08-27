import React from 'react'


type StatusTypes = {
    status : 'loading' | 'success' | 'error';
}

// Union Type
const Status = (props : StatusTypes) => {

    let StatusMessage ;
    if(props.status === 'loading'){
        StatusMessage = "Loading Message  ...."
    }else if(props.status === 'error'){
         StatusMessage = " Error Message ...."   
    }else{
        StatusMessage = "Success Message ...."
    }


  return (
    <div>Status Message :  {StatusMessage}</div>
  )
}

export default Status