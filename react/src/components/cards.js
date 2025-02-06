const cards = [
    {
        name: 'something1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    },
    {
        name: 'something2',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    },
    {
        name: 'something3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    },
    {
        name: 'something5',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    },
    {
        name: 'something6',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    },
    {
        name: 'something7',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    },
    {
        name: 'something8',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg',
    }
]

export default cards

// const breeds = ['abyssinian', 'bengal', 'british longhair', 'chausie', 'sphynx', 'turkish angora', 'somali', 'ragdoll', 'aegean', 'asian']
// let data = []

// async function getBreeds() {
//     try {
//         for (let breed of breeds) {
//             const response = await fetch(`https://api.api-ninjas.com/v1/cats?name=${breed}`, {
//                 method: 'GET',
//                 headers: {'X-Api-Key': 'XKc15D8DGgOdWjjwihSDwQ==kpEPznCfohq954yL'}
//             })
//             const json = await response.json()
//             data.push(json)
//             cards.push({name: json[0].name, url: json[0].image_link})
//         }
//     }
//     catch {
//         console.log('Error')
//     }
// }

// getBreeds()