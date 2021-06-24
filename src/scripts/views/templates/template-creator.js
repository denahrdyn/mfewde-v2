/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
        <div class="card">
            <a href="#/detail/${resto.id}" class="resto__selector">
                <img class="card-image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
                <div class="rate"><i class="fas fa-star"></i>${resto.rating}</div>
                <div class="card-content">
                    <h1 class="card-title">
                        <a href="#/detail/${resto.id}">${resto.name}</a>
                    </h1>
                    <h3 class="card-subtitle">
                        <a href="#"><i class="fas fa-map-marker-alt"></i>${resto.city}</a>
                    </h3>
                    <p class="card-desc">${resto.description.slice(0, 140)}...</p>
                </div>
            </a>
        </div>
`;

export {
  createRestoItemTemplate,
};
