export default function Meme() {
    return (
        <div className="Meme">
            <form className="MemeForm">
                <input className="input1" placeholder="Shut up"></input>
                <input className="input2" placeholder="and take my money"></input>
                <button onClick={f} className="formButton">Get a new meme image</button>

                <img src=""></img>
            </form>
        </div>
    )
}