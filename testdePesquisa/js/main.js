
// --- FUNÇÃO DE PESQUISA --- //
function bookSearch(){
    let dado = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    // --- SOLICITA OS DADOS --- //
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + dado,
        dataType: "json",
        type:'GET',
        // CASO ENCONTRADO CRIARA O CARD
        success: function(data){
            console.log(data)
            for(i = 0; i<data.items.length; i++){
                results.innerHTML += `
                <div class="card_book">
                <h5> ${data.items[i].volumeInfo.title} </h5>
                ${data.items[i].volumeInfo.authors}
                
                </div>`
            }
        }
        

    })

}

document.getElementById('button').addEventListener('click',bookSearch,false)