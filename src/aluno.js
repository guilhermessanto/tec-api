import conexao from './banco.js';

/* Criando o CRUD */
function ler(res){
const sql = "SELECT * FROM alunos ORDER BY nome";

/* conectando ao Banco de Dados */
conexao.query(sql,(erro, resultados)=>{
    if(resultados.length === 0){
        res.status(204).end(); /* 204 = sem conteudo. O método .end()oara qualquer aplicação*/
        return; /* die() */
    }
    if(erro){
        res.status(400).json(erro.code); /* 400 = bad request, requisição inválida*/
    }else{
        res.status(200).json(resultados); /*  deu certo */
    }
})
}
/* inserindo alunos */
function inserir(aluno,res){
    /* inserir dados via node muda a forma do sql adicionando o set e um caracter coringa  ? */
const sql = "INSERT INTO alunos SET ?";

conexao.query(sql,aluno,(erro)=>{
    
    if(erro){
        res.status(400).json(erro.code);
    }else{
        res.status(201).json({"status": "aluno inserido!"});
    }
})

}
export {ler,inserir};