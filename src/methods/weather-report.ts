import { weather } from "../models/weather-request";
import { EndPoints } from "../api/enums";
import { API_URL , API_KEY } from "../api/constants";
import { request } from "../api-communicator";
import { WeatherResponse } from "../models/weather-response";
import { handleUrl } from "../helpers/utils";

const getData = async (data:weather):Promise <WeatherResponse> => {
  try {
    const url = handleUrl(`${API_URL}${EndPoints.data}${EndPoints.current_version}${EndPoints.weather}?q=${data.city},${data.country}&units=${data.units}&APPID=${API_KEY}`);
    const response : WeatherResponse = await request('GET',url);
    return response; 
  } catch (error) {
    throw (error);
  }  
}

export { getData };