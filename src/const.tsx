export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Root = '/',
  NotFoundScreen = '/not-found-screen',
  Offer = '/offer/:id'
}

export const CITIES = [
  {
    title: 'Paris',
    lat: 48.856614,
    lng: 2.3522219,
    zoom: 10,
  },
  {
    title: 'Cologne',
    lat: 50.9333,
    lng: 6.95,
    zoom: 10,
  },
  {
    title: 'Brussels',
    lat: 	50.8504,
    lng: 4.34878,
    zoom: 10,
  },
  {
    title: 'Amsterdam',
    lat: 52.374,
    lng: 4.8896,
    zoom: 10,
  },
  {
    title: 'Hamburg',
    lat: 53.5753,
    lng: 10.0153,
    zoom: 10,
  },
  {
    title: 'Dusseldorf',
    lat: 	51.2217,
    lng: 6.77616,
    zoom: 10,
  },
];

export const SortType = {
  Popular: 'Popular',
  PriceAsc: 'Price: low to high',
  PriceDesc: 'Price: high to low',
  RatingDesc: 'Top rated first',
};

export const SortingOptionsDictionary = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceAsc]: 'Price: low to high',
  [SortType.PriceDesc]: 'Price: high to low',
  [SortType.RatingDesc]: 'Top rated first',
}

export enum AuthorizationStatus {
  Auth ='AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

