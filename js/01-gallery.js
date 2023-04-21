import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(`ul.gallery`);

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${preview}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
  	<img src= "${target.dataset.source}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeImgWithEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeImgWithEsc);
      },
    }
  );

  instance.show();

  function closeImgWithEsc(e) {
    if (e.key !== "Escape") return;
    instance.close();
  }
});

console.log(galleryItems);
