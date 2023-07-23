import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemRefs = document.querySelector('.gallery');

function createGalleryItemElements(elements) {
    return elements.map((element) => `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li>`).join('');
}

galleryItemRefs.innerHTML = createGalleryItemElements(galleryItems);
galleryItemRefs.addEventListener('click', onClick);
function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
    return
    }

    const instance = basicLightbox.create(
        `
    <img src="${event.target.dataset.source}" width="800" height="600">
`
    )
    instance.show();

    galleryItemRefs.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close();
        }
    });
}