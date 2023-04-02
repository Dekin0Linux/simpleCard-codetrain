import React from 'react'

function Image(props) {
  return (
    <div>
        <img src={props.imgUrl} alt="imgHere" width="150px"/>
    </div>
  )
}

export default Image