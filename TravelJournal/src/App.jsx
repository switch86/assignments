import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Entries from './components/card.jsx'
import data from './assets/data.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let Entry = data.map(e => {
  return <Entries 
        key={e.id}
        {...e}
        />
})

  
  


  return (
    <main>
    <header>
      <h1>Berlove-Sanchez Travel Journal</h1>
    </header>
    <section className="Trip">
      {Entry}
    </section>
    </main>
  )
}

export default App
