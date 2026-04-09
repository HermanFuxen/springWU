window.addEventListener('scroll', showhead);
  
function showhead(){
  const header = document.querySelector('header');
  if (window.scrollY > 40) {
    header.classList.add('viewheader');
  } else {
    header.classList.remove('viewheader');
  }
}


document.querySelector("img.menubutton").addEventListener("click",showMenu)

document.querySelector("div.menu").addEventListener("click",showMenu)

function showMenu(){
  document.querySelector("div.menu").classList.toggle("hide");
  document.querySelectorAll("div.menu p").forEach(p => {p.classList.toggle("hidee");});
};  