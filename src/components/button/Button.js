import React from 'react'

function Button(prop) {
  
    const {children,...attr} = prop;
    
  return (
    <button {...attr} >
        {children}
    </button>
  )
}

export default Button
