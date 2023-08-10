import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  const name = props.name
  const age = props.age

  const NacAn = () => {
    const ActualAn = new Date().getFullYear()
    return ActualAn - age
  }
  return (
    <div>
      <p>Buenas {name}, tienes {age} años de edad ¿verdad?</p>
      <p>Entonces naciste el {NacAn()}</p>
    </div>
  )
}

const App = () => {

  const name=["Johan","Leo"]
  const age = ["21","22-1"]

  return (
    <div>
      <h1>Saludos, mi estimado:</h1>
      <br />
      <Hello name="Marco" age={10+12}/>
      <Hello name={name[0]} age={age[0]}/>
      <Hello name={name[1]} age={age[1]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))