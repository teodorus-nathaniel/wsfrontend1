import { useState } from 'react'
import './App.css'
import Note from './components/Note'

// function sum(a, b) {
//   return a + b
// }

// sum(4, 634)
// sum(4, 453)

function App() {
  const [notes, setNotes] = useState([
    { text: 'Go to University', date: '17 Agustus 1945' },
    { text: 'Sleep', date: '25 September 2000' },
    { text: 'Eat', date: '23 Agustus 2023' },
  ])

  const handleClick = () => {
    setNotes([...notes, { text: 'new data', date: 'new date' }])
  }

  return (
    <div>
      <h1>My Notes</h1>
      <div className='notes-container'>
        {notes.map((note, idx) => (
          <Note key={idx} text={note.text} date={note.date} />
        ))}
      </div>
      <button onClick={handleClick}>add note</button>
    </div>
  )
}

export default App

// function map(callback) {
//   const newArray = []
//   for (let i = 0; i < data.length; i++) {
//     const note = data[i]
//     const newElement = callback(note)
//     newArray.push(newElement)
//   }
//   return newArray
// }

// const array = [1, 2, 3]
// const newArray = array.map((number) => number * 3)
// const newArray = array.map((number) => {
//   return number * 3
// })
// const newArray = array.map(function (number) {
//   return number * 3
// })

// newArray => [3, 6, 9]
