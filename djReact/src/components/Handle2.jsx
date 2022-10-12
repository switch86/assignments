// import setColors from "../App.jsx"

export default function HandleTwo(props) {
    console.log(props.colors[0])
    if (props.colors[0] === "white") {
        props.colors.map(color => {
          return ("black")
      })
    } else if (props.colors[0] != "white"){
        props.colors.map(color => {
          return ("white")
      })
    }
  }