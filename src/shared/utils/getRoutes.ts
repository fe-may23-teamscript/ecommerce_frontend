//in all link {Link , NavLink} components is much easier to get necessary route using this

export const getHomePath = () => '/';

export const getCatalog = (category?: string) => `catalog/${category}`;

export const getDevicePath = (deviceId: string, category: string) =>
  `catalog/${category}/:${deviceId}`;

export const getFavouritesPath = () => 'favourites';

export const getCartPath = () => 'cart';

export const getBurgerMenuPath = () => 'menu';
