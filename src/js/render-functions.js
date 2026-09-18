import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            <div class="gallery-info">
              <p class="gallery-info-item">
                <span class="gallery-info-label">Likes</span>
                <span class="gallery-info-value">${likes}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-label">Views</span>
                <span class="gallery-info-value">${views}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-label">Comments</span>
                <span class="gallery-info-value">${comments}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-label">Downloads</span>
                <span class="gallery-info-value">${downloads}</span>
              </p>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
