"use strict";

import createFooter from "./footer";

export default function createHome() {
  const contentDiv = document.getElementById("content");

  const heroImg = document.createElement("img");
  heroImg.src = "/dist/img/background-home-desktop.jpg";
  heroImg.alt = "hero image background";

  const home = document.createElement("div");
  home.classList.add("hero-container");

  home.style.cursor = "url(/dist/img/rocket.png), auto";

  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const paragraph = document.createElement("h3");
  paragraph.textContent = "The taste of home, in every dish";

  const heroLink = document.createElement("a");
  heroLink.classList.add("heroBtn");

  const linkSpan = document.createElement("span");
  linkSpan.textContent = "order now";

  // heroLink.addEventListener("mouseover", (e) => {
  //   const x = e.pageX - heroLink.offsetLeft;
  //   const y = e.pageY - heroLink.offsetTop;

  //   heroLink.style.setProperty("--xPos", x + "px");
  //   heroLink.style.setProperty("--yPos", y + "px");
  // });

  contentDiv.appendChild(pageContent);
  pageContent.appendChild(home);
  home.appendChild(heroImg);
  home.appendChild(homeContent);
  homeContent.appendChild(paragraph);
  homeContent.appendChild(heroLink);
  // heroBtn.appendChild(heroLink);
  heroLink.appendChild(linkSpan);
  pageContent.appendChild(createFooter());
}
