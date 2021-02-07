import { CardProps } from "../Components/UI/Card";

interface SortArg {
  city: string;
  lng?: string;
  lat?: string;
  admin_name?: string;
  population: string;
  distance?: number
 }

/**
 *
 * Helps sort the arrays of cities by population
 */
const sortByPopulation = (a: SortArg, b: SortArg) => {
  return +b.population - +a.population ;
};

/**
 *
 * Helps sort the arrays of cities by distance
 */
const sortByDistance = (a: SortArg, b: SortArg) => {
  return +b.distance - +a.distance ;
 };

 /**
 *
 * Helps sort the arrays of cities by city name
 */
const sortByCityName = (a: SortArg, b: SortArg) => {
  var cityB = b.city.toUpperCase();
  var cityA = a.city.toUpperCase();
  if (cityA < cityB) {
    return -1;
  }
  if (cityA > cityB) {
    return 1;
  }
  return 0;
 };

 /**
 *
 * Helps search the arrays of cities by search term
 */
const search = (data: CardProps[], searchTerm: string, searchCriteria: string): CardProps[]|[] => {
  return data.filter((item) =>
       item[searchCriteria].toLowerCase().includes(searchTerm.toLowerCase()));
}

/**
 *
 * Helps sort the arrays of cities by sort term
 */
const sort = (data:CardProps[], sortTerm:string):CardProps[]|[] => {
  return data
       .filter((item) => !!item[sortTerm])
       .sort(sortTerm === 'city' ? sortByCityName : sortByPopulation)
}

/**
 *
 * Helps calculate of each city from a user
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const radius = 6371; // km
  const φ1 = convertToRed(+lat1); // φ, λ in radians
  const φ2 = convertToRed(+lat2)
  const Δφ = convertToRed(+lat2 - +lat1) ; // change in latitude
  const Δλ = convertToRed(+lon2 - +lon1); // change in longitude
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radius * c; // in km
}

/**
 *
 * Helps convert degrees to redian
 */
const convertToRed = (distanace) => {
  return  distanace * Math.PI / 180;
}

/**
 *
 * geolocaton success callback
 */
const successHelper = (searchData, setData) => (position) => {
  let searchResult = [...searchData];
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  searchResult = searchResult.map(
    (item) => {
      const distance = calculateDistance(item.lat, item.lng, latitude, longitude)
      if ( distance <= 30) {
        return {...item, distance}
      }
      return false
    }
  ).filter(Boolean).sort(sortByDistance);

  setData(searchResult);
};

export {sortByCityName, sortByPopulation, search, sort, calculateDistance, successHelper}