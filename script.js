let imgsPath = ['./imgs/calendar-img-one.jpg','./imgs/calendar-img-two.jpg','./imgs/calendar-img-three.jpg','./imgs/calendar-img-four.jpg'];
//selecting each imgTag and storing in a NodeList
let imgContainer = document.querySelector('.img-container');

//getting my squares with css atribute selector 
let squares = document.querySelectorAll('.square-container div');

//let secondSquare = document.querySelector('.square-container div[name=second]');
//let thirdSquare = document.querySelector('.square-container div[name=third]');
//let fourthSquare = document.querySelector('.square-container div[name=fourth]');

//adiciona um event listener para cada elemento squere (versao otimizada)
for (let index = 0; index < squares.length; index++) {
    const element = squares[index];
    element.addEventListener('click',clicked);
    
    
}

//Storing each img inside my imgContainer ClaSS
for(let index = 0 ; index < imgsPath.length ; index++){
    let image =  document.createElement('img');
    let path = imgsPath[index];
    image.src = imgsPath[index];
    image.setAttribute('name','non-visible');
    imgContainer.appendChild(image);
}


//functions

function clicked(e){
    //retorna o elemento que foi clicado
    let element = e.target;
    //seleciona a array com as img tags - que foi preenchida anteriormente
    let arrayImgtag = document.querySelectorAll('.img-container img');

    // do elemento que foi clicado seleciona o atributo INDEX
    let index = element.getAttribute('index');
    //para cada elemento da minha arraytag seta o atributo para non-visible
    for (let i = 0; i < arrayImgtag.length; i++) {
        const e = arrayImgtag[i];
        e.setAttribute('name','non-visible');
        element.style = 'background-color: white';
        
    }
    // seta o atributo com a classe visible - com o index recebido do click para dentro da array de imagem.
    arrayImgtag[index].setAttribute('name','visible');
    
}

//////////////////////////////////////////////////

let mainContent = document.getElementsByClassName('content');

function myfunction(){
    
}



