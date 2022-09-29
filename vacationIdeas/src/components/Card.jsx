export default function Card(item) {
    let cost 
    if (item.price <= 500) {
        cost = "$"
    } else if (item.price <= 1000) {
        cost = "$$"
    } else if (item.price > 1000) {
        cost = "$$$"
    }
    return (
        <div className={item.timeToGo}>
            <div className="Headline">
                <h1>{item.place}</h1>
                <span>{cost}</span>
            </div>
            <h2>Cost Estimate: ${item.price}.00</h2>
            <h3>Best time to plan a trip: {item.timeToGo}</h3>
        </div>
    )
}