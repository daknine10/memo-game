import { useEffect, useState } from 'react';
import './Card.css'

export default function Card({ card, handleFail, handleShuffle }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) return handleFail()
        setIsClicked(true)
        handleShuffle()
    }

    return (
        <li className="card" onClick={handleClick}>
            <h2 className="card-title">{card.name}</h2>
            <img src={card.url} alt={card.name} />
        </li>
    )
}