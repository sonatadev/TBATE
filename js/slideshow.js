let myIndex = 0;
carousel();

function carousel() {
  let x = document.getElementsByClassName("mySlides");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].classList.add("active");
  setTimeout(carousel, 4500); 
}
