"use strict";

import { createHome } from "./home";
import { createMenu } from "./menu";

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tabContainer");

  const tab = document.createElement("ul");
  tab.classList.add("tab");

  const tabList1 = document.createElement("li");
  tabList1.classList.add("tabList");

  const tabList2 = document.createElement("li");
  tabList2.classList.add("tabList");

  const tabList3 = document.createElement("li");
  tabList3.classList.add("tabList");

  const tabLink1 = document.createElement("a");
  tabLink1.classList.add("tabLink");
  tabLink1.href = "#";
  tabLink1.textContent = "Home";

  const tabLink2 = document.createElement("a");
  tabLink2.classList.add("tabLink");
  tabLink2.href = "#";
  tabLink2.textContent = "Menu";

  const tabLink3 = document.createElement("a");
  tabLink3.classList.add("tabLink");
  tabLink3.href = "#";
  tabLink3.textContent = "Contact";

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logoContainer");

  const logo = document.createElement("h1");
  logo.textContent = "Lutong Bahay";

  const button = document.createElement("button");
  button.classList = "btn";

  const navBtn = document.createElement("a");
  navBtn.classList = "navBtn";
  navBtn.href = "#";
  navBtn.textContent = "Sign up";

  nav.appendChild(tabContainer);
  tabContainer.appendChild(tab);

  tab.appendChild(tabList1);
  tab.appendChild(tabList2);
  tab.appendChild(tabList3);

  tabList1.appendChild(tabLink1);
  tabList2.appendChild(tabLink2);
  tabList3.appendChild(tabLink3);

  nav.appendChild(logoContainer);
  logoContainer.appendChild(logo);

  nav.appendChild(button);
  button.appendChild(navBtn);

  return nav;
}

export function getParentElement() {
  const contentDiv = document.getElementById("content");

  contentDiv.appendChild(createHome());
  contentDiv.appendChild(createNav());
  contentDiv.appendChild(createMenu());
}

export default getParentElement;
