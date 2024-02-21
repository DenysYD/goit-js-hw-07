const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ url, alt }) => {
  const listItem = document.createElement('li');
  const image = document.createElement('img');

  image.src = url;
  image.alt = alt;
  image.classList.add('gallery-image');

  listItem.appendChild(image);

  return listItem;
};

const renderGallery = (imagesArray, container) => {
  const galleryItems = imagesArray.map(createGalleryItem);
  container.append(...galleryItems);
};

renderGallery(images, galleryContainer);
