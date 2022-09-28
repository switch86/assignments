export default function Card(data) {
    return (
        <div className="Card">
        <h1>{data.title}</h1>
        <h2>{data.subTitle}</h2>
        <span>Posted by {data.author} on {data.date}</span>
        </div>
    )
}