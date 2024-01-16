"use strict";

"use strict";

export default function createNavButton() {
  const heroBtn = document.createElement("button");
  heroBtn.classList.add("heroBtn");

  heroBtn.style.cursor = "url(/dist/img/rocket.png), auto";

  const strong = document.createElement("strong");
  strong.textContent = "sign up";

  const containerStar = document.createElement("div");
  containerStar.id = "container-stars";

  const stars = document.createElement("div");
  stars.id = "stars";

  const glow = document.createElement("div");
  glow.id = "glow";

  const circle1 = document.createElement("div");
  circle1.classList.add("circle");

  const circle2 = document.createElement("div");
  circle2.classList.add("circle");

  heroBtn.appendChild(strong);
  heroBtn.appendChild(containerStar);
  containerStar.appendChild(stars);

  heroBtn.appendChild(glow);
  glow.appendChild(circle1);
  glow.appendChild(circle2);

  return heroBtn;
}
