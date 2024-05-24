import axios,{ Method } from "axios";
import { WeatherResponse } from "./models/weather-response";

const request = async (method: Method,url: string) : Promise <WeatherResponse>  => {
    try {
        const response : WeatherResponse  = await axios({
            method,
            url, 
        });
        return {
            status: response.status,
            data: response.data, 
        };

    } catch (error) {
        throw (error)
    }
}

export { request };