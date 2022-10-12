import './App.css'
import Square from "./components/Square.jsx"
import React from "react"
// import HandleOne from "./components/Handle1.jsx"
// import HandleTwo from "./components/Handle2.jsx"

function App() {
  console.log("App Rendered")
  const [colors, setColors] = React.useState(["red", "orange", "yellow", "green", "blue", "purple", "black", "brown"])
  
  let colorsArray = []

  function handleClickOne() {
    // console.log("click")
    // return ( 
    // <HandleOne 
    //     colors={colors}
    //     setColors={setColors} 
    //   />)
    // }
    if (colors[0] === "white") {
        setColors(colors.map(color => "black"))
    } else if (colors[0] != "white"){
        setColors(colors.map(color => "white"))
    }
    } 
  function handleClickTwo() {
    colorsArray = colors.splice(4, 4)
    setColors(["purple","purple","purple","purple", ...colorsArray])
    } 
  function handleClickThree() {
    colorsArray = [...colors]
    colorsArray[4] = "green"
    colorsArray[5] = "green"
    setColors(colorsArray)
  }
  function handleClickFour() {
    colorsArray = [...colors]
    colorsArray[6] = "green"
    colorsArray[7] = "green"
    setColors(colorsArray)
  }
  function handleClickFive() {
    if (colors[0] === "white") {
      setColors(["black","white","black","white","black","white","black","white"])
    } else {
      setColors(["white", "black","white", "black","white","black","white","black"])
    }
  }
  function handleClickSix() {
    if (colors[0] === "white") {
      setColors(["black","white","black","white", "white", "black","white","black"])
    } else {
      setColors(["white","black","white","black", "black","white","black", "white"])
    }
  }
  function handleClickSeven() {
    if (colors[0] === "white") {
    setColors(["purple","white","purple","white","white","purple","white", "purple"])
  } else {
      setColors(["white","purple","white","purple","purple","white", "purple", "white"])
    }
  }
  function handleClickEight() {
    if (colors[0] === "white") {
      setColors(["purple","white","purple","white","purple","white","purple","white"])
    } else {
    setColors(["white", "purple","white","purple","white","purple","white","purple"])
  }}

    return (
      <div className="App">
      <Square
          colors={colors}
          handleClickOne={handleClickOne}
          handleClickTwo={handleClickTwo}
          handleClickThree={handleClickThree}
          handleClickFour={handleClickFour}
          handleClickFive={handleClickFive}
          handleClickSix={handleClickSix}
          handleClickSeven={handleClickSeven}
          handleClickEight={handleClickEight}
          />
    </div>
  )
}

export default App
