var canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// carregando imagens 
var bird = new Image();
bird.src = "images/bird.png"
var bg = new Image();
bg.src = "images/bg.png"
var chao = new Image();
chao.src = "images/chao.png"
var canocima = new Image();
canocima.src = "images/canocima.png"
var canobaixo = new Image();
canobaixo.src = "images/canobaixo.png"

// variaveis

var eec = 100;
var constant;
var bX = 33;
var bY = 200;
var gravity = 1.4;
var score = 0;
var cano = []

cano[0] = {
    x : canvas.width,
    y : 0
}

//carregando sons
var fly = new Audio();
fly.src = "sounds/fly.mp3"
var scor = new Audio();
scor.src = "sound/score.mp3"

// captura de tecla
document.addEventListener("keydown",voa)

// voando
function voa(){
    bY = bY - 30;
    fly.play();
}

function jogo(){
    // fundo do jogo
    ctx.drawImage(bg,0,0)
    // drawImage (imagem,x,y)

    // crando canos
    for(let i = 0; i < cano.length; i++){
        constant = canocima.height + eec;
        // condigurando o cano de cima
        ctx.drawImage(canocima, cano[i].x, cano[i].y);
        //configurando o cano de baixo
        ctx.drawImage(canobaixo, cano[i].x, cano[i].y+constant);
        // movimentação do cano
        cano[i].x = cano[i].x - 1
        // criar novos canos
        if(cano[i].x === 125){
            cano.push({
                x : canvas.width,
                y : Math.floor(Math.random()*canocima.height)-canocima.height
                
            });
        }
    }

    // desenhando o chao
    ctx.drawImage(chao,0,canvas.height - chao.height);

    // passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravity;

    requestAnimationFrame(jogo);

}

jogo();