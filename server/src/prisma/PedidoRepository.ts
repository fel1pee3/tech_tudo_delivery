import { PrismaClient, Pedido } from '@prisma/client';

const prisma = new PrismaClient();

export default class PedidoRepository {
    async create(descricao: string): Promise<Pedido> {
        return prisma.pedido.create({
        data: { descricao }
        });
    }

    async findAll(): Promise<Pedido[]> {
        return prisma.pedido.findMany();
    }

    async updateEntrega(id: number, entregue: boolean): Promise<Pedido> {
        return prisma.pedido.update({
        where: { id },
        data: { entregue }
        });
    }

    async deleteEntregues(): Promise<{ count: number }> {
        return prisma.pedido.deleteMany({
        where: { entregue: true }
        });
    }
}