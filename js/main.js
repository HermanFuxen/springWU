window.addEventListener('scroll', showhead);
  
function showhead(){
  const header = document.querySelector('header');
  if (window.scrollY > 40) {
    header.classList.add('viewheader');
  } else {
    header.classList.remove('viewheader');
  }
}


let button = document.querySelector("img.menubutton")
button.addEventListener("click",showMenu)

let graylayer = document.querySelector("div.fadelayer");
graylayer.addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("showmenu");

    graylayer.classList.toggle("visible");
};