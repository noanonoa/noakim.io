const hamburgerMenu = document.getElementById("hamburgerMenu")
const barGroup = document.getElementById("barGroup")

const clickHandler = (e) => {
  if (e.target.id == hamburgerMenu.id || barGroup) {
    console.log(`on click, target id = ${e.target.id}`)
  }
}

document.addEventListener("click", clickHandler)