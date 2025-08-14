// UTF-8 encoded JavaScript for From Creation to Covenant website

// === Dynamic Timeline Card Generation ===
const timelineItems = [
  { title: "Creation and the Image of God", file: "creation.html", ref: "Genesis 1–2", image: "images/placeholder1.jpg" },
  { title: "The Fall and the First Promise", file: "fall.html", ref: "Genesis 3", image: "images/placeholder2.jpg" },
  { title: "Noah and the Flood", file: "noah.html", ref: "Genesis 6–9", image: "images/placeholder3.jpg" },
  { title: "Tower of Babel", file: "babel.html", ref: "Genesis 11", image: "images/placeholder4.jpg" },
  { title: "Covenant with Abraham", file: "abraham.html", ref: "Genesis 12, 15, 17", image: "images/placeholder5.jpg" },
  { title: "Preservation Through Joseph", file: "joseph.html", ref: "Genesis 37–50", image: "images/placeholder6.jpg" },
  { title: "Moses: Birth and Calling", file: "moses.html", ref: "Exodus 1–4", image: "images/placeholder7.jpg" },
  { title: "God Remembers His Covenant", file: "covenant_remembered.html", ref: "Exodus 2:24–25", image: "images/placeholder8.jpg" },
  { title: "The Passover", file: "passover.html", ref: "Exodus 12", image: "images/placeholder9.jpg" },
  { title: "The Exodus", file: "exodus.html", ref: "Exodus 14", image: "images/placeholder10.jpg" },
  { title: "Covenant at Sinai", file: "sinai.html", ref: "Exodus 19–20", image: "images/placeholder11.jpg" },
  { title: "The Tabernacle", file: "tabernacle.html", ref: "Exodus 25–40", image: "images/placeholder12.jpg" }
];

const container = document.getElementById("timeline-container");

timelineItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "timeline-card";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  const link = document.createElement("a");
  link.href = `pages/${item.file}`;
  link.textContent = `${item.title} (${item.ref})`;

  card.appendChild(img);
  card.appendChild(link);
  container.appendChild(card);
});

// === Mobile Menu Toggle with Icon Animation ===
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggleIcon = document.getElementById("menuToggle");

  menu.classList.toggle("open");
  toggleIcon.classList.toggle("open");

  // Change icon text
  toggleIcon.textContent = menu.classList.contains("open") ? "✖" : "☰";
};

// Highlight active timeline node
document.querySelectorAll(".timeline-node").forEach(link => {
  const currentPage = window.location.pathname.split("/").pop();
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active-node");
  }
});

function togglePanel(id) {
  const panel = document.getElementById(id);
  panel.style.display = panel.style.display === "block" ? "none" : "block";
};

