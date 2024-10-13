"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apodControllers_1 = require("../controllers/apodControllers");
const router = (0, express_1.Router)();
router.get('/apod', apodControllers_1.getApod);
router.get('/apods', apodControllers_1.getHistoricalApods);
exports.default = router;
