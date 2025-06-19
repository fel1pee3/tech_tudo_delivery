import { Router } from 'express';
import PedidoController from '../controllers/PedidoController';

const router = Router();
const controller = new PedidoController();

router.post('/pedidos', controller.cadastrarPedido.bind(controller));
router.get('/pedidos', controller.listarPedidos.bind(controller));
router.put('/pedidos/:id/entregar', controller.entregarPedido.bind(controller));
router.delete('/pedidos/entregues', controller.removerEntregues.bind(controller));

export default router;