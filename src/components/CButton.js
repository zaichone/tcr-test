import React from 'react'

export default function CButton({handleClick , label=' ', color='white', background='coral', value}) {
  return (
    <button onClick={handleClick} value={value} style={{color:color, border:'solid 1px black', padding:'10px 15px'}}>{label}</button>
  )
}
