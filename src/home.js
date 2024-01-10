"use strict";

export function createHome() {
  const home = document.createElement("div");
  home.classList.add("hero-container");

  const paragraph = document.createElement("h3");
  paragraph.textContent = "Sarap ng tahanan, sa bawat pinggan";

  const heroBtn = document.createElement("button");
  heroBtn.classList.add("btn");

  const heroLink = document.createElement("a");
  heroLink.textContent = "order now";
  heroLink.classList.add("heroBtn");

  home.appendChild(paragraph);
  home.appendChild(heroBtn);
  heroBtn.appendChild(heroLink);

  return home;
}
