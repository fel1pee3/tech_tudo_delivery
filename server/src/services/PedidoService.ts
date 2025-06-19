import PedidoRepository from '../prisma/PedidoRepository';
import { Pedido } from '@prisma/client';

export default class PedidoService {
    private repository = new PedidoRepository();

    async cadastrarPedido(descricao: string): Promise<Pedido> {
        return this.repository.create(descricao);
    }

    async listarPedidos(): Promise<Pedido[]> {
        return this.repository.findAll();
    }

    async entregarPedido(id: number): Promise<Pedido> {
        return this.repository.updateEntrega(id, true);
    }

    async removerEntregues(): Promise<{ count: number }> {
        return this.repository.deleteEntregues();
    }
}