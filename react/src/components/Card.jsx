import { useEffect, useState } from 'react';
import './Card.css'

export default function Card({ card, handleFail, handleShuffle }) {
    const [isClicked, setIsClicked] = useState(false);

    // useEffect(() => {
    //     const img = await fetch()
    // })

    return (
        <li className="card" onClick={() => {
            if (isClicked) handleFail()
            setIsClicked(true)
            handleShuffle()
        }}>
            <h2 className="card-title">{card.name}</h2>
            <img src={card.url} alt={card.name} />
        </li>
    )
}