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
exports.getHistoricalApods = exports.getApod = void 0;
const apodServices_1 = require("../services/apodServices");
const getApod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apodData = yield (0, apodServices_1.fetchApod)();
        res.status(200).json(apodData);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch APOD' });
    }
});
exports.getApod = getApod;
const getHistoricalApods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { count, startDate } = req.query;
    try {
        const historicalApods = yield (0, apodServices_1.fetchHistoricalApods)(Number(count), startDate);
        res.status(200).json(historicalApods);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch historical APODs' });
    }
});
exports.getHistoricalApods = getHistoricalApods;
