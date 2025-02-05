import { useEffect, useState } from 'react';
import Card from './Card.jsx'
import cards from './cards.js'
import './Game.css'

export default function Game() {
    const [isFailed, setIsFailed] = useState(false);

    const handleFail = () => {
        setIsFailed(true)
    }

    const handleShuffle = () => {
        const newComponents = shuffle([...cardComponents])
        console.log(newComponents)
        setCardComponents(newComponents)
    }

    const cardArr = []
    cards.forEach((card, index) => {cardArr.push(<Card key={index} card={card} handleFail={handleFail} handleShuffle={handleShuffle}/>)})
    const [cardComponents, setCardComponents] = useState(cardArr)
    


    return (
        <ul className='container'>
            {!isFailed ? (cardComponents) : (<div> YOU LOSE! </div>)}
        </ul>
    )
}

function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}