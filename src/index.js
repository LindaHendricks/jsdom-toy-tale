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

const toyGetrequest = `http://localhost:3000/toys`

fetch (toyGetrequest)
  .then(response => response.json())
  .then(toyObject => { 
    toyObject.forEach(element => console.log(element))
  })

//   function renderToy(toyObject){
//     // const h2 = 
//     // h2.textContent
//     // const img = 
//     // const p = 
//   }

// toyObject = 
//     const toyDivCard = document.createElement('div#card')
//     toyDivCard.innerHTML = `
//     <h2>${name}</h2>
//     <img src=${image} class="toy-avatar" />
//     <p>${likes} </p>
//     <button class="like-btn">Like <3</button>
//     `

//     const parentDiv = document.querySelector('div#toy-collection')