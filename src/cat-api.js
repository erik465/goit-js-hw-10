export const fetchBreeds = (el) =>{
    return fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => {
        for(let i of data){
            el.insertAdjacentHTML('beforeend', 
            `
            <option value="${i.id}">${i.name}</option>

            `)
        }
    })
}

export const fetchCatInfo = (breedId) => {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.json())
    .then(data => {
        data = data[0]
        return data
    })
}

export const fetchCatByBreed = (breedId) =>{
    console.log('BREED ID: ' + breedId)
    return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let el = data.find(el => el.id === breedId)
        return el
    })
}