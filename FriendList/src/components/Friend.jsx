import Pets from "./Pets.jsx"

export default function Friend(friend) {
    let i = 0 
    let pets = friend.pets.map(pet => {
        i++
        return (
                <Pets 
                    key={i}
                    {...pet}
                />
        )
    })
    
    pets = (
        <ol>
            {pets}
        </ol>
    )
    return (
        <div className="Friend">
            <h1>{friend.name} has {friend.pets.length} pets </h1>
            <h2>Age: {friend.age}</h2>
            {pets}
        </div>    
    )
}