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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const PORT = process.env.PORT || 8081;
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(router);
router.get("/", (req, res) => {
    res.send("Hello World!");
});
router.get("/headphones", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const headphones = yield prisma.headphone.findMany();
    res.json(headphones);
}));
app.post("/headphones/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var { name, description, impedance, frequency, sensitivity } = req.body;
    impedance = parseInt(impedance);
    sensitivity = parseInt(sensitivity);
    const headphone = yield prisma.headphone.create({
        data: {
            name,
            description,
            impedance,
            frequency,
            sensitivity,
        },
    });
    res.json(headphone);
}));
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map