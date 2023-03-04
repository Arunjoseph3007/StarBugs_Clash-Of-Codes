import { placeToCoord } from "./placeToCoord";
import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng";

export const getAttractions = async (place) => {
  const { lat, lon } = await placeToCoord(place);

  const options = {
    params: {
      longitude: lon,
      latitude: lat,
      lunit: "km",
      currency: "USD",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": "3af18041c3msha1b256bea39427cp17010ajsnb89051bb00ac",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const { data } = await axios.get(url, options);

  return data;
};
