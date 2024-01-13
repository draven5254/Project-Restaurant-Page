"use strict";

import createFooter from "./footer";

export default function createHome() {
  const contentDiv = document.getElementById("content");

  const home = document.createElement("div");
  home.classList.add("hero-container");

  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const paragraph = document.createElement("h3");
  paragraph.textContent = "The taste of home, in every dish";

  const heroBtn = document.createElement("button");
  heroBtn.classList.add("btn");

  heroBtn.addEventListener("mouseover", (e) => {
    const x = e.pageX - heroBtn.offsetLeft;
    const y = e.pageY - heroBtn.offsetTop;

    heroBtn.style.setProperty("--xPos", x + "px");
    heroBtn.style.setProperty("--yPos", y + "px");
  });

  const heroLink = document.createElement("a");
  heroLink.textContent = "order now";
  heroLink.classList.add("heroBtn");

  contentDiv.appendChild(pageContent);
  pageContent.appendChild(home);
  home.appendChild(homeContent);
  homeContent.appendChild(paragraph);
  homeContent.appendChild(heroBtn);
  heroBtn.appendChild(heroLink);
  pageContent.appendChild(createFooter());
}
