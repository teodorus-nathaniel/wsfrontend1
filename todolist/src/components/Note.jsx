import { useState } from 'react'
import './Note.css'

// const array = [1, 2]
// const [isActive, setIsActive] = array

export default function Note(props) {
  const [isActive, setIsActive] = useState(false)

  let className = ''
  if (isActive) {
    className = 'active'
  }

  function handleClick() {
    setIsActive(!isActive)
  }

  return (
    <div className='note'>
      <div className='note-content'>
        <span>{props.text}</span>
      </div>
      <div className='note-info'>
        <span>{props.date}</span>
        <button onClick={handleClick} className={className}>
          v
        </button>
      </div>
    </div>
  )
}
