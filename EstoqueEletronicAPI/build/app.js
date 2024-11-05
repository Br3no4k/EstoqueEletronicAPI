"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const supplierRoutes_1 = __importDefault(require("./routes/supplierRoutes"));
const db_1 = require("./models/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/items', itemRoutes_1.default);
app.use('/api/categorias', categoryRoutes_1.default);
app.use('/api/fornecedores', supplierRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
db_1.db.raw('SELECT 1')
    .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
})
    .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
});
