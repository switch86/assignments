// import App from "../App.jsx"
export default function Square(props) {
    console.log("Square rendered")
    let i=0
    return (
        <div className="colors">
            {props.colors.map(color => {
                i++
                return (
                    <div className={color} key={i}></div>)
                })}
            <button onClick={props.handleClickOne}>Button 1</button>
            <button onClick={props.handleClickTwo}>Button 2</button>
            <button onClick={props.handleClickThree}>Button 3</button>
            <button onClick={props.handleClickFour}>Button 4</button>
            <button onClick={props.handleClickFive}>Button 5</button>
            <button onClick={props.handleClickSix}>Button 6</button>
            <button onClick={props.handleClickSeven}>Button 7</button>
            <button onClick={props.handleClickEight}>Button 8</button>
                </div>
    )
}