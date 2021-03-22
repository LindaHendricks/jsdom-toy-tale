
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyGetRequest = `http://localhost:3000/toys`

function getToy() {
fetch (toyGetRequest)
  .then(response => response.json())
  .then(toyObject => { 
    toyObject.forEach(toyObject => renderToy(toyObject))
  })
}

function renderToy(toyObject) {

    const div = document.createElement('div.card')
    div.dataset.id = toyObject.id

    div.innerHTML =
   `<h2>${toyObject.name}</h2>
    <img src='${toyObject.image}' class="toy-avatar" />
    <p>'${toyObject.likes} Likes' </p>
    <button class="like-btn">Like <3</button>`

    const parentDiv = document.querySelector('#toy-collection')
    parentDiv.append(div)
  }


  getToy()

const toyInput = document.querySelector(`body > div.container > form > input.submit`)
toyInput.addEventListener('submit', e => {
  e.preventDefault()
  
  const nameInput = e.target.name.value
  const imageInput = e.target.image.value

//   fetch (`http://localhost:3000/toys`, {
//   method: 'POST',  
//   header: 
// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// },

// body: JSON.stringify({
//   name: nameInput,
//   image: imageInput,
//   likes: 0
// })
//   })
//          debugger
//      .then(response => response.json())
//      .then(newtoyObject => renderToy(newtoyObject))
     
//      //const parentDiv = document.querySelector('#toy-collection')

})



// toyObject = 
//     const toyDivCard = document.createElement('div#card')
//     toyDivCard.innerHTML = `
//     <h2>${name}</h2>
//     <img src=${image} class="toy-avatar" />
//     <p>${likes} </p>
//     <button class="like-btn">Like <3</button>
//     `

//     const parentDiv = document.querySelector('div#toy-collection')