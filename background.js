const images = [
  "img/istockphoto-621371796-1024x1024.jpg",
  "img/pexels-photo-417074.jpeg",
  "img/pexels-photo-2246803.jpeg",
  "img/pexels-photo-6688747.jpeg",
  "img/pexels-photo-8430904.jpeg",
  "img/pexels-photo-8430905.jpeg",
  "img/pexels-photo-9314717.jpeg",
  "img/pexels-photo-9586148.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const url = `${chosenImage}`;

document.body.background = url;
