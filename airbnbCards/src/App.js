import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "../../data.js"


const data = Data.map(card => {
    return (
        <Card 
            img={`./images/${card.coverImg}`}
            id={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            openSpots={card.openSpots}
            />
    )
})
/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
const katiez = {
    img: "./images/katie-zaferes.png",
    rating: "5.0",
    reviewCount: 6,
    country: "USA",
    title: "Life Lessons with Katie Zaferes",
    price: 136,
}

export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            {data}
        </div>
    )
}