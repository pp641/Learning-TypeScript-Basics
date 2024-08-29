import React from 'react'

type StyleType = {
    styles : React.CSSProperties
}

const CSSProps = (props : StyleType) => {
  return (
    <div style={props.styles} >
        Text has been called here
    </div>
  )
}

export default CSSProps