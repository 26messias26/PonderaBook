function bookSearch(){
    let dado = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log(dado)

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + dado,
        dataType: "json",
        success: function(data){
            for(i = 0; i<data.items.length; i++){
                results.innerHTML += `
                <div>
                <h5> ${data.items[i].volumeInfo.title} </h5>
                ${data.items[i].volumeInfo.authors}
                
                </div>`
            }
        },

        type:'GET'

    })

}

document.getElementById('button').addEventListener('click',bookSearch,false)