const backToTop = document.getElementById("backtotop");

function checkScroll() {
  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function moveBackToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);

function transformPrev(event) {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;

  const classList = slidePrev.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  if (classList.clientWidth < liList.length * 260 + Number(activeLi)) {
    activeLi = Number(activeLi) - 260;

    slideNext.style.color = "red";
    slideNext.classList.add("slide-next-hover");
  }

  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

const slidePrevList = document.getElementsByClassName("slide-prev");

for (let i = 0; i < slidePrevList.length; i++) {
  let classList =
    slidePrevList[i].parentElement.parentElement.nextElementSibling;
  let liList = classList.getElementsByTagName("li");

  if (classList.clientWidth < liList.length * 260) {
    slidePrevList[i].classList.add("slide-prev-hover");
    slidePrevList[i].addEventListener("click", transformPrev);
  } else {
    const arrowContainer = slidePrevList[i].parentElement;
    arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrevList[i]);
  }
}
