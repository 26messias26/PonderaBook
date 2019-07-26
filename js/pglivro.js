window.onload = function(){

    // PUXA OS DADOS SOBRE O LIVRO
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=maria",
        dataType: "json",
        type:'GET',
        
        success: function(data){
            console.log(data)    
            document.querySelector(".titulo").innerHTML = `${data.items[0].volumeInfo.title}`;
            document.querySelector(".book_a1").innerHTML = `<img src="${data.items[0].volumeInfo.imageLinks.thumbnail}">`
            document.querySelector(".book_a2").innerHTML = `<div>${data.items[0].volumeInfo.description}</div>`
            document.querySelector(".book_b1").innerHTML = `
            <ul class="bdata">
                <li>Titulo: ${data.items[0].volumeInfo.title}</li>
                <li>Autor: ${data.items[0].volumeInfo.authors}</li>
                <li>Editora: ${data.items[0].volumeInfo.publisher}</li>
                <li>Data de Publicação: ${data.items[0].volumeInfo.publishedDate}</li>
                <li>Lingua: ${data.items[0].volumeInfo.language}</li>
            </ul>`
            }
        // ${data.items[i].volumeInfo.title}
        // ${data.items[i].volumeInfo.authors}
        
        // SE NÃO, REPORTARA UM ERRO
        // vou colocar o erro*
    });

    // PROCURA LIVROS RELACIONADOS

    $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes?q=harry ",
        dataType:"json",
        tupe:"GET",

        success: function(data){
            let rela = document.querySelector(".list_re");
            for(i=1; i<data.items.length; i++){
                rela.insertAdjacentHTML("beforeend",`
                <li>
                    <div><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
                    <div class="titleB cent_all">${data.items[i].volumeInfo.title}</div>
                </li>`)
            }
        }
    });
}
