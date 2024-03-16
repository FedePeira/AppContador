import Notes from './Notes'
import NewNote from './NewNote'
import React from 'react'

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }
  
  return (
    <div>
      <NewNote />
      <div>
        all          <input type="radio" name="filter"
          onChange={() => filterSelected('ALL')} />
        important    <input type="radio" name="filter"
          onChange={() => filterSelected('IMPORTANT')} />
        nonimportant <input type="radio" name="filter"
          onChange={() => filterSelected('NONIMPORTANT')} />
      </div>
      <Notes />
    </div>
  )
}

export default App