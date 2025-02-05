import express, { Request, Response } from 'express'; // Importação explícita de Request e Response
import cors from 'cors';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Configuração do dotenv para variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const TARGET_URL = process.env.TARGET_URL || 'http://example.com';

// Middlewares
app.use(cors());
app.use(express.json());

// Proxy Middleware
app.use('/api', createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    pathRewrite: (path: string): string => path.replace(/^\/api/, ''),
}));

// Rota principal
app.get('/', (req: Request, res: Response): void => { // Definindo tipos explicitamente
    res.send('Servidor Proxy rodando!');
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}, proxy para ${TARGET_URL}`);
});

export default app;
