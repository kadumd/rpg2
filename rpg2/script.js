const jogador = {
    corpo: document.querySelector("#jogador"),
    velocidadeDeMovimento:20,
    olhando: "direita"
}

const andando = {
    intervaloD: false,
    intervaloA: false,
    intervaloW: false,
    intervaloS: false,
}

const pressionando = {
    d: false,
    a: false,
    w: false,
    s: false,
}

function funcaoJogador (evento) {
    let tecla = evento.key
    if (tecla == 'a') {
        if (pressionando.a == false){
            pressionando.a = true;
        clearInterval(pressionando.d)
        pressionando.d = false;
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia - "px"
        jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
        
        andando.intervaloD = setInterval(() => {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px" 
        
        jogador.olhando = "esquerda"
        }, 100);
    }
    }
    if (tecla == 'd') {
        if (pressionando.d == false){
            pressionando.d = true;
        clearInterval(pressionando.a)
        pressionando.a = false;
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px"
        jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";

        andando.intervaloD = setInterval(() => {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px" 
        
        jogador.olhando = "direita"
        }, 100);
    }
    }
    if (tecla == 'w') {
        if (pressionando.w == false){
            pressionando.w = true;
        clearInterval(pressionando.s)
        pressionando.s = false;
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0])
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
        jogador.corpo.style.top = novaDistancia + "px"
        if (jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')"
        } else if (jogador.olhando == 'esquerda'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')"
        }

        
        andando.intervaloD = setInterval(() => {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0])
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
        jogador.corpo.style.top = novaDistancia + "px" 
        
        jogador.olhando = "direita"
        }, 100);
    }
    }
    if (tecla == 's') {
        if (pressionando.s == false){
            pressionando.s = true;
        clearInterval(pressionando.w)
        pressionando.w = false;
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.top = novaDistancia + "px"
        if (jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')"
        } else if (jogador.olhando == 'esquerda'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')"
        }
    
        andando.intervaloD = setInterval(() => {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.top = novaDistancia + "px" 
    
        jogador.olhando = "direita"
        }, 100);
    }
    }
}

function disFuncaoDoJogador (evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if (pressionando.a == false){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
        clearInterval (andando.intervaloD)
        pressionando.a = false;
        if(pressionando.d == true && pressionando.d == false){
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
            jogador.corpo.style.left = novaDistancia + "px"
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";

            andando.intervaloD = setInterval(() => {
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
            jogador.corpo.style.left = novaDistancia + "px" 
        
            jogador.olhando = "direita"
            }, 100);
    }
    }
    if (tecla == 'd') {
        if (pressionando.a == false){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        }
        clearInterval (andando.intervaloD)
        pressionando.d = false;
        if (pressionando.a == true && pressionando.a ==false) {
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
            jogador.corpo.style.left = novaDistancia - "px"
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            
            andando.intervaloD = setInterval(() => {
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
            let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
            jogador.corpo.style.left = novaDistancia + "px" 
            
            jogador.olhando = "direita"
            }, 100);
        }
    }
    if (tecla == 'w') {
        if (pressionando.a == false){
            if(jogador.olhando == 'direita'){
                jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')"
            } else if (jogador.olhando == 'esquerda') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
            }
        }
        clearInterval (andando.intervaloD)
        pressionando.a = false;
        if(pressionando.d == true && pressionando.d == false){
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
            jogador.corpo.style.left = novaDistancia + "px"

            andando.intervaloD = setInterval(() => {
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
            jogador.corpo.style.left = novaDistancia + "px" 
        
            jogador.olhando = "direita"
            }, 100);
    }
    }
    if (tecla == 's') {
        if (pressionando.s == false){
        if(jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')"
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    clearInterval (andando.intervaloS)
    pressionando.a = false;
    if(pressionando.w == true && pressionando.w == false){
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px"
        jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";

        andando.intervaloW = setInterval(() => {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px" 
    
        jogador.olhando = "direita"
        }, 100);
    }
    }
}
window.addEventListener('keydown', funcaoJogador)
window.addEventListener('keyup', disFuncaoDoJogador)