
class jogoCorrida {
    constructor() {
        this.cardCentro = cardCentro
        this.velocidadeHorizontal = 10;
        this.cardCentro.style.left = '43%'
        this.in1 = in1;
        this.in2 = in2;
        this.in3 = in3;
        this.explosao = explosao
        this.explosao2 = explosao2;
        this.explosao3 = explosao3;
        this.score = 0
        this.pausa = false
        this.cardCentro.style.display = "block";
        this.velocidade = 1
        this.atualizaScore = atualizaScore;
        this.arvore = arvore;
        this.arvoreId;
        this.posicaoArvore;
        this.lastUpdateTime = 0
        this.corZebraStarted
        this.interval
        this.corZebraId=null;
        this.contador
    
        document.addEventListener('keydown', this.moverCarro.bind(this))
        document.addEventListener('keyup', this.handlePausa.bind(this))

    }




    corZebra=(timestamp)=> {
        
            
        if (!this.lastUpdateTime) {
            this.lastUpdateTime = timestamp;
        }
        const zebra1 = document.querySelectorAll(".zebracor1")
const zebra2 = document.querySelectorAll(".zebracor2")
        console.log(this.lastUpdateTime)
        const deltaTime = timestamp - this.lastUpdateTime;
        console.log(this.contador)
        
        if (deltaTime > this.interval) {
            console.log(this.lastUpdateTime)
            zebra1.forEach(element => {
                element.className = "zebracor" + this.contador;
            });
            zebra2.forEach(element => {
                element.className = "zebracor" + (this.contador === 1 ? 2 : 1);
            });
            this.contador++;
            if (this.contador > 2) {
                this.contador = 1;
            }
            
            this.lastUpdateTime = timestamp;
        }
        this.corZebraId = requestAnimationFrame(this.corZebra);
    }


    moverCarro(event) {
        if (this.pausa) return;
        let carroAtivo = this.cardCentro

        if (carroAtivo) {
            let leftAtual = parseInt(carroAtivo.style.left) || 0

            if (event.key === "ArrowLeft" || event.key === "a") {

                carroAtivo.style.left = (leftAtual - this.velocidadeHorizontal) + '%';

            } else if (event.key === "ArrowRight" || event.key === "d") {
                carroAtivo.style.left = (leftAtual + this.velocidadeHorizontal) + '%';

            }
            this.limitarMovimeto(carroAtivo)
        }
    }

    gameOver() {
        setTimeout(() => {
            alert("Game Over")
            this.retornar()
            this.parar()

            cancelAnimationFrame(this.corZebraId);
            cancelAnimationFrame(this.arvoreId);
            this.score = 0
            this.mostraScore()


        }, "350");
    }
    Explosao() {

        if (this.in1.style.top >= "74%" && this.cardCentro.style.display === "block" && this.cardCentro.style.left < "33%") {

            this.in1.style.position = "absolute";
            this.in1.style.top = "-188px";
            this.cardCentro.style.display = "none"
            this.explosao.style.display = "block"
            this.gameOver();
        } else if (this.in2.style.top >= "74%" && this.cardCentro.style.display === "block" && (this.cardCentro.style.left > "33%" && this.cardCentro.style.left < "66%")) {
            
            this.in2.style.position = "absolute";
            this.in2.style.top = "-188px";
            this.cardCentro.style.display = "none"
            this.explosao2.style.display = "block"

            this.gameOver();
        } else if (this.in3.style.top >= "74%" && this.cardCentro.style.display === "block" && cardCentro.style.left > '66%') {

            this.in3.style.position = "absolute";
            this.in3.style.top = "-188px";
            this.cardCentro.style.display = "none"
            this.explosao3.style.display = "block"
            this.gameOver();
        } else {

            return;
        }
    }

    limitarMovimeto(carroAtivo) {
        const estradaWidthPx = estrada.getBoundingClientRect().width;
        const carroWidthPx = carroAtivo.offsetWidth; 
        const carroWidthPercentage = (carroWidthPx / estradaWidthPx) * 100;

        let currentLeftPercentage = parseFloat(carroAtivo.style.left) || 0;

        
        const minLeftPercentage = 0;
        
        const maxLeftPercentage = 100 - carroWidthPercentage;

        
        if (currentLeftPercentage < minLeftPercentage) {
            carroAtivo.style.left = minLeftPercentage + '%';
        } else if (currentLeftPercentage > maxLeftPercentage) {
            carroAtivo.style.left = maxLeftPercentage + '%';
        }
    }

    animarInimigos(arvore, inimigo, posicao, velocidade, condicaoDeParada) {
        return new Promise(resolve => {
            const animate = () => {
                arvore.style.top = posicao + '%'
                inimigo.style.display = "block"
                inimigo.style.top = posicao + '%';
                posicao += velocidade;

                if (posicao > 74) {

                    inimigo.style.display = "none";
                    this.Explosao()
                }
                if (posicao == 94) {
                    this.arvore.style.top = "-10%";
                    this.arvore.style.display = "none"
                    console.log
                }


                if (condicaoDeParada(posicao)) {
                    this.Score()
                    this.mostraScore()
                    cancelAnimationFrame(inimigo.animationId);
                    cancelAnimationFrame(arvore.animationId);
                    resolve();
                } else {
                    inimigo.animationId = requestAnimationFrame(animate)

                }
            }
            inimigo.animationId = requestAnimationFrame(animate)
        })
    }

    *iniciarAnimacoesInimigos() {
        while (true) {
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in1, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in3, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in1, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in3, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in1, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in3, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in1, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in3, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in1, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in3, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in3, 0, this.velocidade, (posicao) => posicao > 100);
            yield this.animarInimigos(this.arvore, this.in2, 0, this.velocidade, (posicao) => posicao > 100);
        }
    }


    retornar() {

        this.cardCentro.style.display = "block";
        this.explosao.style.display = "none"
        this.explosao2.style.display = "none"
        this.explosao3.style.display = "none"

    }



    jogar() {
        if (this.pausa) {
            return;
        }
        this.lastUpdateTime = 0;

        this.corZebraStarted = false
        this.interval = 200;
        this.corZebraId=null;
        this.contador = 1;
        this.posicaoArvore = 0;
        this.arvoreStarted = false;
        this.pausa = false
        this.score = 0
        this.velocidade = 1
        const animacoes = this.iniciarAnimacoesInimigos();
        const proximoPasso = () => {
            const resultado = animacoes.next();
            if (!resultado.done) {
                resultado.value.then(proximoPasso)
            } else {
                animacoes;
            }
        }
        proximoPasso()
        this.in1.style.top = "-188px";
        this.arvore.style.top = "1%"
        this.in2.style.top = "-188px";
        this.in3.style.top = "-188px";


        console.log(this.lastUpdateTime)
        this.corZebra();


        if (this.score > 1000) {
            this.velocidade = 1.4
        }
        if (this.score > 2000) {
            this.velocidade = 1.8
        }
        if (this.score > 3000) {
            this.velocidade = 2
        }
        if (this.score > 4000) {
            this.velocidade = 2.4
        }

    }

    

    pausar() {
        this.pausa = !this.pausa
        console.log("pausa " + this.pausa)
        cancelAnimationFrame(this.in1.animationId);
        cancelAnimationFrame(this.in2.animationId);
        cancelAnimationFrame(this.in3.animationId);
        cancelAnimationFrame(corZebraId);
        cancelAnimationFrame(arvoreId);


    }
    parar() {
        this.pausa = false
        cancelAnimationFrame(this.in1.animationId);
        cancelAnimationFrame(this.in2.animationId);
        cancelAnimationFrame(this.in3.animationId);
        this.in1.animationId = null;
        this.in2.animationId = null;
        this.in3.animationId = null;
        this.in3.style.top = "-188px";
        this.in2.style.top = "-188px";
        this.in1.style.top = "-188px";
        this.cardCentro.style.left = '200px'
        this.score = 0


        this.mostraScore()
        cancelAnimationFrame(this.corZebraId);
        cancelAnimationFrame(this.arvoreId);
    }


    Score() {
        this.score += 100
    }
    mostraScore() {
        this.atualizaScore.value = this.score
    }


    handlePausa(event) {
        if (event.code === "Space") {
            console.log(event)
            this.pausar()
        }
    }

}

const arvore = document.getElementById("arvore");
const in1 = document.querySelector("#iniesquerda");
const in2 = document.querySelector("#inicentro");
const in3 = document.querySelector("#inidireita");
const cardDireita = document.querySelector(".cardireita");
const cardCentro = document.querySelector(".carcentro");
const cardEsquerda = document.querySelector(".caresquerda")
const explosao = document.getElementById("explosao")
const explosao2 = document.getElementById("explosao2")
const explosao3 = document.getElementById("explosao3")
const estrada = document.getElementById("estrada");
const atualizaScore = document.querySelector(".score")
const iniciar = document.getElementById("jogar")
const parar = document.getElementById("parar")

const corrida = new jogoCorrida();

document.addEventListener('DOMContentLoaded', () => {
    iniciar.addEventListener('click', () => {
        ;

        corrida.jogar();

    })
})
document.addEventListener('DOMContentLoaded', () => {
    parar.addEventListener('click', () => {
        ;

        corrida.parar();

    })
})

