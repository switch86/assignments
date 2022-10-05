import Post from './Post'
import Text from "./Text"
import Data from "../assets/Data"
import React from "react"


export default function Meme() {
    let [memesArray, setMemesArray] = React.useState(Data.data.memes)
    // let random = Math.floor(Math.random() * memesArray.length)
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    function getMemeImage() {
        let random = Math.floor(Math.random() * memesArray.length)
        setMemeImage(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[random].url
            }
        })
    }
    return (
        <div className="Meme">
            <div className="MemeForm" name="Form">
                <input name="input1" className="input1" placeholder="Shut up"></input>
                <input name="input2" className="input2" placeholder="and take my money"></input>
                <button onClick={getMemeImage} className="formButton">Get a new meme image</button>
                <img src={memeImage.randomImage}></img>
            </div>
        </div>
    )
}