function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let CamPesq = document.getElementById
    ("camp").value;

//console.log(section);
if(CamPesq == "") {

    section.innerHTML = "<p>Sem resultados</p>"
    return 0;

}

CamPesq = CamPesq.toLowerCase();

let pesquisa = " ";
let Titulo = "";
let Descricao = "";

for (let dado of info1) { 

    Titulo = dado.Titulo.toLowerCase();
    Descricao = dado.Descricao.toLowerCase(); 
 if (Titulo.includes(CamPesq) || Descricao.includes(CamPesq)){

 {

    pesquisa += ` 

    <div class="item-resultado">  
             <h2> ${dado.Titulo}</h2>
             <p class="descricao-meta"><small> ${dado.Descricao}</small></p>
            <a href="https://www.tecconcursos.com.br/" target="_blank">mais informações</a>
       </div>
       `
   
    };
 };
    
 if(!pesquisa){
    pesquisa = "<p>Nada encontrado</p>"
 }

 section.innerHTML = pesquisa;
 
}

}


