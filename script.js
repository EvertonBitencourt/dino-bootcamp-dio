const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let is_Pular = false;
let posicao = 0;


function pressionarespaco(event){
    if(event.keyCode === 32){
        if(!is_Pular){
            pular();
        }      
    }
}

function pular(){
    
    is_Pular = true;

    let intervaloSubida = setInterval(() => {
        if(posicao >=150){
            clearInterval(intervaloSubida);
                
            //movimento para descer
            let intervaloDescida = setInterval(() =>{
                if (posicao <=0){
                    clearInterval(intervaloDescida);
                    is_Pular = false;
                }else{
                    posicao -=20;
                    dino.style.bottom = posicao + 'px';
                }
                }, 20);
            }else{  
                posicao += 20;
                dino.style.bottom = posicao +'px';
            }
    }, 20);
}

function criarCactos(){
    const cactos = document.createElement('div');
    let posicaoCactos = 1000;
    let criacaoAleatoria = Math.random() *6000;

    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    background.appendChild(cactos);

    let movimentoEsquerda = setInterval(() => {
        if(posicaoCactos < -60){
            clearInterval(movimentoEsquerda);
            background.removeChild(cactos);
        }else if(posicaoCactos > 0 && posicaoCactos < 60 && posicao < 60){

            clearInterval(movimentoEsquerda);
            document.body.innerHTML = '<h1 class = "game-over">Fim de Jogo</h1>';
        }else{
            posicaoCactos -= 10;
            cactos.style.left = posicaoCactos + 'px';
        }
    }, 20);

    setTimeout(criarCactos, criacaoAleatoria);
}

criarCactos();
document.addEventListener('keyup', pressionarespaco);

