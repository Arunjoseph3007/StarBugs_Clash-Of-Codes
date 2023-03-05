import axios from "axios";

export const getTravelPlan = async (days, source, dest) => {
  // return 'This is the plan'
  const options = {
    method: "POST",
    url: "https://you-chat-gpt.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "3af18041c3msha1b256bea39427cp17010ajsnb89051bb00ac",
      "X-RapidAPI-Host": "you-chat-gpt.p.rapidapi.com",
    },
    data: `{"question":"I want to go on a ${days} day trip to ${dest} from ${source}. can you suggest on how to travel, what to see, where to stay and so on","max_response_time":30}`,
  };

  const { data } = await axios.request(options);

  return data.answer;
};
