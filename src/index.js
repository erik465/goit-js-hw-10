import axios from "axios";
import { fetchBreeds, fetchCatInfo, fetchCatByBreed } from "./cat-api";

axios.defaults.headers.common["x-api-key"] = "live_Vnd06dJWCytTc82Q7h4QP8t8NOKac8WrpxmMD6fIz69xBXe7RF00MmPgmMya6T0h";


const selectBreedsEl = document.querySelector('select')
const catInfoEl = document.querySelector('.cat-info')
const loaderEl = document.querySelector('.loader')
const errorEl = document.querySelector('.error')

loaderEl.classList.add('hidden')
errorEl.classList.add('hidden')

fetchBreeds(selectBreedsEl)

selectBreedsEl.addEventListener('change', () => {
    catInfoEl.innerHTML = ''
    loaderEl.classList.remove('hidden')
    errorEl.classList.add('hidden')

    
    console.log('SELECT ' + selectBreedsEl.value)
    fetchCatInfo(selectBreedsEl.value)
    .then(data => {
        fetchCatByBreed(selectBreedsEl.value)
        .then(info => {
            loaderEl.classList.add('hidden')

            catInfoEl.innerHTML = `
            <img src="${data.url}"/>
            <div class="cat-desc">
                <h1>${info.name}</h1>
                <p>${info.description}</p>
                <p><b>Temperament</b> ${info.temperament} </p>
            </div>
        `
        })
        .catch(err => {
            console.warn
            errorEl.classList.remove('hidden')

        })

        
    })
    .catch(err => {
        console.warn
        errorEl.classList.remove('hidden')

    })
    
    
})