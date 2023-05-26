//Criando API Crud Basico em JS
/*
CREATE - CRIAR 
READ - LER 
UPDATE - ATUALIZAR
DELETE - DELETAR
*/

const miniApiTwitter = {//Cria Objeto que recebe os Atributos Abaixo que serao Manipulados durante API

    usuarios: [ //Cria Lista, Usuario do Twitter
        {//Abre Objeto
            username: 'lucas.matheus',
        }
    ],
    posts: [ //Lista dos Twitter e do Criados do Post do Twitter
        {   
            id: 1,
            usuario_craidor_postagem: 'lucas.matheus',
            conteudo: 'Meu Primeiro Twitter'
        }
    ],

};


//CREATE - CRIAR 
//Aqui e declarado todos os dados que necessita para atualizar a lista e dar PUSH enviar os dados para Postar o Twitter
function criarPost(dados_da_postagem) {
    miniApiTwitter.posts.push({//Cria Objeto

        id: miniApiTwitter.posts.length + 1, //Pega tudo que tem nos Posts e coloca +1 para ele sempre ir adicionando ID +1 e Renovando Twitter
        usuario_craidor_postagem: dados_da_postagem.usuario_craidor_postagem,
        conteudo: dados_da_postagem.conteudo
});
};
//Criacao de Postes para Exemplificar Twitter
criarPost({usuario_craidor_postagem: 'lucas.matheus', conteudo: 'Segundo Twitter ser POSTADO'});
criarPost({usuario_craidor_postagem: 'lucas.matheus', conteudo: 'Terceiro Twitter ser POSTADO'});
console.log(miniApiTwitter.posts)



//READ - LER 
function pegaPost(){//Retorna todas as postagem com READ = LER
    return miniApiTwitter.posts
};
console.log(pegaPost())


//UPDATE - ATUALIZAR
function atualizarConteudoDoPost(id, novo_conteudo){
    const PostQueVaiSerAtualizado = pegaPost().find((post) => {
        return post.id === id;
    });
    console.log(PostQueVaiSerAtualizado.conteudo)

    if (PostQueVaiSerAtualizado) {
        PostQueVaiSerAtualizado.conteudo = novo_conteudo;
        console.log('Post Atualizado com Sucesso!')
    }else{
        console.log('O Post com o ID Fornecido nao foi Encontrado');
    }       
    
}

atualizarConteudoDoPost(2, novo_conteudo = 'Novo Conteudo do Twitter');

//DELETE - DELETAR
function deletaPost(id){
    const listaDePostsAtualizada = pegaPost().filter((postAtual)=>{
        return postAtual.id !== id; // Diferente de ID 
    });
    console.log(listaDePostsAtualizada)
}
deletaPost(1);