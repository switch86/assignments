export default function Pets(pet) {
    console.log(pet)
    return (
        <li>
            <ul>
                <li>{pet.name}</li>
                <li>{pet.breed}</li>
            </ul>
        </li>
    )
}