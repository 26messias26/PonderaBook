//-------------------------- Área de cadastro --------------------------//

const enviar_cadastro = document.querySelector('#form_registro')
enviar_cadastro.addEventListener("submit", (evento) => {
    
    //usa o email e senha já capturados em main.js para criar o usuario

    if (alerta_ativo == false) {
        auth.createUserWithEmailAndPassword(cadastro_email.value,cadastro_senha1.value).then(cred => {
            document.querySelector('#form_registro').style.display = 'none'
            document.querySelector('#cadastrado').style.display = 'block'
            console.log('usuario conectado')
            clean_reg_form()
        })
    }
})

// fecha o alerta pós cadastro

const close_succ = document.querySelector('#fechar_reg')

close_succ.addEventListener('click', (e) => {
    document.querySelector('.bg-modal_reg').style.display = 'none'
    document.querySelector('#cadastrado').style.display = 'none'
})

//--------------------------- Área de logout ---------------------------//

//abre a janela de confirmação
const logout_superior = document.querySelector('.b_logout')
logout_superior.addEventListener('click', (e) => {
    document.querySelector('#janela_logout').style.display = 'flex'    
})

// fecha a janela de confirmação
const cancel_logout = document.querySelector('#b_continuar')
cancel_logout.addEventListener('click', (e) => {
    document.querySelector('#janela_logout').style.display = 'none'
} )

//desloga o usuároo
const logout = document.querySelector('#b_desconecte-me')
logout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        console.log('usuario desconectado')
        document.querySelector('#janela_logout').style.display = 'none'
    })
})

//---------------------------- Área de login ---------------------------//

const login_email = document.querySelector('#log_email')
const login_password = document.querySelector('#log_pass')
const log_in = document.querySelector('#enviar')

log_in.addEventListener('click', (e) => {
    auth.signInWithEmailAndPassword(login_email.value, login_password.value).then(cred => {
        console.log('usuario conectado')
        document.querySelector('.bg-modal').style.display = 'none'
        clean_log_form()
    })
})

//----------------- Rastreamento de estados do usuário -----------------//

auth.onAuthStateChanged(user => {
    if (user == null){
        document.querySelector('.b_login').style.display = 'flex'
        document.querySelector('.b_registro').style.display = 'flex'
        document.querySelector('.b_logout').style.display = 'none'
        document.querySelector('.B_menu').style.display = 'none'
        document.querySelector('.b_account').style.display = 'none'
    }
    else{
        document.querySelector('.b_login').style.display = 'none'
        document.querySelector('.b_registro').style.display = 'none'
        document.querySelector('.b_logout').style.display = 'flex'
        document.querySelector('.B_menu').style.display = 'flex'
        document.querySelector('.b_account').style.display = 'flex'
    }
})