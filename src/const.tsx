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
// CITIES константа
export const cities: {id: string; name: string}[] = [
  {
    id: 'd08b6bf1-36e5-45d6-bdc9-02803813a2e3',
    name: 'Paris',
  },
  {
    id: '6810e202-1651-45d6-8226-673385bb8dee',
    name: 'Cologne',
  },
  {
    id: 'eb5ff01d-c980-4b6e-aaf5-ad48f922fbe2',
    name: 'Brussels',
  },
  {
    id: 'da903444-3b9e-4806-b784-c44e745b315f',
    name: 'Amsterdam',
  },
  {
    id: 'b7886c68-261a-4960-b7df-f88e65148ee4',
    name: 'Hamburg',
  },
  {
    id: '0da0e2cd-2203-4f06-9268-2cd394322f66',
    name: 'Dusseldorf',
  }
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
