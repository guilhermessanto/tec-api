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
function lerUm(id,res){
    const sql = "SELECT * FROM ALUNOS WHERE id = ?";
    conexao.query(sql,id,(erro,resultados)=>{
        if(resultados.lenght === 0){
            res.status(204).end();
        }
        if(erro){
            res.status(400).json(erro.code);
        }else{
            res.status(200).json(resultados[0]);
        }
    })
}
function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    /* a ordem importa por conta do sql, primeiro pega dados do aluno dps o id */
    conexao.query(sql,[aluno, id],(erro,resultados)=>{
        if(erro){
            res.status(400).json(erro.code);
        }else{/* 
            res.status(200).json({"status":"atualizado com sucesso!"}); */
            /* spread operator(operador de 'espalhamento' de objeto) */
            res.status(200).json({...aluno,id});

        }
        
    });
}
function excluir(id, res){
    const sql = "DELETE FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro,resultados)=>{
        if(erro){
            res.status(400).json(erro.code);
        }else{    
         res.status(200).json({"status" : "aluno excluído",id});
        }
    });
}
export {ler,inserir, lerUm, atualizar, excluir};