const header = document.querySelector("#header"),
  menu = header.querySelector(".menu"),
  hbg = header.querySelector(".hbg"),
  filters = document.querySelectorAll(".filter"),
  filterAll = filters[0],
  filterWeb = filters[1],
  filterGame = filters[2],
  achievements = document.querySelectorAll(".project-progress"),
  projectCard = document.querySelectorAll(".project-card"),
  projectType = document.querySelectorAll(".project-type");

//Header scrolling event

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 80) {
    header.classList.add("scrolled");
    header.classList.remove("noscroll");
  } else if (scroll <= 80) {
    header.classList.remove("scrolled");
    header.classList.add("noscroll");
  }
});

//EventListener menu display with hbg

hbg.addEventListener("click", (e) => {
  e.preventDefault;
  if (e) {
    menu.classList.toggle("closed");
  }
});

//Project filters events

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === filter) {
      filterAll.classList.remove("selected");
      filterWeb.classList.remove("selected");
      filterGame.classList.remove("selected");
      filter.classList.add("selected");
    }

    for (let i = 0; i < projectType.length; i++) {
      if (filter === filterWeb) {
        projectCard[i].classList.remove("none");
        if (projectType[i].innerText === "Jeu vidéo") {
          projectCard[i].classList.add("none");
        }
      } else if (filter === filterGame) {
        projectCard[i].classList.remove("none");
        if (projectType[i].innerText === "Web") {
          projectCard[i].classList.add("none");
        }
      } else if (filter === filterAll) {
        projectCard[i].classList.remove("none");
      }
    }
  });
});

//Project-achievements behavior
achievements.forEach((achievement) => {
  if (achievement.innerHTML === "Terminé") {
    achievement.classList.remove("in-progress");
    achievement.classList.add("done");
  } else if (achievement.innerHTML === "En cours") {
    achievement.classList.remove("done");
    achievement.classList.add("in-progress");
  }
});
