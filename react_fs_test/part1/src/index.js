import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Buenas {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Saludos:</h1>
      <Hello name="Johan"/>
      <br />
      <Hello name="Marco"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))