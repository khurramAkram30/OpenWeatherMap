
import { getData } from "./methods/weather-report";
import { weather } from "./models/weather-request";
import * as exp from 'express';
import {Request,Response} from 'express';

const app = exp();
const port = 3000;
app.use(exp.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/getWeatherReport', async (req: Request,res: Response) => {
    const {city,country,units} = req.query; 
    if(typeof(city) == "string" && typeof(country) == "string"){
        if(units === "standard" || units === "metric" || units === "imperial" || units == undefined){
            const unit = units ? units: 'standard';
            const data : weather={
                city: city,
                country: country,
                units: unit
            } 
            const result = await getData(data);
            res.send(result);
        }
        else{
            res.send("Incorrect Units");
        }
    }
    else{
        res.send("City & Country must be in String");
    }

});