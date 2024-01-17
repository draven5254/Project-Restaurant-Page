"use strict";

import createFooter from "./footer";
import createHomeButton from "./homeButton";

export default function createHome() {
  const contentDiv = document.getElementById("content");

  const heroImg = document.createElement("img");
  heroImg.src = "/dist/img/background-home-desktop.jpg";
  heroImg.alt = "hero image background";

  const home = document.createElement("div");
  home.classList.add("hero-container");
  // home.style.backgroundImage = "url(/dist/img/background-home-desktop.jpg)";

  home.style.cursor = "url(/dist/img/rocket.png), auto";

  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const paragraph = document.createElement("h3");
  paragraph.textContent = "The taste of home, in every dish";

  const circle1 = document.createElement("div");
  circle1.classList.add("circle");

  const circle2 = document.createElement("div");
  circle2.classList.add("circle");

  contentDiv.appendChild(pageContent);
  pageContent.appendChild(home);
  home.appendChild(heroImg);
  home.appendChild(homeContent);
  homeContent.appendChild(paragraph);

  homeContent.appendChild(createHomeButton());

  pageContent.appendChild(createFooter());
}
