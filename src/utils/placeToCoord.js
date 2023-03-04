import axios from "axios";

const placeToCoordURL =
  "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname";

export const placeToCoord = async (place) => {
  const options = {
    method: "GET",
    url: placeToCoordURL,
    params: { name: place },
    headers: {
      "X-RapidAPI-Key": "3af18041c3msha1b256bea39427cp17010ajsnb89051bb00ac",
      "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
    },
  };
  const { data } = await axios.request(options);
  console.log(data);
  return data;
};
