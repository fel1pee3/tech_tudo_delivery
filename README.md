# TechTudoDelivery - Sistema de Gerenciamento de Pedidos

O TechTudoDelivery é um sistema completo para gerenciamento de pedidos com backend em Node.js/Express e frontend em React.

## Funcionalidades

- ✅ Cadastro de novos pedidos
- ✅ Listagem de todos os pedidos
- ✅ Marcação de pedidos como entregues
- ✅ Exclusão de pedidos já entregues
- ✅ Interface responsiva com Tailwind CSS
- ✅ Persistência de dados com MySQL

## Tecnologias Utilizadas

### Backend
- Node.js com TypeScript
- Express.js
- Prisma ORM
- MySQL
- Arquitetura MVC

### Frontend
- React com TypeScript
- Tailwind CSS
- Axios para requisições HTTP

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+)
- MySQL (local ou remoto)
- npm ou yarn

### Configuração do Backend

1. Acesse a pasta do backend:
```bash
cd server
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
```env
DATABASE_URL="mysql://seu_usuario:suasenha@localhost:3306/techtudodelivery"
```

4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor:
```bash
npm run dev
```

O backend estará disponível em: http://localhost:5000

### Configuração do Frontend

1. Acesse a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará disponível em: http://localhost:3000

## Estrutura de Arquivos

```
TechTudoDelivery/
├── server/               # Backend
│   ├── src/              # Código fonte
│   │   ├── controllers/  # Controladores
│   │   ├── prisma/       # Repositório Prisma
│   │   ├── routes/       # Rotas
│   │   ├── services/     # Serviços
│   │   └── server.ts     # Ponto de entrada
│   ├── prisma/           # Configuração do Prisma
│   └── .env              # Variáveis de ambiente
└── frontend/             # Frontend
    ├── src/              # Código fonte
    │   ├── components/   # Componentes React
    │   ├── services/     # Serviços de API
    │   ├── App.tsx       # Componente principal
    │   └── index.tsx     # Ponto de entrada
    └── public/           # Arquivos estáticos
```

## Rotas da API

| Método | Rota                     | Descrição                          |
|--------|--------------------------|------------------------------------|
| POST   | /api/pedidos             | Cadastra um novo pedido            |
| GET    | /api/pedidos             | Lista todos os pedidos             |
| PUT    | /api/pedidos/:id/entregar| Marca um pedido como entregue      |
| DELETE | /api/pedidos/entregues   | Remove todos os pedidos entregues  |

---

**Desenvolvido por [Felipe Maia]**
