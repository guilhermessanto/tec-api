import express from "express";
import { ler,inserir } from "./src/aluno.js";
const app = express();
const porta = 3000;

/* configurando suporte ao formato json */
app.use(express.json());

/* Configurar suporte a dados de inputs de formularios */
app.use(express.urlencoded({extended:true}));

/* Rotas */
/* rota (endpoint) para a raiz da API */
app.get('/', (req, res)=>{
    res.send(`página inicial da aplicação`);
 /*    res.render(`index`); */
});

/* rota para exibir todos os alunos */
app.get('/alunos', (req, res)=>{
    /* res.send(`Exibir todos os alunos.`); */
    ler(res);
});

/* rota para exibir um unido aluno */
app.get('/alunos/:id', (req, res)=>{
    res.send(`Exibir dados de UM aluno.`);
    /* res.render(`alunos/:id`); */
});

/* rota  */
app.post('/alunos', (req, res)=>{
    
    /* res.send(`Inserir alunos.`); */
    /* capturando os dados a partir do corpo da requisição */
    const novoAluno = req.body;
    /* executando a função inserir e passando os parâmetros novoAluno e res */
    inserir(novoAluno,res);
    
});

/* rota para atualizar todos os alunos */
app.put('/alunos/:id', (req, res)=>{
    
    res.send(`atualizar todos os dados de um aluno`);
});

/* rota para atualizar alguns/todos alunos */
app.patch('/alunos/:id', (req, res)=>{
    
    res.send(`atualizar alguns/todos alunos`);
});

/* rota para excluir alunos */
app.delete('/alunos/:id', (req, res)=>{
    
    res.send(`excluir aluno`);
});

/* configurando o servidor */
app.listen(porta, ()=>{
    console.log(`Servidor express rodando...`);
});