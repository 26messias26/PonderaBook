function(id){
    // PUXA OS DADOS SOBRE O LIVRO
    $.ajax({
       url: "https://www.googleapis.com/books/v1/volumes/",
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
}

// PROCURA LIVROS RELACIONADOS
// CODIGO DE AVALIAÇÃO STARS


window.onload = function(){

   
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

function Avaliar(estrela) {
   
    let s1 = document.getElementById("s1");
    let s2 = document.getElementById("s2");
    let s3 = document.getElementById("s3");
    let s4 = document.getElementById("s4");
    let s5 = document.getElementById("s5");
    let avaliacao = 0;
   
    if (estrela == 5){ 
        document.getElementById("s1").style.color = "rgb(255, 208, 0)";
        document.getElementById("s2").style.color = "rgb(255, 208, 0)";
        document.getElementById("s3").style.color = "rgb(255, 208, 0)";
        document.getElementById("s4").style.color = "rgb(255, 208, 0)";
        document.getElementById("s5").style.color = "rgb(255, 208, 0)";
        avaliacao = 5;
    }
    if (estrela == 4){ 
        document.getElementById("s1").style.color = "rgb(255, 208, 0)";
        document.getElementById("s2").style.color = "rgb(255, 208, 0)";
        document.getElementById("s3").style.color = "rgb(255, 208, 0)";
        document.getElementById("s4").style.color = "rgb(255, 208, 0)";
        document.getElementById("s5").style.color = "rgb(107, 107, 107)";
        avaliacao = 4;
        }
    if (estrela == 3){ 
        document.getElementById("s1").style.color = "rgb(255, 208, 0)";
        document.getElementById("s2").style.color = "rgb(255, 208, 0)";
        document.getElementById("s3").style.color = "rgb(255, 208, 0)";
        document.getElementById("s4").style.color = "rgb(107, 107, 107)";
        document.getElementById("s5").style.color = "rgb(107, 107, 107)";
        avaliacao = 3;
        }

    if (estrela == 2){ 
        document.getElementById("s1").style.color = "rgb(255, 208, 0)";
        document.getElementById("s2").style.color = "rgb(255, 208, 0)";
        document.getElementById("s3").style.color = "rgb(107, 107, 107)";
        document.getElementById("s4").style.color = "rgb(107, 107, 107)";
        document.getElementById("s5").style.color = "rgb(107, 107, 107)";
        avaliacao = 2;
        }
    if (estrela == 1){ 
        document.getElementById("s1").style.color = "rgb(255, 208, 0)";
        document.getElementById("s2").style.color = "rgb(107, 107, 107)";
        document.getElementById("s3").style.color = "rgb(107, 107, 107)";
        document.getElementById("s4").style.color = "rgb(107, 107, 107)";
        document.getElementById("s5").style.color = "rgb(107, 107, 107)";
        avaliacao = 1;
        }
    }