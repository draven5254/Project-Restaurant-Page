"use strict";

export function createMenu() {
  // Create the main menu container
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // Add the heading
  const heading = document.createElement("h3");
  heading.textContent = "Fresh, plant-forward, earth friendly food.";
  menu.appendChild(heading);

  menu.appendChild(createBreakfast());
  menu.appendChild(createLunch());
  menu.appendChild(createDinner());

  return menu;
}

function createBreakfast() {
  // Create the Breakfast Container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Create the food-container
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  // Create the meal-day-container
  const mealDayContainer = document.createElement("div");
  mealDayContainer.classList.add("meal-day-container");

  // Add the meal-day heading
  const mealDayHeading = document.createElement("h2");
  mealDayHeading.textContent = "Breakfast";
  mealDayHeading.classList.add("meal-day");
  mealDayContainer.appendChild(mealDayHeading);

  // Create the meal-container
  const mealContainer = document.createElement("div");
  mealContainer.classList.add("meal-container");

  // Create meal items
  const mealItems = [
    {
      name: "tosilog",
      description:
        "friedrice with tocino and sunny sideup egg (Tosino, Sinangag, Itlog)",
      image: "img/img-1.jpg",
    },
    {
      name: "friedrice",
      description: "friedrice with with tomato and cucumber (sinangag)",
      image: "img/img-2.jpeg",
    },
    {
      name: "porridge",
      description: "porridge with egg (lugaw, itlog)",
      image: "img/img-3.jpeg",
    },
  ];

  mealItems.forEach((item) => {
    const meal = document.createElement("div");
    meal.classList.add("meal");

    // Create the image container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const imgPath = `${item.image}`;
    const img = document.createElement("img");

    img.src = imgPath;
    img.alt = "food images";
    imgContainer.appendChild(img);

    meal.appendChild(imgContainer);

    // Add food name and description
    const foodName = document.createElement("p");
    foodName.classList.add("food-name");
    foodName.textContent = item.name;
    meal.appendChild(foodName);

    const foodDescription = document.createElement("p");
    foodDescription.classList.add("food-description");
    foodDescription.textContent = item.description;
    foodDescription.style.flexWrap = "wrap";
    meal.appendChild(foodDescription);

    mealContainer.appendChild(meal);
  });

  // Assemble the structure
  foodContainer.appendChild(mealDayContainer);
  foodContainer.appendChild(mealContainer);
  menuContainer.appendChild(foodContainer);

  return menuContainer;
}

function createLunch() {
  // Create the Lunch Container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Create the food-container
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  // Create the meal-day-container
  const mealDayContainer = document.createElement("div");
  mealDayContainer.classList.add("meal-day-container");

  // Add the meal-day heading
  const mealDayHeading = document.createElement("h2");
  mealDayHeading.textContent = "Lunch";
  mealDayHeading.classList.add("meal-day");
  mealDayContainer.appendChild(mealDayHeading);

  // Create the meal-container
  const mealContainer = document.createElement("div");
  mealContainer.classList.add("meal-container");

  // Create meal items
  const mealItems = [
    {
      name: "Beef Bulalo",
      description:
        "It is a Filipino beef shank soup in clear broth. This version has sweet corn in it.",
      image: "img/img-4.jpeg",
    },
    {
      name: "Chicken Curry",
      description:
        "Filipino Style Chicken Curry is cooked with coconut milk and this makes it creamier and more flavorful.",
      image: "img/img-5.jpeg",
    },
    {
      name: "Chicken Afritada",
      description:
        "Afritada is a Filipino favorite with tender chicken cooked in a rich savory tomato-based sauce. Cooked low and slow until the oil separates from the sauce and the meat becomes fork-tender.",
      image: "img/img-6.jpeg",
    },
  ];

  mealItems.forEach((item) => {
    const meal = document.createElement("div");
    meal.classList.add("meal");

    // Create the image container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const imgPath = `${item.image}`;
    const img = document.createElement("img");

    img.src = imgPath;
    img.alt = "food images";
    imgContainer.appendChild(img);

    meal.appendChild(imgContainer);

    // Add food name and description
    const foodName = document.createElement("p");
    foodName.classList.add("food-name");
    foodName.textContent = item.name;
    meal.appendChild(foodName);

    const foodDescription = document.createElement("p");
    foodDescription.classList.add("food-description");
    foodDescription.textContent = item.description;
    foodDescription.style.flexWrap = "wrap";
    meal.appendChild(foodDescription);

    mealContainer.appendChild(meal);
  });

  // Assemble the structure
  foodContainer.appendChild(mealDayContainer);
  foodContainer.appendChild(mealContainer);
  menuContainer.appendChild(foodContainer);

  return menuContainer;
}

function createDinner() {
  // Create the Dinner Container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Create the food-container
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  // Create the meal-day-container
  const mealDayContainer = document.createElement("div");
  mealDayContainer.classList.add("meal-day-container");

  // Add the meal-day heading
  const mealDayHeading = document.createElement("h2");
  mealDayHeading.textContent = "Dinner";
  mealDayHeading.classList.add("meal-day");
  mealDayContainer.appendChild(mealDayHeading);

  // Create the meal-container
  const mealContainer = document.createElement("div");
  mealContainer.classList.add("meal-container");

  // Create meal items
  const mealItems = [
    {
      name: "Ginisang Munggo at Chicharon (Mung Bean Soup with Pork Cracklings)",
      description:
        "Mung Bean stew with pork cracklings is hearty and full of flavor for the ultimate comfort food. It's easy to make, budget-friendly, and a great source of protein and fiber.",
      image: "img/img-7.jpeg",
    },
    {
      name: "Adobong Sitaw",
      description:
        "Adobong Sitaw is a popular Filipino dish made with (sitaw) long beans or green beans, which are cooked in a savory sauce made from the combination of tangy and savory flavors of soy sauce, vinegar, along with aromatic garlic and onion, and other spices.",
      image: "img/img-8.jpeg",
    },
    {
      name: "Shrimp Adobo with Coconut Milk",
      description:
        "This shrimp adobo with coconut milk dish features ingredients prominent in Filipino cuisine. The shrimp is simply cooked in a tangy and creamy adobo sauce with coconut milk.",
      image: "img/img-9.jpeg",
    },
  ];

  mealItems.forEach((item) => {
    const meal = document.createElement("div");
    meal.classList.add("meal");

    // Create the image container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const imgPath = `${item.image}`;
    const img = document.createElement("img");

    img.src = imgPath;
    img.alt = "food images";
    imgContainer.appendChild(img);

    meal.appendChild(imgContainer);

    // Add food name and description
    const foodName = document.createElement("p");
    foodName.classList.add("food-name");
    foodName.textContent = item.name;
    meal.appendChild(foodName);

    const foodDescription = document.createElement("p");
    foodDescription.classList.add("food-description");
    foodDescription.textContent = item.description;
    foodDescription.style.flexWrap = "wrap";
    meal.appendChild(foodDescription);

    mealContainer.appendChild(meal);
  });

  // Assemble the structure
  foodContainer.appendChild(mealDayContainer);
  foodContainer.appendChild(mealContainer);
  menuContainer.appendChild(foodContainer);

  return menuContainer;
}
