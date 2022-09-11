import React from "react"
import Joke from "./components/joke.jsx"

const Jokes = [
    {
        Setup: "I got my daughter a fridge for her birthday.",
        Punchline: "I can't wait to see her face light up when she opens it.",
    },{
        Setup: "How did the hacker escape the police?",
    Punchline: "He just ransomware!",
},{
    Setup: "Why don't pirates travel on mountain roads?",
    Punchline: "Scurvy.",
},{
    Setup: "Why do bees stay in the hive in the winter?",
    Punchline: "Swarm.",
},{
    Setup: "What's the best thing about Switzerland?",
    Punchline: "I don't know, but the flag is a big plus!",
}]


function App() {
    let num = Math.floor(Math.random() * Jokes.length)

    return (
        <div className="App">
            <Joke 
            Setup={Jokes[num].Setup}
            Punchline={Jokes[num].Punchline}
            />
        </div>
        )
    }

export default App

        
                    // <Joke 
                    //     Setup="How did the hacker escape the police?"
                    //     Punchline="He just ransomware!"
                    // />
        
                    // <Joke 
                    //     Setup="Why don't pirates travel on mountain roads?"
                    //     Punchline="Scurvy."
                    // />
        
                    // <Joke 
                    // Setup="Why do bees stay in the hive in the winter?"
                    // Punchline="Swarm."
                    // />
        
                    // <Joke 
                    // Setup="What's the best thing about Switzerland?"
                    // Punchline="I don't know, but the flag is a big plus!"
                    // />