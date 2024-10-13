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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchHistoricalApods = exports.fetchApod = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEY = process.env.NASA_API_KEY || 'your_api_key';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const fetchApod = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${BASE_URL}?api_key=${API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching APOD:', error);
        throw error;
    }
});
exports.fetchApod = fetchApod;
const fetchHistoricalApods = (count, startDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = { api_key: API_KEY, count };
        if (startDate) {
            params.start_date = startDate;
        }
        const response = yield axios_1.default.get(BASE_URL, { params });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching historical APODs:', error);
        throw error;
    }
});
exports.fetchHistoricalApods = fetchHistoricalApods;
