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
exports.getData = void 0;
const enums_1 = require("../api/enums");
const constants_1 = require("../api/constants");
const api_communicator_1 = require("../api-communicator");
const utils_1 = require("../helpers/utils");
const getData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = (0, utils_1.handleUrl)(`${constants_1.API_URL}${enums_1.EndPoints.data}${enums_1.EndPoints.current_version}${enums_1.EndPoints.weather}?q=${data.city},${data.country}&units=${data.units}&APPID=${constants_1.API_KEY}`);
        const response = yield (0, api_communicator_1.request)('GET', url);
        return response;
    }
    catch (error) {
        throw (error);
    }
});
exports.getData = getData;
//# sourceMappingURL=weather-report.js.map