import { useEffect, useState } from 'react';
import Card from './Card.jsx'
import './Game.css'

export default function Game({ cards }) {
    const [isWon, setIsWon] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleFail = () => {
        setIsFailed(true)
    }
    
    const handleWin = () => {
        setIsWon(false)
    }

    const handleShuffle = () => {
        setScore(prevScore => {
            const newScore = prevScore + 1;
            if (newScore === 2) {
                setIsWon(true);
            }
            return newScore;
        });
        const newComponents = shuffle([...cardComponents])
        setCardComponents(newComponents)
    }

    const handleRetry = () => {
        setIsFailed(false);
        if (score > bestScore) {
            setBestScore(score)
        }
        setScore(0);
    }

    const cardArr = []
    cards.forEach((card, index) => {cardArr.push(<Card key={index} card={card} handleFail={handleFail} handleShuffle={handleShuffle}/>)})
    const [cardComponents, setCardComponents] = useState(cardArr)
    


    return (
        <div className='container'>
            <h1>Current Score: {score}</h1>
            {!isWon ?
                !isFailed ? 
                <ul className='card-container'>
                    {cardComponents}
                </ul> : 
                (<>
                    <div> YOU LOSE! </div>
                    <button onClick={handleRetry}>TRY AGAIN!</button>
                </>
                )
                : 
                <>
                    <div> ROUND WON! </div>
                    <button onClick={handleWin}>CONTINUE</button>
                </>}
            <h2>Best Score: {bestScore}</h2>
        </div>
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