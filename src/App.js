import Notes from './components/Notes'
import NewNote from './components/NewNote'
import React from 'react'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initializeNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes()) 
  }, [dispatch]) 
  /*
  useEffect(() => {
    noteService
      .getAll().then(notes => dispatch(setNotes(notes)))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  */

  return (
    <div>
      <NewNote />
      <VisibilityFilter/>
      <Notes />
    </div>
  )
}

export default App