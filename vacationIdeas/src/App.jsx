import './App.css'
import Card from "./components/Card.jsx"
import data from "./assets/Data.jsx"
import Header from "./components/Header.jsx"


function App() {
  const cards = data.map(item => {
    return (
      <Card 
        {...item}
      />
    )
  })
  function Page() {
    return(
      <main className="Page">
        <div className="Section">
        <h1>Our Hopes and Dreams!</h1>
        {cards}
        </div>
      </main>
    )
  }
  return (
    <div className="App"> 
      <Header />
        <Page />
    </div>
  )
}

export default App
