import './App.css'
import {useState} from "react"

function App() {
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith"
    }
  ])
  function ClickButton() {
  setPeople(people => {
    return [
      {
        firstName: "Noah",
        lastName: "Berlove",
      },
      ...people,
    ]
  })  
}//code here)
// function App() {
//   const [color, setColor] = useState("pink")
  
//   function ClickButton() {
//     setColor(color => {
//      if (color !="pink") {
//        return "pink"
//      } else {
  //        return "blue"
  //      }
  //   })
  // // }
  // const [colors, setColors] = useState(["pink", "blue"])
  
  // setColors(prevColors => [...prevColors, "green"])
  return (
    <div className="App">
      <h1>{people[0].firstName} {people[0].lastName}</h1>
      <button onClick={ClickButton}>Click</button>
    </div>
  )
  }



export default App
