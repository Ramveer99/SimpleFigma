import React from 'react'

function Avatar({children,backgroundColor,padding,color,fontSize,borderRadius,textAlign,cursor,textDecoration}) {

  const style={
    backgroundColor,
    padding:'&{px} ${py} ',
    color: color || 'black',
    fontSize:'25px',
    borderRadius,
    textAlign:'center',
    cursor: cursor|| null,
    textDecoration:'none'
  }

  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Avatar