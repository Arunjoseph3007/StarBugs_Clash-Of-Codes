import { placeToCoord } from "./placeToCoord";
import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

export const getHotels = async (place) => {
  const { lat, lon } = await placeToCoord(place);

  const options = {
    params: {
      latitude: lat,
      longitude: lon,
      limit: "30",
      currency: "USD",
      distance: "2",
      open_now: "false",
      lunit: "km",
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
