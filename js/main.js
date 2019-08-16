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
    document.querySelector('#input_alter_name').value = ''
    document.querySelector('#input_alter_sobre').value = ''
    document.querySelector('#input_alter_phone').value = ''
    document.querySelector('#input_add_rede').value = ''
    document.querySelector('#log_email').value = ''
    document.querySelector('#log_pass').value = ''
    document.querySelector('#customSwitch1').checked = false
}
//----------- esc fecha qualquer janela aberta --------------//

document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Escape'){
        document.querySelector('.bg-modal').style.display = "none"
        document.querySelector('.bg-modal_reg').style.display = "none"

        if (minijanela == false){
            document.querySelector('.conta').style.display = 'none'    
        }else{
            minijanela = false
            document.querySelector('.shadow_bookdata').style.display = "none"
            document.querySelector('#janela_alter_phone').style.display = 'none'
            document.querySelector('#janela_logout').style.display = "none"
            document.querySelector('#janela_alter_name').style.display = 'none'
            document.querySelector('#janela_alter_sobrenome').style.display = 'none'
            document.querySelector('#janela_alter_born').style.display = 'none'
            document.querySelector('#janela_add_rede').style.display = 'none'
        }
        clean_log_form()
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
const data = document.querySelector('#example-date-input')

// controle da data de nascimento para armazenar no firebase
function data_passada(data) {
    let data_passada = data.value;
    let padrao = /[0-9]/gi;
    let data_limpa = data_passada.match(padrao)

    let ano = ''
    for (let i = 0; i < 4; i++) {
        ano += data_limpa[i]}

    let mes_num = ''
    for (let i = 4; i < 6; i++) {
        mes_num += data_limpa[i]}

    let dia = ''
    for (let i = 6; i < data_limpa.length; i++) {
        dia += data_limpa[i]}

    meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    mes_nome = meses[parseInt(mes_num)-1]

    return dia+' de '+mes_nome+' de '+ano    
}
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

// --------------- Acesso ao menu da conta ---------------- //

function bot_controle(){
    if (document.querySelector('.conta').style.display == 'none'){
        document.querySelector('.conta').style.display = 'grid'
    }
    else{
        document.querySelector('.conta').style.display = 'none'
    }
}

botao_controle = document.querySelector('.b_account')
botao_controle.addEventListener('click', (event) => {
    bot_controle()
    
})

// -------------- Janelas de alteração -------------- //

let minijanela = false
function carregar_botoes(total_redes){

    close_alter_name = document.querySelector('#cl_name')
    close_alter_name.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_name').style.display = 'none'
        minijanela = false
    })
    botao_alter_name = document.querySelector('#alter_name')
    botao_alter_name.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_name').style.display = 'flex'
        document.querySelector('#input_alter_name').value = ''
        minijanela = true
    } )

    close_alter_last_name = document.querySelector('#cl_lname')
    close_alter_last_name.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_sobrenome').style.display = 'none'
        document.querySelector('#input_alter_sobre').value = ''
        minijanela = false
    })
    botao_alter_last_name = document.querySelector('#alter_last_name')
    botao_alter_last_name.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_sobrenome').style.display = 'flex'
        minijanela = true
    })

    close_alter_nasc = document.querySelector('#cl_born')
    close_alter_nasc.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_born').style.display = 'none'
        minijanela = false
    })
    botao_alter_nasc = document.querySelector('#alter_birth')
    botao_alter_nasc.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_born').style.display = 'flex'
        minijanela = true
    })
    close_alter_phone = document.querySelector('#cl_phone')
    close_alter_phone.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_phone').style.display = 'none'
        document.querySelector('#input_alter_phone').value = ''
        minijanela = false
    })
    botao_alter_phone = document.querySelector('#alter_phone')
    botao_alter_phone.addEventListener('click', (event) => {
        document.querySelector('#janela_alter_phone').style.display = 'flex'
        minijanela = true
    })
    close_add_rede = document.querySelector('#cl_rede')
    close_add_rede.addEventListener('click', (event) => {
        document.querySelector('#janela_add_rede').style.display = 'none'
        document.querySelector('#input_add_rede').value = ''
        minijanela = false
    })
    botao_add_rede = document.querySelector('#add_rede')
    botao_add_rede.addEventListener('click', (event) => {
        document.querySelector('#janela_add_rede').style.display = 'flex'
        minijanela = true
    })

    botao_enviar_nome = document.querySelector('#send_name')
    botao_enviar_nome.addEventListener('click', (event) => {
        local = firebase.auth().currentUser.uid
        new_data = document.querySelector('#input_alter_name')
        db.collection('users').doc(local).update({
            name: new_data.value
        }).then(function(){
            locais = firebase.auth().currentUser
            carreteiro(locais)
            document.querySelector('#janela_alter_name').style.display = 'none',
            document.querySelector('#input_alter_name').value = ''
            minijanela = false
        })
    })

    botao_enviar_sobre = document.querySelector('#send_sobre')
    botao_enviar_sobre.addEventListener('click', (event) => {
        local = firebase.auth().currentUser.uid
        new_data = document.querySelector('#input_alter_sobre')
        db.collection('users').doc(local).update({
            last_name: new_data.value
        }).then(function(){
            locais = firebase.auth().currentUser
            carreteiro(locais)
            document.querySelector('#janela_alter_sobrenome').style.display = 'none'
            document.querySelector('#input_alter_sobre').value = ''
            minijanela = false
        })
    })

    botao_enviar_nasc = document.querySelector('#send_niver')
    botao_enviar_nasc.addEventListener('click', (event) => {
        local = firebase.auth().currentUser.uid
        captured_data = document.querySelector('#alter_date')
        new_data = data_passada(captured_data)
        db.collection('users').doc(local).update({
            birthday: new_data
        }).then(function(){
            locais = firebase.auth().currentUser
            carreteiro(locais)
            document.querySelector('#janela_alter_born').style.display = 'none'
            minijanela = false
        })
    })

    botao_enviar_phone = document.querySelector('#send_phone')
    botao_enviar_phone.addEventListener('click', (event) => {
        local = firebase.auth().currentUser.uid
        new_data = document.querySelector('#input_alter_phone')
        db.collection('users').doc(local).update({
            phone: new_data.value
        }).then(function(){
            locais = firebase.auth().currentUser
            carreteiro(locais)
            document.querySelector('#janela_alter_phone').style.display = 'none'
            document.querySelector('#input_alter_phone').value = ''
            minijanela = false
        })
    })

    //-------- AREA DE ADICIONAR REDES --------//

    
    botao_enviar_rede = document.querySelector('#enviar_rede')
    botao_enviar_rede.addEventListener('click', (event) => {
        usuario_uid = firebase.auth().currentUser.uid
        new_data = document.querySelector('#input_add_rede')
        db.collection('users').doc(usuario_uid).get().then(doc => {
            if (doc.data().rede1 == ''){
                db.collection('users').doc(usuario_uid).update({
                    rede1: new_data.value
                })
            }
            else if (doc.data().rede2 == ''){
                db.collection('users').doc(usuario_uid).update({
                    rede2: new_data.value
                })
            }
            else if (doc.data().rede3 == ''){
                db.collection('users').doc(usuario_uid).update({
                    rede3: new_data.value
                })
            }
            else if (doc.data().rede4 == ''){
                db.collection('users').doc(usuario_uid).update({
                    rede4: new_data.value
                })
            }
            else if (doc.data().rede5 == ''){
                db.collection('users').doc(usuario_uid).update({
                    rede5: new_data.value
                })
            }
        }).then(function(){
            locais = firebase.auth().currentUser
            carreteiro(locais)
            document.querySelector('#janela_add_rede').style.display = 'none'
            document.querySelector('#input_add_rede').value = ''
            minijanela = false
        })
    })

    //------ AREA DE REMOVER REDES -------//
    
    usuario_uid = firebase.auth().currentUser.uid
    db.collection('users').doc(usuario_uid).get().then(doc => {

        if (doc.data().rede1 != ''){
            rmr1 = document.querySelector('#remover_rede1')
            rmr1.addEventListener('click', (event) => {
                db.collection('users').doc(usuario_uid).update({
                    rede1: ''
                }).then(function() {
                    locais = firebase.auth().currentUser
                    carreteiro(locais)
                })
            })
        }
        if (doc.data().rede2 != ''){
            rmr2 = document.querySelector('#remover_rede2')
            rmr2.addEventListener('click', (event) => {
                db.collection('users').doc(usuario_uid).update({
                    rede2: ''
                }).then(function() {
                    locais = firebase.auth().currentUser
                    carreteiro(locais)
                })
            })
        }
        if (doc.data().rede3 != ''){
            rmr3 = document.querySelector('#remover_rede3')
            rmr3.addEventListener('click', (event) => {
                db.collection('users').doc(usuario_uid).update({
                    rede3: ''
                }).then(function() {
                    locais = firebase.auth().currentUser
                    carreteiro(locais)
                })
            })            
        }
        if (doc.data().rede4 != ''){
            rmr4 = document.querySelector('#remover_rede4')
            rmr4.addEventListener('click', (event) => {
                db.collection('users').doc(usuario_uid).update({
                    rede4: ''
                }).then(function() {
                    locais = firebase.auth().currentUser
                    carreteiro(locais)
                })
            })
        }
        if (doc.data().rede5 != ''){
            rmr5 = document.querySelector('#remover_rede5')
            rmr5.addEventListener('click', (event) => {
                db.collection('users').doc(usuario_uid).update({
                    rede5: ''
                }).then(function() {
                    locais = firebase.auth().currentUser
                    carreteiro(locais)
                })
            })
        }
    })
}

// -------------- GERAÇÃO DOS LIVROS DO MAIN -------------- //

detecc_alter = false
function carregamento() {
    tamanho_tela = window.innerWidth
    controle_tela = 11
    if (tamanho_tela >= 2500){
        controle_tela = 10
        detecc_alter = true
    }else if (tamanho_tela >= 2275) {
        controle_tela = 9
    }else if (tamanho_tela >= 2050) {
        controle_tela = 8
    }else if (tamanho_tela >= 1825) {
        controle_tela = 7
    }else if (tamanho_tela >= 1595) {
        controle_tela = 6
    }else if (tamanho_tela >= 1375) {
        controle_tela = 5
    }else if (tamanho_tela >= 1150) {
        controle_tela = 4
    }else if (tamanho_tela >= 915) {
        controle_tela = 3
    }else if (tamanho_tela >= 688) {
        controle_tela = 2
    }else if (tamanho_tela >= 0) {
        controle_tela = 1
    }


    let lan = document.getElementById('dado_lan')
    lan.innerHTML = ''
    for(let i = 0; i <= controle_tela; i++){  
        lan.insertAdjacentHTML('beforeend', `
        <div class="card_book cent_all" id="${book[i].id}" onclick="idbook(this.id)" >
        <div class="thumbnail cent_all">
        <img src="${book[i].volumeInfo.imageLinks.thumbnail}">
        </div>
        <div class="label_pesq">
        <div class="pesq_title cent_all">${book[i].volumeInfo.title}</div>
        <div class="pesq_autor cent_all">${book[i].volumeInfo.authors}</div>
        </div>
        </div>
            `)
    }

    
    

    

}

carregamento()

// -------------- GERAÇÃO DOS LIVROS DA PESQUISA -------------- //

function idbook(id){
    $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes/" + id,
        dataType:"json",
        success: function(dado){
            minijanela = true
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
                        <div class="info">
                            <ul class="list">
                                <li>Titulo: ${dado.volumeInfo.title}</li>
                                <li>Autor: ${dado.volumeInfo.authors}</li>
                                <li>Ano/Ed: ${dado.volumeInfo.publishedDate}</li>
                                <li>Editora: ${dado.volumeInfo.publisher}</li>
                                <li>Idioma: ${dado.volumeInfo.language}</li>
                            </ul>
                        
                        </div>
                        <div class="pond">
                            <div class="voto">
                                <p>Classificação<p>
                                <div class="star">
                                    <div onclick="Avaliar(1)"><i class = "material-icons" id="s1" > grade </i></div>
                                    <div onclick="Avaliar(2)"><i class = "material-icons" id="s2" > grade </i></div>
                                    <div onclick="Avaliar(3)"><i class = "material-icons" id="s3" > grade </i></div>
                                    <div onclick="Avaliar(4)"><i class = "material-icons" id="s4" > grade </i></div>
                                    <div onclick="Avaliar(5)"><i class = "material-icons" id="s5" > grade </i></div>
                                </div>
                            </div>
                            <div class="ponde cent_all">
                                <a href="html/atencao.htm" class="cent_all">
                                Ponderar
                                </a>
                            </div>
                        </div>
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
        <div class="card_book cent_all" id="${data.items[i].id}" onclick="idbook(this.id), console.log(this.id)" >
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


 // AREA DE TESTES
window.addEventListener('resize', (event) => {
    carregamento()
})