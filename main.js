const mainContainer = document.createElement('div')
mainContainer.className = 'jokes-container'
document.body.appendChild(mainContainer)

const loadJokes = async () => {
  try{
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
    displayCharacters(data)
  } catch(err) {
    console.log(err)
  }
}
loadJokes()

function refreshJokes () {
  window.location.reload();
}

const jokesString = document.querySelector('.jokes-container')

const displayCharacters = (jokes) => {
  jokesString.innerHTML = `
  <div class="container">
  <h1>Chuck Norris Jokes</h1>
  <p>Yes, some are dumb tho...</p>
  <p class="jokes">${jokes.value}</p>
  <button class="btn" onClick='refreshJokes()'>Click to get new joke</button>
</div>
`
}