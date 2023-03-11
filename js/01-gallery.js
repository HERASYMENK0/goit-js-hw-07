import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const imgBox = document.querySelector(".gallery");
const imgMarkup = creatImagesCard(galleryItems);

imgBox.insertAdjacentHTML('beforeend', imgMarkup);
imgBox.addEventListener('click', clickImgCard)

function creatImagesCard(element) {
    return element.map(({preview, original, description}) => {
       return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    }).join(' ')
};
function clickImgCard(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    const largeImageUrl = evt.target.dataset.source;
    console.log(largeImageUrl);
}