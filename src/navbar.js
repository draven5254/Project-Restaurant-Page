"use strict";

import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import createNavButton from "./navButton";

export default function createNav() {
  const contentDiv = document.getElementById("content");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tabContainer");

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-bars");

  const tab = document.createElement("ul");
  tab.classList.add("tab");

  const tabList1 = document.createElement("li");
  tabList1.classList.add("tabList");

  const tabList2 = document.createElement("li");
  tabList2.classList.add("tabList");

  const tabList3 = document.createElement("li");
  tabList3.classList.add("tabList");

  const tabLink1 = document.createElement("button");
  tabLink1.classList.add("tabLink", "active");
  tabLink1.textContent = "Home";
  tabLink1.addEventListener("click", () => {
    clearContent();
    createHome();
    setActive();
  });

  const tabLink2 = document.createElement("button");
  tabLink2.classList.add("tabLink");
  tabLink2.textContent = "Menu";
  tabLink2.addEventListener("click", () => {
    clearContent();
    createMenu();
    setActive();
  });

  const tabLink3 = document.createElement("button");
  tabLink3.classList.add("tabLink");
  tabLink3.textContent = "Contact";
  tabLink3.addEventListener("click", () => {
    clearContent();
    createContact();
    // setActive();
  });

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logoContainer");

  const logo = document.createElement("h1");
  logo.textContent = "Celestial Eats";

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  const navBtn = document.createElement("button");
  navBtn.classList = "navBtn";
  navBtn.textContent = "Sign up";

  contentDiv.appendChild(nav);
  nav.appendChild(tabContainer);
  tabContainer.appendChild(iconContainer);
  iconContainer.appendChild(icon);

  tabContainer.appendChild(tab);

  tab.appendChild(tabList1);
  tab.appendChild(tabList2);
  tab.appendChild(tabList3);

  tabList1.appendChild(tabLink1);
  tabList2.appendChild(tabLink2);
  tabList3.appendChild(tabLink3);

  nav.appendChild(logoContainer);
  logoContainer.appendChild(logo);
  nav.appendChild(btnContainer);
  btnContainer.appendChild(createNavButton());
}

function setActive() {
  const tabButtons = document.querySelectorAll(".tabLink");

  tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      tabButtons.forEach((button) => button.classList.remove("active"));
      tabButton.classList.add("active");
    });
  });
}

function clearContent() {
  const contentDiv = document.getElementById("content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    contentDiv.removeChild(pageContent);
  }
}
