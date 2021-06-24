import RestoFavorite from '../../data/restoFavorite';

const Favorite = {
  async render() {
    return `
      <h2>Favorite</h2>
    `;
  },

  async afterRender() {
    const restaurant = await RestoFavorite.getAllRestaurant();
    console.log(restaurant);
  },
};

export default Favorite;
