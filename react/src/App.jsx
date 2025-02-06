import { useState, useEffect } from 'react';
import './App.css'
import Game from './components/Game.jsx'

export default function App() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const breeds = ['abyssinian', 'bengal', 'british longhair', 'chausie', 'sphynx', 'turkish angora', 'somali', 'ragdoll', 'aegean', 'asian']
        const data = []
        async function getCats() {
            console.log('fetching cats')
            for (let breed of breeds) {
                fetch(`https://api.api-ninjas.com/v1/cats?name=${breed}`, {
                    method: 'GET',
                    headers: {'X-Api-Key': 'XKc15D8DGgOdWjjwihSDwQ==kpEPznCfohq954yL'}
                })
                .then(response => response.json())
                .then(response => data.push({name: response[0].name, url: response[0].image_link}))
                .catch(error => console.log(error))         
            }
            setLoading(false)
            setCards([data])
        }
        getCats()
    }, [])

    return (
        <div>
            {loading ? <Game cards={cards}/> : <div>Loading...</div>}
        </div>
  )
}
