interface Wind {
    speed: number; 
    deg: number
  }

interface coords {
    lon:number;
    lat:number
  }  

interface weather {
      id: number;
      main: string;
      description: string;
      icon: string
    }

interface sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number
}

interface main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number
}
interface clouds{
    all: number
}

 interface WeatherData {
    coord: coords;
    weather:weather;
    base: string;
    main:main;
    visibility: number;
    wind: Wind;
    clouds: clouds;
    dt: number;
    sys:sys;
    timezone: number;
    id: number;
    name: string;
    cod: number
  }

  export { WeatherData };