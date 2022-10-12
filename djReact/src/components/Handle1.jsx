import React from "react"
import App from "../App"

export default function HandleOne(props) {
  console.log("HandleOne rendered")
  colors = [...props.colors]
  if (colors[0] === "white") {
      colors.map(color => "black")
  } else if (colors[0] != "white"){
      colors.map(color => "white")
  } 
  props.setColors(colors)
} 
    // if (props.colors[0] === "white") {
    //     colorsArray = props.colors.map(color => {
    //       return ("black")
    //   })
    // } else if (props.colors[0] != "white"){
    //     colorsArray = props.colors.map(color => {
    //       return ("white")
    //   })
    // } 
    
