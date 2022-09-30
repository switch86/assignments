import Data from "../assets/Data.jsx"
import Friend from "./Friend.jsx"

export default function FriendList() {
    let i = 0
    const Friends = Data.map(friend => {
        i++
        return (
        <Friend 
            key={i}
            {...friend}
        />  
        )
    })

    return (
        <div>
        {Friends}
        </div>
    )
}