import React from 'react'

function myElement(name) {
    return name.map(name =>
        <ul key={name}>
            {`${name}`}
        </ul>
        
    )
}

function Eample(props) {
  return (
    <div>
        <h3>
            {myElement(props.name)}
        </h3>
    </div>
  )
}

export default Eample