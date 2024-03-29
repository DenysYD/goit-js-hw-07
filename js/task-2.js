const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  function createGallery(imagesArray) {
    const galleryContainer = document.querySelector('.gallery');
  
    const fragment = document.createDocumentFragment();
  
    imagesArray.forEach(image => {
      const listItem = document.createElement('li');
      listItem.classList.add('gallery-item');
  
      const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = image.alt;
      imgElement.classList.add('gallery-img');
  
      listItem.appendChild(imgElement);
      fragment.appendChild(listItem);
    });
        galleryContainer.appendChild(fragment);
      }
      createGallery(images);