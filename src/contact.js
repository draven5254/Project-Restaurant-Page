"use strict";

export function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const paragraph = document.createElement("h3");
  paragraph.textContent = "find lutong bahay restaurant near you";

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

  contact.appendChild(paragraph);
  contact.appendChild(imgContainer);
  imgContainer.appendChild(contactGif);

  imgContainer.appendChild(location);
  location.appendChild(number);
  location.appendChild(address);

  return contact;
}
