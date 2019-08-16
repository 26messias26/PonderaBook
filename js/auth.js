//-------------------------- Área de cadastro --------------------------//

const enviar_cadastro = document.querySelector('#form_registro')
enviar_cadastro.addEventListener("submit", (evento) => {
    
    //usa o email e senha já capturados em main.js para criar o usuario

    if (alerta_ativo == false) {
        auth.createUserWithEmailAndPassword(cadastro_email.value,cadastro_senha1.value).then(cred => {
            document.querySelector('#form_registro').style.display = 'none'
            document.querySelector('#cadastrado').style.display = 'block'
            data = document.querySelector('#example-date-input')
            console.log('usuario conectado')
            db.collection('users').doc(cred.user.uid).set({
                name: nome.value,
                last_name: sobrenome.value,
                birthday: data_passada(data),
                phone: '',
                rede1: '',
                rede2: '',
                rede3: '',
                rede4: '',
                rede5: ''
            })
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
    minijanela = true
    document.querySelector('#janela_logout').style.display = 'flex'    
})

// fecha a janela de confirmação
const cancel_logout = document.querySelector('#b_continuar')
cancel_logout.addEventListener('click', (e) => {
    document.querySelector('#janela_logout').style.display = 'none'
} )

//desloga o usuário
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

function carreteiro(usuario){
    total_redes = 0
    db.collection('users').doc(usuario.uid).get().then(doc => {
        const info_basica = document.querySelector('.json_info')
        const info_basica2 = document.querySelector('.json_info2')

        let jason1 = ''
        let jason2 = ''

        let ium = `
            <span>${doc.data().name}</span><br>
            <span>${doc.data().last_name}</span><br>
            <span>${doc.data().birthday}</span>`

        jason1 += ium

        let idois = `
            <span>${usuario.email}</span><br>`

        if (doc.data().phone != ''){
            x = document.querySelector('.botoes2')
            x.innerHTML = '<button type="button" class="btn btn-dark btn-sm" disabled>Alterar</button><br>\n<button type="button" class="btn btn-dark btn-sm" id="alter_phone">Alterar</button>'
            idois += `<span>${doc.data().phone}</span>`
        }else{
            y = document.querySelector('.botoes2')
            y.innerHTML = '<button type="button" class="btn btn-dark btn-sm" disabled>Alterar</button><br>\n<button type="button" class="btn btn-outline-success btn-sm botao_rede" id="alter_phone">Adicionar</button>'
            idois += '<span>Não cadastrado</span>'
        }

        jason2 += idois

        tst_soc = document.querySelector('.sociais')
        tst_bt = document.querySelector('.botoes3')
        if (tst_soc.innerHTML != ''){
            tst_soc.innerHTML = ''
            tst_bt.innerHTML = ''
        }

        if (doc.data().rede1 != ''){
            total_redes += 1
            z = document.querySelector('.sociais')
            z.innerHTML += `<span>${doc.data().rede1}</span><br>`
            a = document.querySelector('.botoes3')
            a.innerHTML += '<button type="button" class="btn btn-danger btn-sm" id="remover_rede1">Remover</button><br>'
        }

        if (doc.data().rede2 != ''){
            total_redes += 1
            z = document.querySelector('.sociais')
            z.innerHTML += `<span>${doc.data().rede2}</span><br>`
            a = document.querySelector('.botoes3')
            a.innerHTML += '<button type="button" class="btn btn-danger btn-sm" id="remover_rede2">Remover</button><br>'
        }

        if (doc.data().rede3 != ''){
            total_redes += 1
            z = document.querySelector('.sociais')
            z.innerHTML += `<span>${doc.data().rede3}</span><br>`
            a = document.querySelector('.botoes3')
            a.innerHTML += '<button type="button" class="btn btn-danger btn-sm" id="remover_rede3">Remover</button><br>'
        }

        if (doc.data().rede4 != ''){
            total_redes += 1
            z = document.querySelector('.sociais')
            z.innerHTML += `<span>${doc.data().rede4}</span><br>`
            a = document.querySelector('.botoes3')
            a.innerHTML += '<button type="button" class="btn btn-danger btn-sm" id="remover_rede4">Remover</button><br>'
        }

        if (doc.data().rede5 != ''){
            total_redes += 1
            z = document.querySelector('.sociais')
            z.innerHTML += `<span>${doc.data().rede5}</span><br>`
            a = document.querySelector('.botoes3')
            a.innerHTML += '<button type="button" class="btn btn-danger btn-sm" id="remover_rede5">Remover</button><br>'
        }
        if (total_redes == 0){
            y = document.querySelector('.sociais')
            y.innerHTML = '<span>Nenhuma rede social cadastrada</span>'
        }
        if (total_redes >= 5) {
            document.querySelector('#add_rede').style.visibility = 'hidden'
            total_redes = 0
        }

        info_basica.innerHTML = jason1
        info_basica2.innerHTML = jason2

    }).then(f => {
        carregar_botoes(total_redes)
    })
}

auth.onAuthStateChanged(user => {
    if (user == null){
        document.querySelector('.b_login').style.display = 'flex'
        document.querySelector('.b_registro').style.display = 'flex'
        document.querySelector('.b_logout').style.display = 'none'
        document.querySelector('.B_menu').style.display = 'none'
        document.querySelector('.b_account').style.display = 'none'
    }
    else{
        carreteiro(user)
        document.querySelector('.b_login').style.display = 'none'
        document.querySelector('.b_registro').style.display = 'none'
        document.querySelector('.b_logout').style.display = 'flex'
        document.querySelector('.B_menu').style.display = 'flex'
        document.querySelector('.b_account').style.display = 'flex'
    }
})