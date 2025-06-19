import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const listarPedidos = () => api.get('/pedidos');
export const cadastrarPedido = (descricao: string) => api.post('/pedidos', { descricao });
export const entregarPedido = (id: number) => api.put(`/pedidos/${id}/entregar`);
export const removerEntregues = () => api.delete('/pedidos/entregues');