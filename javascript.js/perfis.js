const searchForm = document.querySelector('#search-form')
const username = document.querySelector('#username')
const nameElement = document.querySelector('#name')
const locationElement = document.querySelector('#location')
const emailElement = document.querySelector('#email')
const imagemprofileElement = document.querySelector('#imagemprofile')
const descriptionElement = document.querySelector('#description')
const recent = document.querySelector('#recent')

let users = JSON.parse(localStorage.getItem('users')) ||  []

renderRecent()

searchForm.addEventListener('submit' , async function(evt){
    evt.preventDefault()
    await fetchUserData(username.value)
    username.value = ''
    renderRecent() 
})


async function fetchUserData(username) {
    const resposta = await fetch(`https://api.github.com/users/${username}`) 
    const dados = await resposta.json() 

    nameElement.innerHTML = dados.name
    locationElement.innerHTML = dados.location
    emailElement.innerHTML = dados.email
    imagemprofileElement.src = dados.avatar_url
    descriptionElement.innerHTML = dados.bio

    users.push({login: dados.login, html_url: dados.html_url})
    localStorage.setItem('users', JSON.stringify(users))
    //console.log(users)
        

}

function renderRecent() {
    recent.innerHTML = ''
    users.forEach(function(el){
    
        const li = document.createElement('li')
        const a = document.createElement('a')
        
        a.href = el.html_url
        a.innerHTML = el.login
        li.append(a)
        recent.append(li)  
    })
} 