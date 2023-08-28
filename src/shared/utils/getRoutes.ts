//in all link {Link , NavLink} components is much easier to get necessary route using this

export const getHomePath = () => '/'

export const getCatalogPath = () => 'catalog'

export const getDevicePath = (deviceId: string) => `catalog/:${deviceId}`

export const getFavouritesPath = () => 'favourites'

export const getCartPath = () => 'cart'