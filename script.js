const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const dialog = document.querySelector(".project-dialog");
const closeDialogButton = dialog.querySelector(".dialog__close");
const projectButtons = document.querySelectorAll(".project__button");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeMenu = () => {
  body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const openProject = (project) => {
  const image = dialog.querySelector("img");
  image.src = project.dataset.image;
  image.alt = project.dataset.alt;
  dialog.querySelector(".dialog__type").textContent = project.dataset.year;
  dialog.querySelector("h2").textContent = project.dataset.title;
  dialog.querySelector(".dialog__location").textContent = project.dataset.location;
  dialog.querySelector(".dialog__description").textContent = project.dataset.description;
  dialog.showModal();
  body.classList.add("dialog-open");
};

projectButtons.forEach((button) => {
  button.addEventListener("click", () => openProject(button.closest(".project")));
});

const closeProject = () => {
  dialog.close();
  body.classList.remove("dialog-open");
};

closeDialogButton.addEventListener("click", closeProject);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});

dialog.addEventListener("close", () => body.classList.remove("dialog-open"));

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();
