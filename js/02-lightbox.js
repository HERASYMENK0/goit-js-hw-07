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
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}"" alt="${description}" />
</a>
    `;
    }).join(' ')
};