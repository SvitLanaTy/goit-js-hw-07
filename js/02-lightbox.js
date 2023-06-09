import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(`ul.gallery`);

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="I${description}" />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== "IMG") {
    return;
  }
});

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
