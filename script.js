window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.05)";
  }, 800);

  setTimeout(() => {
    intro.remove();
  }, 2200);
});

const section = document.querySelector(".profile-cinematic");
const image = document.querySelector(".profile-image");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const description = document.querySelector(".profile-description");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;
  const shift = 18;
  // keluar jika belum masuk atau sudah lewat
  if (rect.top > 0 || rect.bottom < vh) return;

  let progress = -rect.top / (section.offsetHeight - vh);

  progress = Math.min(Math.max(progress, 0), 1);

  /* IMAGE CINEMATIC ZOOM */
  image.style.transform = `
    scale(${1.4 - progress * 0.4})
  `;
  const spacingStart = -0.03;
  const spacingEnd = 0.05;

  const currentSpacing = spacingStart - progress * (spacingStart - spacingEnd);

  firstName.style.letterSpacing = `${currentSpacing}em`;
  lastName.style.letterSpacing = `${currentSpacing}em`;

  /* TEXT RISE */
  firstName.style.opacity = progress;
  firstName.style.transform = `
    translate(5%, ${120 - progress * 120}px)
  `;
  lastName.style.opacity = progress;
  lastName.style.transform = `
    translate(-5%, ${120 - progress * 120}px)
  `;
  description.style.opacity = progress;
  description.style.transform = `
    translateY(${40 - progress * 40}px)
  `;
});

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 40);
});
