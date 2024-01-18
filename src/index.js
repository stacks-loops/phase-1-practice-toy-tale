document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:3000/toys')
.then(resp => resp.json())
.then(data => renderToys(data))

function renderToys(toysArray) {
  const toysContainer = document.querySelector('#toy-collection')

  toysArray.forEach((toyObj) => {
    const eachCard = document.createElement('div')
    eachCard.classList.add('card')

    const name = document.createElement('h2')
    const image = document.createElement('img')
    const likes = document.createElement('h2')

    name.innerText = toyObj.name
    likes.innerText = toyObj.likes
    image.src = toyObj.image

    eachCard.append(name, image, likes)
    toysContainer.append(eachCard)

   
  })
  

}
})
