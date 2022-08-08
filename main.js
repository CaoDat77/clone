function open() {
  document.querySelector(".molda").style.transform = " translateX(0)";
}

function close() {
  document.querySelector(".molda").style.transform = " translateX(-100%)";
}

const openNav = document.querySelector(".open");
openNav.addEventListener("click", open);

const closeNav = document.querySelector(".close");
closeNav.addEventListener("click", close);
