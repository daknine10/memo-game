import { useEffect, useState } from 'react';

export default function Card({ card }) {
    const [isClicked, setIsClicked] = useState(false);

    // useEffect(() => {
    //     const img = await fetch()
    // })

    return (
        <li className="card">
            <h2 className="card-title">{card.name}</h2>
            <img src={card.url} alt={card.name} />
        </li>
    )
}