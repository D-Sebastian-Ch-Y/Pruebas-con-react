import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Buenas {props.name}, tienes {props.age} años de edad ¿verdad?</p>
    </div>
  )
}

const App = () => {

  const name=["Johan","Leo"]
  const age = ["21","22-1"]

  return (
    <>
      <h1>Saludos, mi estimado:</h1>
      <br />
      <Hello name="Marco" age={10+12}/>
      <Hello name={name[0]} age={age[0]}/>
      <Hello name={name[1]} age={age[1]}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))