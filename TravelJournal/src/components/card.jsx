export default function card(data) { 
    return (
        <div className="Entry">
            <img src={data.imageUrl} className="Image"></img>
            <section className="Info">
                <div>
                <img src="/pin.png" className="Pin"></img>
                <h3>{data.location.toUpperCase()}</h3>
                <a href={data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{data.title}</h1>
                <span>{data.startDate} - {data.endDate}</span>
                <p>{data.description}</p>
            </section>
        </div>
    )
}