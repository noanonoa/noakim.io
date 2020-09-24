const hamburgerMenu = document.getElementById("hamburgerMenu")
const barGroup = document.getElementById("barGroup")
const bar = document.querySelector(".bar")
const navReg = document.getElementById("nav-reg")

document.addEventListener('click', (e) => {
  if (e.target.id == hamburgerMenu.id) {
    if (!navReg.classList.contains("nav-active")) {
      navReg.classList.add("nav-active")
    } else if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active")
    }
  } else if (e.target.id == barGroup.id) {
    if (!navReg.classList.contains("nav-active")) {
      navReg.classList.add("nav-active")
    } else if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active")
    }
  } else if (e.target.className == "bar") {
    if (!navReg.classList.contains("nav-active")) {
      navReg.classList.add("nav-active")
    } else if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active")
    } 
  } else if (e.target.id != navReg) {
    if (navReg.classList.contains("nav-active")) {
      navReg.classList.remove("nav-active")
    }
  }
})