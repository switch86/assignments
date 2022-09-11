import React from "react"

function Joke(props) {
    return (
    <div className="joke">
        <p>{props.Setup}</p>
        <p>{props.Punchline}</p>
    </div>
    )
}

export default Joke