"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_report_1 = require("./methods/weather-report");
const exp = require("express");
const app = exp();
const port = 3000;
app.use(exp.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.get('/getWeatherReport', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, country, units } = req.query;
    if (typeof (city) == "string" && typeof (country) == "string") {
        if (units === "standard" || units === "metric" || units === "imperial" || units == undefined) {
            const unit = units ? units : 'standard';
            const data = {
                city: city,
                country: country,
                units: unit
            };
            const result = yield (0, weather_report_1.getData)(data);
            res.send(result);
        }
        else {
            res.send("Incorrect Units");
        }
    }
    else {
        res.send("City & Country must be in String");
    }
}));
//# sourceMappingURL=index.js.map