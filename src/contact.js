"use strict";

import createFooter from "./footer";

export default function createContact() {
  const contentDiv = document.getElementById("content");

  const contactImg = document.createElement("img");
  contactImg.src = "./img/background-destination-desktop.jpg";
  contactImg.alt = "hero image background";

  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.style.cursor = "url(/dist/img/rocket.png), auto";

  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");

  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const paragraph = document.createElement("h3");
  paragraph.textContent = "find celestial eats restaurant near you";

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("contact-img");

  const contactGif = document.createElement("img");
  contactGif.src = "./img/location.gif";

  const location = document.createElement("div");
  location.classList.add("location");

  const number = document.createElement("p");
  number.classList.add("number");
  number.textContent = "+123456789";

  const address = document.createElement("p");
  address.textContent = "Galaxy Milky Way Solar System Earth-616 Philippines";

  contentDiv.appendChild(pageContent);
  pageContent.appendChild(contact);
  contact.appendChild(contactImg);
  contact.appendChild(contactContent);
  contactContent.appendChild(paragraph);
  contactContent.appendChild(imgContainer);
  imgContainer.appendChild(contactGif);

  imgContainer.appendChild(location);
  location.appendChild(number);
  location.appendChild(address);
  pageContent.appendChild(createFooter());
}
