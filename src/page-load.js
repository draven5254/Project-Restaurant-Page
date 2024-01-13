"use strict";

import createNav from "./navbar";
import createHome from "./home";

export function getParentElement() {
  const contentDiv = document.getElementById("content");

  createHome();
  createNav();
}

export default getParentElement;
