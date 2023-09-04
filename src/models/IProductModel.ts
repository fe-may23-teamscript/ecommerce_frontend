export interface Description {
  title: string;
  text: string[];
}

export interface IProductModel {
  id: number;
  slug: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
  category: string;
  year: number;
  mainImage: string;
  createdAt: string;
  updatedAt: string;
}
