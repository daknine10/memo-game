import { useEffect, useState } from 'react';
import Card from './Card.jsx'
import cards from './cards.js'

export default function Game() {
    const cardComponents = []
    cards.forEach((card, index) => {cardComponents.push(<Card key={index} card={card}/>)})

    return (
        <ul>
            {cardComponents}
        </ul>
    )
}

