//------------------ janela de login ------------------//
// área responsável por controlar a exibição da janela de login

login_button = document.querySelector('.b_login')
login_button.addEventListener('click', (event) => {
    document.querySelector('.bg-modal').style.display = "flex"
})

close_log = document.querySelector('.close')
close_log.addEventListener('click', (event) => {
    document.querySelector('.bg-modal').style.display = "none"
    clean_log_form()
})

//######## clean_form ########//
function clean_log_form(){
    document.querySelector('#log_email').value = ''
    document.querySelector('#log_pass').value = ''
    document.querySelector('#customSwitch1').checked = false
}
//----------- esc fecha qualquer janela aberta --------------//

document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Escape'){
        document.querySelector('#janela_logout').style.display = "none"
        document.querySelector('.bg-modal').style.display = "none"
        document.querySelector('.bg-modal_reg').style.display = "none"
        document.querySelector('.shadow_bookdata').style.display = "none"
        clean_log_form()
        clean_reg_form()
    }
})

//------------------ janela de cadastro ------------------//
// acesso a janela
cadastro_button = document.querySelector('.b_registro')
cadastro_button.addEventListener('click', (event) => {
    document.querySelector('.bg-modal_reg').style.display = 'flex'
    document.querySelector('#form_registro').style.display = 'flex'
})
close_cadastro = document.querySelector('.close_reg')
close_cadastro.addEventListener('click', (event) => {
    document.querySelector('.bg-modal_reg').style.display = 'none'
    clean_reg_form()
})

//######## clean_reg_form ########//
function clean_reg_form(){
    document.querySelector('#nome').value = ''
    document.querySelector('#sobrenome').value = ''
    document.querySelector('#cadastro_email').value = ''
    document.querySelector('#exampleInputPassword2').value = ''
    document.querySelector('#exampleInputPassword3').value = ''
    document.querySelector('#check').checked = false
}

// variáveis de cadastro

const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const cadastro_email = document.querySelector('#cadastro_email')
const cadastro_senha1 = document.querySelector('#exampleInputPassword2')
const cadastro_senha2 = document.querySelector('#exampleInputPassword3')
const cadastro_termos = document.querySelector('#check')

// gerenciamento dos alertas se algum alerta estiver ativo o formulário não
// é enviado ao firebase

alerta_ativo = false
b_cadastrar = document.querySelector('#cadastrar')
b_cadastrar.addEventListener('click', (event) => {
    alerta_ativo = false

    if (alerta_ativo == false && nome.value == ''){
        document.querySelector('#alerta_nome').style.display = 'block'
        alerta_ativo = true
    }
    else if (nome.value != '') { 
        document.querySelector('#alerta_nome').style.display = 'none'
        alerta_ativo = false
    }            
    if (alerta_ativo == false && sobrenome.value == ''){
        document.querySelector('#alerta_sobre').style.display = 'block'
        alerta_ativo = true
    }
    else if (sobrenome.value != ''){
        document.querySelector('#alerta_sobre').style.display = 'none'
        alerta_ativo = false
    }
    
    if(alerta_ativo == false && cadastro_email.value == ''){
        document.querySelector('#alerta_email').style.display = "block"
        alerta_ativo = true
    }
    else if (cadastro_email.value != ''){
        document.querySelector('#alerta_email').style.display = "none" 
        alerta_ativo = false
    }
    
        
    if (alerta_ativo == false && cadastro_senha1.value == ''){
        document.querySelector('#alerta_senha').style.display = "block"
        alerta_ativo = true
    }

    else if (cadastro_senha1.value != ''){
        document.querySelector('#alerta_senha').style.display = "none"
        alerta_ativo = false
        
        if (alerta_ativo == false && (cadastro_senha1.value != cadastro_senha2.value)) {
            document.querySelector('#alerta_senhas').style.display = "block"
            alerta_ativo = true
        }
        else if (cadastro_senha1.value == cadastro_senha2.value){
            document.querySelector('#alerta_senhas').style.display = "none"
            alerta_ativo = false
        }
        if (alerta_ativo == false && ((cadastro_senha1.value).length < 6)){
            document.querySelector('#alerta_senha_curta').style.display = "block"
            alerta_ativo = true
        }
        else if ((cadastro_senha1.value).length >= 6){
             document.querySelector('#alerta_senha_curta').style.display = "none" 
             alerta_ativo = false
        }
    }

    if (alerta_ativo == false && (cadastro_termos.checked == false)){
        document.querySelector('#termos_cadastro').style.display = 'block'
        alerta_ativo = true
    }
    else if (cadastro_termos.checked != false){
        document.querySelector('#termos_cadastro').style.display = 'none'
        alerta_ativo = false
    }
})

// -------------- GERAÇÃO DOS LIVROS DO MAIN -------------- //

window.onload = function(){
    // LANÇAMENTOS
    // list_cp = document.querySelector('.c_p');
    // for ( i = 0; i<new_book.length){

    // }
    
    // .insertAdjacentHTML('beforeend', 'ok')
    


    // MAIS PROCURADOS
    // MELHOR CLASSIFICAÇÃO
    
}


// -------------- GERAÇÃO DOS LIVROS DA PESQUISA -------------- //
function idbook(id){
    $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes/" + id,
        dataType:"json",
        success: function(dado){
            document.querySelector('.shadow_bookdata').style.display = "flex"
            document.querySelector('.shadow_bookdata').innerHTML = `
            <div class="bookdata cent_all">
                <div class="topobook">
                    <div class="titulo">${dado.volumeInfo.title}</div>
                    <div class="closebook">+</div>
                </div>
                <div class="cont-b-d">
                    <div class="bd-a">
                        <div class="bd-a-capa"><img src="${dado.volumeInfo.imageLinks.thumbnail}"></div>
                        <div class="bd-a-sinop">${dado.volumeInfo.description}</div>
                    </div>

                    <div class="bd-b">
                        <div class="info"></div>
                        <div class="pond"></div>
                    </div>
                </div>
            <div>
            
        `},
        type:"GET"
    })
    
}
    


// DEF PARA CRIAR OS CARDS

function printcards(data){

    cont.insertAdjacentHTML('beforeend', `
        <div class="card_book cent_all" id="${data.items[i].id}" onclick="idbook(this.id)" >
        <div class="thumbnail cent_all">
        <img src="${data.items[i].volumeInfo.imageLinks.thumbnail}">
        </div>
        <div class="label_pesq">
        <div class="pesq_title">${data.items[i].volumeInfo.title}</div>
        <div class="pesq_autor ">${data.items[i].volumeInfo.authors}</div>
        </div>
        </div>
            `)
    }


// --- FUNÇÃO DE PESQUISA --- //
function bookSearch(){
    let dado = document.getElementById('search').value
    document.getElementById('cont').innerHTML = "";
    document.getElementById('cont').className = "cont_pesq cent_all";
    
    // --- SOLICITA OS DADOS --- 
    
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + dado + "&maxResults=30",
        dataType: "json",
        
        // CASO ENCONTRADO, CRIARA O CARD
        success: function(data){
            console.log(data)
            for(i = 0; i<data.items.length; i++){

                // DEF GERADOR DE CARDS
                printcards(data)
            }
        },
        type:'GET'
        // SE NÃO, REPORTARA UM ERRO
        // vou colocar o erro*
    });

    //CHAMA O POP-UP COM DETALHES DO LIVRO AO CLICAR
    

}

//PESQUISA PELO CLICK DO MOUSE
document.getElementById('button').addEventListener('click',(event)=>{
    bookSearch()
})

//PESQUISA AO PRECIONAR O ENTER
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'Enter') {
        bookSearch()
    }
})

//let dbook = document.querySelector(".card_book")
//    dbook.addEventListener('click', () => {
//    document.querySelector('.bg-modal').style.display = "flex"
 //   })

