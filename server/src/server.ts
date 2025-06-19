import express from 'express';
import cors from 'cors';
import pedidosRoutes from './routes/PedidosRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', pedidosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});