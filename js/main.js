//------------------ janela de login ------------------//

// área responsável por controlar a exibição da janela de login

login_button = document.querySelector('.B_login')
login_button.addEventListener('click', (event) => {
    document.querySelector('.bg-modal').style.display = "flex";
})

close_log = document.querySelector('.close')
close_log.addEventListener('click', (event) => {
    document.querySelector('.bg-modal').style.display = "none";
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Escape'){
        document.querySelector('.bg-modal').style.display = "none";
    }
})

//-----------------------------------------------------//


// -------------- GERAÇÃO DOS LIVROS DO MAIN -------------- //



// -------------- GERAÇÃO DOS LIVROS DA PESQUISA -------------- //

// --- FUNÇÃO DE PESQUISA --- //
function bookSearch(){
    let dado = document.getElementById('search').value
    document.getElementById('cont').innerHTML = "";
    document.getElementById('cont').className = "cont_pesq cent_all";
    
    // --- SOLICITA OS DADOS --- 
    
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + dado,
        dataType: "json",
        
        // CASO ENCONTRADO, CRIARA O CARD
        success: function(data){
            console.log(data)
            for(i = 0; i<data.items.length; i++){
                cont.insertAdjacentHTML('beforeend', `
                <div class="card_book cent_all">
                <div class="thumbnail cent_all">
                <img src="${data.items[i].volumeInfo.imageLinks.thumbnail}">
                </div>
                <div class="label_pesq">
                <div class="pesq_title">${data.items[i].volumeInfo.title}</div>
                <div class="pesq_autor">${data.items[i].volumeInfo.authors}</div>
                </div>
                
                </div>`)
            }
        },
        type:'GET'
        // SE NÃO, REPORTARA UM ERRO
        // vou colocar o erro*
    });
    
}

document.getElementById('button').addEventListener('click',bookSearch,false)