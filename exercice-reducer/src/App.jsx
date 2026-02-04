import './App.css'
import Form from "./Form.jsx"
import List from "./List.jsx"
import Task from "./Task.jsx"

import { useReducer } from 'react';
import { counterReducer } from './counterReducer.js'

const App = () => {
    const [state, dispatch] = useReducer(counterReducer, {count: 0});

    function plus()
    {
        dispatch({type: "INC"});
    }
    
  return (
    <>
      <Form />
      <List />
    </>
  )
}

export default App


