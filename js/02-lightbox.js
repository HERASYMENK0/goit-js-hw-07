import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgBox = document.querySelector(".gallery");
const imgMarkup = creatImagesCard(galleryItems);

imgBox.insertAdjacentHTML("beforeend", imgMarkup);
imgBox.addEventListener("click", clickImgCard, { passive: false });

function creatImagesCard(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}"" alt="${description}" />
</a>
    `;
    })
    .join(" ");
}
function clickImgCard(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
   

  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionSelector: "img",
    captionDelay: 250,
    docClose: true,
  });
}

