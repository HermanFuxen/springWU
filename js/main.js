window.addEventListener('scroll', showhead);
  
function showhead(){
  const header = document.querySelector('header');
  if (window.scrollY > 40) {
    header.classList.add('viewheader');
  } else {
    header.classList.remove('viewheader');
  }
}


const btn = document.querySelector("*.menubutton");
const menu = document.getElementById("*.menu");

btn.addEventListener("click",showMenu)

document.querySelector("nav.menu").addEventListener("click",showMenu)

function showMenu(){
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", !isOpen);
  
  document.querySelector("nav.menu").classList.toggle("hide");
  document.querySelectorAll("nav.menu li").forEach(p => {p.classList.toggle("hidee");});
  menu.hidden = isOpen;
};  
