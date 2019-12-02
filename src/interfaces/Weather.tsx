export interface DataResponse {
  city:    City;
  cod:     string;
  message: number;
  cnt:     number;
  list:    List[];
}

export interface City {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface List {
  dt:       number;
  sunrise:  number;
  sunset:   number;
  temp:     Temp;
  pressure: number;
  humidity: number;
  weather:  Weather[];
  speed:    number;
  deg:      number;
  clouds:   number;
  rain?:    number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export default interface WeatherInterface {
  isLoading: boolean,
  data: DataResponse,
  error: Error | null
}
