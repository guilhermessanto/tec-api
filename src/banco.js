import mysql from 'mysql2';
/* configurando a conexão */
const conexao = mysql.createConnection({
   /*  host:'localhost',
    user:'root',
    password: '',
    database: 'escola' */
    host:'srv28.prodns.com.br',
    user:'webmaio1_tec_gui',
    password: 'senac*123',
    database: 'webmaio1_tec_escola_guilherme'
});
/* conectando ao banco de dados */
/* conexao.connect(); */
conexao.connect(erro =>{
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`);
    }else{
        console.log(`Banco conectado em: ${conexao.config.host}`);
    }
});
export default conexao;