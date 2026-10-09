const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const dialog = document.querySelector(".project-dialog");
const closeDialogButton = dialog.querySelector(".dialog__close");
const projectButtons = document.querySelectorAll(".project__button");

const projects = {
  shangrila: {
    title: "Shangrila Resort",
    location: "Ombey, Ladakh",
    type: "Hospitality · Built",
    collaborator: "Guild Studios",
    role: "Design & site construction",
    program: "12 rooms · restaurant · reception",
    description:
      "A resort conceived to remain comfortable through Ladakh's severe winters, pairing a compact hospitality program with passive solar design and materials made directly on site.",
    storyTitle: "Making winter part of the brief.",
    detail:
      "South-facing openings collect the low winter sun while Trombe walls protect service spaces and water pipes from freezing. CSEB bricks were tested and made on site by the local mistri; thick mud plaster, hand-combed in the Ladakhi tradition, gives the buildings their final texture. Slender willow sticks, locally called Talu, define the verandahs.",
    materials: ["CSEB", "Mud plaster", "Pine timber", "Local stone", "Willow Talu"],
    hero: ["shangrila-cottage.jpg", "The cottage during construction, with timber openings and a Talu verandah."],
    gallery: [
      ["shangrila-model.jpg", "A physical model used to communicate the cluster to the client and building team."],
      ["shangrila-trombe-wall.jpg", "A Trombe wall protects the toilet plumbing during winter."],
      ["shangrila-carpenter.jpg", "Timber work being prepared on site."],
      ["shangrila.jpg", "Traditional plaster and timber construction nearing completion."],
    ],
  },
  "apple-orchard": {
    title: "Apple Orchard",
    location: "Hunder, Ladakh",
    type: "Hospitality · Built",
    collaborator: "Guild Studios",
    role: "Design & site construction",
    program: "Six cottages",
    description:
      "Six intimate cottages placed within an existing apple orchard, designed to preserve the trees and turn local craft into a warm, tactile guest experience.",
    storyTitle: "Warmth, shaped by hand.",
    detail:
      "Three cottages include open showers. Gaps within the brick bond are packed with leftover wood shavings, giving waste material a second life as insulation. Curved mud-plastered walls soften thresholds and built-in furniture, while local coloured stone forms a distinctive wall beneath the bedroom skylight.",
    materials: ["Mud plaster", "Timber", "Wood-waste insulation", "Local stone"],
    hero: ["apple-orchard-verandah.jpg", "Sunlight, curved plaster, and timber frame a cottage verandah."],
    gallery: [
      ["apple-orchard.jpg", "A cottage entry held between existing orchard trees."],
      ["apple-orchard-stone-wall.jpg", "Locally gathered coloured stone forms the wall behind the bed."],
      ["apple-orchard-curves.jpg", "Hand-finished curves shape the cottage thresholds and built-in edges."],
      ["apple-orchard-verandah.jpg", "The sheltered verandah is designed as a room within the orchard."],
    ],
  },
  "bauhaus-kumaon": {
    title: "Bauhaus Kumaon",
    location: "Near Almora, Uttarakhand",
    type: "Community · Built",
    collaborator: "Earthbuilding, Ladakh",
    role: "Design collaboration",
    program: "Dorms · cottages · dining · workshop",
    description:
      "A campus of dormitories, cottages, and shared spaces made as directly as possible from materials found in the surrounding mountains.",
    storyTitle: "A building assembled from the mountain.",
    detail:
      "Stone anchors the foundation and plinth; adobe forms the walls; pine becomes tie beams, floor beams, and openings. Lime is used for mortar and finish, with burnt brick reserved for wet areas. Where budget required a metal roof, bubble insulation was introduced below the sheet to improve comfort.",
    materials: ["Stone", "Adobe", "Pine", "Lime", "Burnt brick"],
    hero: ["bauhaus-kumaon.jpg", "The dormitory takes shape within the Kumaon landscape."],
    gallery: [
      ["bauhaus-alcove.jpg", "An alcove derived from traditional Kumaoni architecture."],
      ["bauhaus-adobe.jpg", "An adobe brick sample made for the project."],
      ["bauhaus-roof.jpg", "Pine floor beams and the roof structure define the attic space."],
    ],
  },
  "green-tara": {
    title: "Green Tara Gompa",
    location: "Hunder, Ladakh",
    type: "Sacred · Built",
    collaborator: "Guild Studios",
    role: "Design & construction collaboration",
    program: "Village shrine",
    description:
      "A small public gompa for Hunder village, carefully positioned between the Hunder River and the mountains of the Nubra valley.",
    storyTitle: "A small room in a vast landscape.",
    detail:
      "The project uses a deliberately limited palette rooted in its setting. Yamang, a local slate, forms the ground and roof planes. White Sumur stone from the region is assembled with mud mortar, while the timber-and-glass enclosure keeps the shrine visually connected to the valley.",
    materials: ["Yamang slate", "Sumur stone", "Mud mortar", "Timber", "Glass"],
    hero: ["green-tara-wide.jpg", "The gompa sits between river stone and the Nubra mountains."],
    gallery: [
      ["green-tara-setting.jpg", "A tall view reveals the shrine's relationship to the stone path and valley."],
      ["green-tara-wide.jpg", "Local slate and stone root the glass enclosure in its setting."],
    ],
  },
  "kangri-chaupal": {
    title: "Kangri Chaupal",
    location: "Nagrota Bagwan, Himachal Pradesh",
    type: "Community · Proposal",
    collaborator: "Independent",
    role: "Studio Undertrees' first independent project",
    program: "1,500 sq ft community space",
    description:
      "A pilot community building intended to demonstrate the contemporary relevance of Himachal's vernacular architecture and host local NGO meetings and workshops.",
    storyTitle: "Reframing the familiar.",
    detail:
      "The proposal responds to winter winds, summer sun, and views of the Dhauladhar range. Adobe walls, stone plinths, pine tie beams, bamboo openings, and a slate roof were all available within ten kilometres. A rammed-earth projection wall turns the main room into a flexible gathering space.",
    materials: ["Adobe", "Stone", "Pine", "Bamboo", "Slate", "Rammed earth"],
    hero: ["kangri-chaupal.jpg", "The proposed approach to the community space."],
    gallery: [
      ["kangri-west.jpg", "West elevation with deep shelter at the building edge."],
      ["kangri-southeast.jpg", "South-east view showing the long, low roof and local material palette."],
      ["kangri-interior.jpg", "The proposed gathering room frames the distant Dhauladhar peaks."],
    ],
  },
  "apple-cottage": {
    title: "Apple Cottage",
    location: "Hunder, Ladakh",
    type: "Interior · Built",
    collaborator: "Studio Undertrees",
    role: "Design input, interior & complete site construction",
    program: "Guest cottage",
    description:
      "A compact passive solar cottage where built-in furniture, local stone, and a carefully placed skylight make the interior feel both generous and grounded.",
    storyTitle: "One room, many places to pause.",
    detail:
      "The mud-plastered envelope is insulated with wood waste. Furniture is absorbed into the architecture to save floor area, while clerestory openings pull light deep into the room. A skylight over the bed washes a locally sourced stone wall with changing daylight.",
    materials: ["Mud plaster", "Wood-waste insulation", "Local stone", "Timber"],
    hero: ["apple-cottage.jpg", "Built-in furniture organizes the open cottage interior."],
    gallery: [
      ["apple-cottage-render-two.jpg", "An interior study of the sleeping and sitting areas."],
      ["apple-cottage-render-three.jpg", "The bed, stone wall, and clerestory are composed as one element."],
      ["apple-cottage-build.jpg", "The mud-plastered cottage during construction."],
      ["apple-cottage-stone.jpg", "Locally sourced stones beneath the skylight behind the bed."],
    ],
  },
};

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
  const data = projects[project.dataset.projectId];
  const heroImage = dialog.querySelector(".dialog__hero img");
  heroImage.src = `assets/images/${data.hero[0]}`;
  heroImage.alt = data.hero[1];
  dialog.querySelector(".dialog__hero figcaption").textContent = data.hero[1];
  dialog.querySelector(".dialog__type").textContent = data.type;
  dialog.querySelector("h2").textContent = data.title;
  dialog.querySelector(".dialog__location").textContent = data.location;
  dialog.querySelector(".dialog__description").textContent = data.description;
  dialog.querySelector(".dialog__story h3").textContent = data.storyTitle;
  dialog.querySelector(".dialog__detail").textContent = data.detail;

  const facts = [
    ["Collaboration", data.collaborator],
    ["Role", data.role],
    ["Program", data.program],
  ];
  dialog.querySelector(".dialog__facts").innerHTML = facts
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
  dialog.querySelector(".dialog__materials").innerHTML = data.materials
    .map((material) => `<span>${material}</span>`)
    .join("");
  dialog.querySelector(".dialog__image-count").textContent =
    `${String(data.gallery.length).padStart(2, "0")} images`;
  dialog.querySelector(".dialog__gallery").innerHTML = data.gallery
    .map(
      ([source, caption], index) => `
        <figure>
          <img src="assets/images/${source}" alt="${caption}" loading="lazy">
          <figcaption><span>${String(index + 1).padStart(2, "0")}</span><span>${caption}</span></figcaption>
        </figure>
      `,
    )
    .join("");
  dialog.showModal();
  dialog.querySelector(".dialog__scroll").scrollTop = 0;
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
