"use strict";

export default function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const copyRight = document.createElement("p");
  const footerLink = document.createElement("a");
  footerLink.classList.add("footer-link");
  footerLink.href = "https://github.com/draven5254/Project-Restaurant-Page";
  footerLink.target = "_blank";
  footerLink.textContent = "Draven5254";
  copyRight.classList.add("copy-right");
  copyRight.textContent = "Copyright © 2024";

  footer.appendChild(copyRight);
  copyRight.appendChild(footerLink);

  return footer;
}
