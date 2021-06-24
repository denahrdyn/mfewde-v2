import RestoDBSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-image">
        <div class="main-hero">
            <div class="hero-content">
                <h1 class="hero-title">SVOURY beside you</h1>
            <p class="hero-desc">Let's some for breakfast, lunch and dinner.</p>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="main-header">
            <h1>Popular Restaurant</h1>
            <p>Find the place of your best taste!</p>
        </div>
        <div class="main-content" id="resto-list">

        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestoDBSource.homeResto();
    const restaurantContainer = document.querySelector('#resto-list');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
