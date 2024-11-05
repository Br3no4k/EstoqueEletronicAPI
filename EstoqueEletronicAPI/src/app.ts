import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes';
import categoriaRoutes from './routes/categoryRoutes';
import fornecedorRoutes from './routes/supplierRoutes';

// Configurando o dotenv para utilizar variáveis de ambiente
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// Rotas
app.use('/item', itemRoutes); // Rotas para os itens
app.use('/categorias', categoriaRoutes); // Rotas para as categorias
app.use('/fornecedores', fornecedorRoutes); // Rotas para os fornecedores

// pegando a porta que esta no .env 
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
