//const pokeUrl = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png ;
const body = document.querySelector('body');
const container = document.querySelector('#container');
const newImg = document.createElement('img');
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" ;
container.appendChild(newImg);

// for (let i = 1; i <=151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add("pokemon-slot")
//     pokemon.classList.add('Pokemon'); // add class for div
//     const label = document.createElement('span');
//     label.innerText = `${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png `;
//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon);
// }


function putPokemonsOnScreenHelper() {
  putPokemonsOnScreen();

}

function putPokemonsOnScreen(){

    let startTimer = Date.now();

    let randonNum = Math.ceil( Math.random() * 900);

    const pokemon = document.createElement('div');
    pokemon.classList.add("entity")
    pokemon.classList.add("pokemon-slot")
    pokemon.classList.add('Pokemon'); // add class for div
    const label = document.createElement('span');
    label.innerText = `${randonNum}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${randonNum}.png `;
    pokemon.style.width = 96 + 'px'; // size of image
    pokemon.style.height =  96 + 'px';
    console.log(newImg.naturalWidth);
  

    let x;
    let y;
    let trials = 10;

    x = Math.floor( Math.random() * 90);
    y = Math.floor( Math.random() * 85);
    pokemon.style.top = y + '%';
    pokemon.style.left = x + '%';
    pokemon.style.position = 'absolute';
    body.appendChild(pokemon);


   

 
    while(overlayCheck(pokemon)){
      let endTimer = Date.now();
      body.removeChild(body.lastChild);
      console.log("Overlap")
      console.log((endTimer - startTimer)/1000);
      if ((endTimer - startTimer)/1000 > 4) {
        return;
      }
      x = Math.floor( Math.random() * 90);
      y = Math.floor( Math.random() * 85);
      pokemon.style.top = y + '%';
      pokemon.style.left = x + '%';
      pokemon.style.position = 'absolute';
      body.appendChild(pokemon);
    }

    
    pokemon.appendChild(newImg);
  


}


// function overlayCheck(elementToCheck) {
//     let points = document.querySelectorAll('.entity');

//     let rect1 = elementToCheck.getBoundingClientRect();
   
    
//     for (let i = 0; i < points.length; i++) {
//       let rect2 = points[i].getBoundingClientRect();

//       console.log(rect2.top);
//       console.log(rect1.top);

//       let isOverlapping = !(

//         ((rect2.top <= rect1.top) && (rect1.top <= rect2.bottom)) &&
//         ((rect2.top <= rect1.bottom) && (rect1.bottom <= rect2.bottom)) &&
//         ((rect2.left <= rect1.left) && (rect1.left <= rect2.right)) &&
//         ((rect2.left <= rect1.right) && (rect1.right <= rect2.right))
//       );

//       console.log(isOverlapping);

//       if (isOverlapping) {
//         return true;
//       }
//     }
//     return false;

// }

function  overlayCheck(elementToCheck) {
  let points = document.querySelectorAll('.entity');
  let rightPos = (elem) => elem.getBoundingClientRect().right;
  let leftPos = (elem) => elem.getBoundingClientRect().left;
  let topPos = (elem) => elem.getBoundingClientRect().top;
  let btmPos = (elem) => elem.getBoundingClientRect().bottom;

  for (let i = 0; i < points.length; i++) { 
      let isOverlapping = !(
        rightPos(elementToCheck) < leftPos(points[i]) ||
        leftPos(elementToCheck) > rightPos(points[i]) ||
        btmPos(elementToCheck) < topPos(points[i]) ||
        topPos(elementToCheck) > btmPos(points[i])
      );

      if (isOverlapping && elementToCheck !== points[i]) {
         
      //   points[i].innerHTML = `${points[i].innerHTML} C`;
      
        return true;
      }
  }
  return false;
}
