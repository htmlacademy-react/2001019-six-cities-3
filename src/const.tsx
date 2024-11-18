export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Root = '/',
  NotFoundScreen = '/not-found-screen',
  Offer = '/offer/:id'
}

export const CITY = {
  title: 'Amsterdam',
  lat: 52.374,
  lng: 4.8896,
  zoom: 10,
};

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

//SORTINGOPTIONS константа
export const sortingOptions: {id: string; name: string}[] = [
  {
    id: '601f6a52-e6e6-4c8c-87ad-ff3b138cb5dd',
    name: 'Popular',
  },
  {
    id: 'c3681efb-47f9-4b31-8c96-fe9eff9fd13b',
    name: 'Price: low to high',
  },
  {
    id: '907e0112-7b20-4447-ac65-ac86b2f7f893',
    name: 'Price: high to low',
  },
  {
    id: '78ed5f15-8278-4449-93b3-cb30ac04b9e5',
    name: 'Top rated first',
  }
];

export enum AuthorizationStatus {
  Auth ='AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const placesFoundNumber: number = 345;
