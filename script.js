//move the cart
 document.addEventListener('keyup', function(event) {
     const cardDireita = document.querySelector(".cardireita");
     const cardCentro = document.querySelector(".carcentro");
     const cardEsquerda = document.querySelector(".caresquerda");

     if ((event.key === "ArrowLeft" || event.key==="a") && cardEsquerda.style.display === "none" && cardCentro.style.display === "block") {
         cardEsquerda.style.display = "block";
         cardCentro.style.display = "none";
         console.log("2");
     } else if ((event.key === "ArrowRight" || event.key==="d" )&& cardCentro.style.display === "block" && cardEsquerda.style.display === "none") {
         cardDireita.style.display = "block";
         cardCentro.style.display = "none";
         console.log(cardEsquerda.style.visibility);
     } else if ((event.key === "ArrowLeft" || event.key==="a") && cardDireita.style.display === "block" ) {
         cardDireita.style.display = "none";
         cardEsquerda.style.display = "none";
         cardCentro.style.display = "block";
         console.log("4");
     } else if ((event.key === "ArrowRight" || event.key==="d") && cardDireita.style.display === "none" && cardCentro.style.display === "none" ) {
         cardEsquerda.style.display = "none";
         cardCentro.style.display = "block";
         console.log("1");
     }
 });

 //Load da página

     document.addEventListener('DOMContentLoaded', function inicio() {
     const cardCentro = document.querySelector('.carcentro');
     const cardEsquerda = document.querySelector(".caresquerda");
     cardEsquerda.style.display = "none";
     cardCentro.style.display = "block";
     document.querySelector(".cardireita").style.display = "none";
 });

//Retorno após Game Over

function retornaresqurda(){
   const in5=document.getElementById("in5")
   const cardDireita = document.querySelector(".cardireita");
   const cardCentro = document.querySelector(".carcentro");
   const carde=document.querySelector(".caresquerda")
   const explosao=document.getElementById("explosao")
   carde.style.display="block"
   explosao.style.display="none"
   cardDireita.style.display="none"
   cardCentro.style.display="none"
}
function retornarcentro(){
    const inc5=document.getElementById("inc5")
   const cardDireita = document.querySelector(".cardireita");
   const cardEsquerda = document.querySelector(".caresquerda");
   const cardc=document.querySelector(".carcentro")
   const explosao2=document.getElementById("explosao2")
   cardc.style.display="block"
   explosao2.style.display="none"
   cardDireita.style.display="none"
   cardEsquerda.style.display="none"
}
function retornardireita(){
   const ind5=document.getElementById("ind5")
   const cardCentro = document.querySelector(".carcentro");
   const cardEsquerda = document.querySelector(".caresquerda");
   const card=document.querySelector(".cardireita")
   const explosao3=document.getElementById("explosao3")
   card.style.display="block"
   explosao3.style.display="none"
   cardEsquerda.style.display="none"
   cardCentro.style.display="none"
}

//Jogar

 let pausa=false;
 var posicao1;
 var posicao2;
 var posicao3;
 var velocidade;
 var score=0;
 var playId;
 var play2Id;
 var play3Id;
 var play4Id
 var play5Id
 var play6Id
 var play7Id;
 var play8Id;
 var play9Id;
 var play10Id;
 var play11Id;
 var play12Id;
 var play13Id;
 var play14Id;
 var play15Id;
 var play3Started=false
 var play2Started=false
 var playStarted=false
 var jogarStarted=false
 var play4Started=false
 var play5Started=false
 var play7Started=false
 var play8Started=false
 var play9Started=false
 var playStarted=false
 var play10Started=false
 var play11Started=false
 var play12Started=false
 var jogar13Started=false
 var play14Started=false
 var play15Started=false
 var jogar1Ativa=false
 var jogar2Ativa=false
 var jogar3Ativa=false
function jogar() {
     if(pausa){
         return;
}
     jogar1Ativa=true
     jogarStarted=true
     posicao1 = 0;
     posicao2 = 0;
     posicao3 = 0;
     velocidade = 10;
     in1 = document.querySelector("#iniesquerda");
     in2 = document.querySelector("#inicentro");
     in3 = document.querySelector("#inidireita");
     in3.style.top="-188px"
     if(jogarStarted==true)
     play();
     play2();
     play3();
     if(score>18){
        velocidade=11
     }
     if(score>36){
        velocidade=12
   }
     if(score>54){
      velocidade=13
   }
   if(score>72){
      velocidade=14
   }
 }
///*
function jogar2(){
     if(pausa){
         return;
}  
    jogar1Ativa=false
    jogar2Ativa=true
    jogarStarted=true
     posicao1 = 0;
     posicao2 = 0;
     posicao3 = 0;
     velocidade = 10;
     in1 = document.querySelector("#iniesquerda");
     in2 = document.querySelector("#inicentro");
     in3 = document.querySelector("#inidireita");
     in1.style.top="-188px"
     if(jogarStarted==true)
     play4();
     play5();
     play6();
if(score>18){
        velocidade=11
     }
    if(score>36){
        velocidade=12
   }
    if(score>54){
      velocidade=13
   }
   if(score>72){
      velocidade=14
   }
}

function jogar3(){
     if(pausa){
         return;
}
    jogar3Ativa=true
    jogar2Ativa=false
    jogarStarted=true
     posicao1 = 0;
     posicao2 = 0;
     posicao3 = 0;
     velocidade = 10;
     in1 = document.querySelector("#iniesquerda");
     in2 = document.querySelector("#inicentro");
     in3 = document.querySelector("#inidireita");
     in3.style.top="-188px"
     if(jogarStarted==true)
     play7();
     play8();
     play9();
 if(score>18){
        velocidade=11
     }
    if(score>36){
        velocidade=12
   }
   if(score>54){
      velocidade=13
   }
   if(score>72){
      velocidade=14
   }
}

function jogar4() {
     if(pausa){
         return;
}
      console.log("jogar 4")
     jogar1Ativa=true
     jogarStarted=true
     posicao1 = 0;
     posicao2 = 0;
     posicao3 = 0;
     velocidade = 10;
     in1 = document.querySelector("#iniesquerda");
     in2 = document.querySelector("#inicentro");
     in3 = document.querySelector("#inidireita");
     in3.style.top="-188px"
     if(jogarStarted==true)
     play10();
     play11();
     play12();
     if(score>18){
        velocidade=11
     }
     if(score>36){
        velocidade=12
   }
     if(score>54){
      velocidade=13
   }
   if(score>72){
      velocidade=14
   }
 }

function jogar5() {
     if(pausa){
         return;
}
      console.log("jogar 5")
     jogar1Ativa=true
     jogarStarted=true
     posicao1 = 0;
     posicao2 = 0;
     posicao3 = 0;
     velocidade = 10;
     in1 = document.querySelector("#iniesquerda");
     in2 = document.querySelector("#inicentro");
     in3 = document.querySelector("#inidireita");
     in3.style.top="-188px"
     if(jogarStarted==true)
     play13();
     play14();
     play15();
     if(score>18){
        velocidade=11
     }
     if(score>36){
        velocidade=12
   }
     if(score>54){
      velocidade=13
   }
   if(score>72){
      velocidade=14
   }
 }


function play4() {
   
     const explosao2=document.querySelector(".explosao2")
     const cardCentro = document.querySelector(".carcentro");
     
     if (posicao1 < 765 && play4Started==false) {
        //console.log( "posicao1 "+posicao1)
         posicao1 = posicao1 + velocidade;
         in2.style.top = posicao1 + 'px';
         if(cardCentro.style.display==="block" && posicao1>578){
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             cardCentro.style.display="none"
             explosao2.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornarcentro()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
           }
         if (posicao1 > 578) {
             in2.style.position = "absolute";
             in2.style.top = "-188px";
            
             play4Started=true
             if(play6Started=false){
             posicao1=-188-(765-578)}
             score = score + 1;
             mostraScore()
       
         }
         
     }
      
     play4Id = requestAnimationFrame(play4);
     
 }
function play5() {
      const explosao3=document.querySelector(".explosao3")
      const cardDireita = document.querySelector(".carDireita");
     if (posicao2 < 765 && posicao1 > 578 && play5Started==false) {
         posicao2 = posicao2 + velocidade;
         in3.style.top = posicao2 + 'px';
         if(posicao2>578 && cardDireita.style.display==="block"){

             in3.style.position = "absolute";
             in3.style.top = "-188px";;
             cardDireita.style.display="none"
             explosao3.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornardireita()
              posicao1=0
              playStarted=false
              //jogarStarted=false
              score=0
              mostraScore()
              
             }, "350");
           }
         if (posicao2 > 578) {
             in3.style.position = "absolute";
             in3.style.top = "-188px";
             
             play5Started=true
               
             score=score+1
             mostraScore()
             
             if(score>=2 && !play6Started){
            play6()
            play6Started=false
        }
       
         
       }
     }
     play5Id = requestAnimationFrame(play5);
     
 } 

function play6() {
    posicao1=0
    //console.log( "posicao2 "+posicao2)
     const cardEsquerda = document.querySelector(".caresquerda");
     const explosao=document.getElementById("explosao")
     if (posicao3<765 && posicao2 > 578 && play6Started==false ) {
        
         posicao3 = posicao3 + velocidade;
         in1.style.top = posicao3 + 'px';
        
         if(cardEsquerda.style.display==="block" && posicao3>578){
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             cardEsquerda.style.display="none"
             explosao.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornaresqurda()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
           }
         if (posicao3 > 578) {
             
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             posicao3=-188-(765-578)
             score=score+1
             mostraScore()
             
             play7Started=false
             play8Started=false
             
            cancelAnimationFrame(play7Id)
            cancelAnimationFrame(play8Id)
            
            posicao2=0
            
            jogar3()
         }
         play6started=true
      play6Id = requestAnimationFrame(play6);
       
      

    }  
     
 }

 function play() {
    
     const explosao=document.querySelector(".explosao")
     const cardEsquerda = document.querySelector(".caresquerda");
     
     if (posicao1 < 765 && playStarted==false) {
        //console.log( "posicao1 "+posicao1)
         posicao1 = posicao1 + velocidade;
         in1.style.top = posicao1 + 'px';
         if(cardEsquerda.style.display==="block" && posicao1>578){
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             cardEsquerda.style.display="none"
             explosao.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornaresqurda()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
           }
         if (posicao1 > 578) {
             in1.style.position = "absolute";
             in1.style.top = "-188px";
            
             playStarted=true
             if(play3Started=false){
             posicao1=-188-(765-578)}
             score = score + 1;
             mostraScore()
       
         }
         
     }
      
     playId = requestAnimationFrame(play);
     
 }

 function play2() {
      const explosao2=document.querySelector(".explosao2")
      const cardCentro = document.querySelector(".carcentro");
     if (posicao2 < 765 && posicao1 > 578 && play2Started==false) {
         posicao2 = posicao2 + velocidade;
         in2.style.top = posicao2 + 'px';
         if(posicao2>578 && cardCentro.style.display==="block"){

             in2.style.position = "absolute";
             in2.style.top = "-188px";;
             cardCentro.style.display="none"
             explosao2.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornarcentro()
              posicao1=0
              playStarted=false
              //jogarStarted=false
              score=0
              mostraScore()
              
             }, "350");
           }
         if (posicao2 > 578) {
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             
             play2Started=true
               
             score=score+1
             mostraScore()
             
             if(score>=2 && !play3Started){
            play3()
            play3Started=false
        }
       
         
       }
     }
     play2Id = requestAnimationFrame(play2);
     
 }

 function play3() {
    posicao1=0
    //console.log( "posicao2 "+posicao2)
     const cardDireita = document.querySelector(".cardireita");
     const explosao3=document.getElementById("explosao3")
     if (posicao3<765 && posicao2 > 578 && play3Started==false ) {
        
         posicao3 = posicao3 + velocidade;
         in3.style.top = posicao3 + 'px';
        
         if(posicao3>578 && cardDireita.style.display==="block"){
             
             
             in3.style.position = "absolute";
             in3.style.top = "-188px";;
             cardDireita.style.display="none"
             explosao3.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornardireita()
              //jogarStarted=false
              score=0
              mostraScore()
              //const atualizaScore=document.querySelector(".score")
             // atualizaScore.value=score
             }, "350");
           }
         if (posicao3 > 578) {
             
             in3.style.position = "absolute";
             in3.style.top = "-188px";
             posicao3=-188-(765-578)
             score=score+1
             mostraScore()
             
             play4Started=false
             play5Started=false
             
            cancelAnimationFrame(play4Id)
            cancelAnimationFrame(play5Id)
            
            posicao2=0
            
            jogar2()
         }
         play3started=true
      play3Id = requestAnimationFrame(play3);
       
      

    }  
     
 }


function play7() {
    
     const explosao2=document.querySelector(".explosao2")
     const cardCentro = document.querySelector(".carcentro");
     const cardEsquerda= document.querySelector(".caresquerda");
     if (posicao1 < 765 && play7Started==false) {
        //console.log( "posicao1 "+posicao1)
         posicao1 = posicao1 + velocidade;
         in2.style.top = posicao1 + 'px';
         in1.style.top = posicao1 + 'px'
         if(cardCentro.style.display==="block" && posicao1>578){
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             cardCentro.style.display="none"
             explosao2.style.display="block"
             parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornarcentro()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
            }
             if(cardEsquerda.style.display==="block" && posicao1>578){
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             cardEsquerda.style.display="none"
             explosao.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornaresqurda()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
          }
         if (posicao1 > 578) {
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             play7Started=true
             if(play6Started=false){
             posicao1=-188-(765-578)}
             score = score + 1;
             mostraScore()
       
         }
         
     }
      
     play7Id = requestAnimationFrame(play7);
     
 }
function play8() {
      console.log("velocidade "+velocidade )
      const explosao3=document.querySelector(".explosao3")
      const cardDireita = document.querySelector(".carDireita");
      const cardCentro = document.querySelector(".carcentro");
     if (posicao2 < 765 && posicao1 > 578 && play8Started==false) {
         posicao2 = posicao2 + velocidade;
         in3.style.top = posicao2 + 'px';
         in2.style.top = posicao2 + 'px';
         
         if(posicao2>578 && cardDireita.style.display==="block"){

             in3.style.position = "absolute";
             in3.style.top = "-188px";;
             cardDireita.style.display="none"
             explosao3.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornardireita()
              posicao1=0
              playStarted=false
              //jogarStarted=false
              score=0
              mostraScore()
              
             }, "350");
           }
            if(posicao2>578 && cardCentro.style.display==="block"){

             in2.style.position = "absolute";
             in2.style.top = "-188px";;
             cardCentro.style.display="none"
             explosao2.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornarcentro()
              posicao1=0
              playStarted=false
              //jogarStarted=false
              score=0
              mostraScore()
              
             }, "350");
           }

         if (posicao2 > 578) {
             in3.style.position = "absolute";
             in3.style.top = "-188px";
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             play8Started=true
               
             score=score+1
             mostraScore()
             
             if(score>=2 && !play9Started){
            play9()
            play9Started=false
        }
       
         
       }
     }
     play8Id = requestAnimationFrame(play8);
     
 } 

function play9() {
    posicao1=0
    //console.log( "posicao2 "+posicao2)
     const cardEsquerda = document.querySelector(".caresquerda");
     const explosao=document.getElementById("explosao")
     if (posicao3<765 && posicao2 > 578 && play9Started==false ) {
        
         posicao3 = posicao3 + velocidade;
         in1.style.top = posicao3 + 'px';
        
         if(posicao3>578 && cardEsquerda.style.display==="block"){
             
             
             in1.style.position = "absolute";
             in1.style.top = "-188px";;
             cardEsquerda.style.display="none"
             explosao.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornaresqurda()
              //jogarStarted=false
              score=0
              mostraScore()
             
             }, "350");
           }
         if (posicao3 > 578) {
             
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             posicao3=-188-(765-578)
             score=score+1
             mostraScore()
             
             play10Started=false
             play11Started=false
             
            cancelAnimationFrame(play10Id)
            cancelAnimationFrame(play11Id)
            
            posicao2=0
            
            jogar4()
         }
         play9started=true
      play9Id = requestAnimationFrame(play9);
       
      

    }  
     
 }


function play10() {
    
     const explosao=document.querySelector(".explosao")
     const cardEsquerda = document.querySelector(".caresquerda");
     
     if (posicao1 < 765 && play10Started==false) {
        //console.log( "posicao1 "+posicao1)
         posicao1 = posicao1 + velocidade;
         in1.style.top = posicao1 + 'px';
         if(cardEsquerda.style.display==="block" && posicao1>578){
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             cardEsquerda.style.display="none"
             explosao.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornaresqurda()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
           }
         if (posicao1 > 578) {
             in1.style.position = "absolute";
             in1.style.top = "-188px";
            
             play10Started=true
             if(play12Started=false){
             posicao1=-188-(765-578)}
             score = score + 1;
             mostraScore()
       
         }
         
     }
      
     play10Id = requestAnimationFrame(play10);
     
 }

 function play11() {
      const explosao2=document.querySelector(".explosao2")
      const cardCentro = document.querySelector(".carcentro");
     if (posicao2 < 765 && posicao1 >= 188 && play11Started==false) {
         posicao2 = posicao2 + velocidade;
         in2.style.top = posicao2 + 'px';
         if(posicao2>578 && cardCentro.style.display==="block"){

             in2.style.position = "absolute";
             in2.style.top = "-188px";;
             cardCentro.style.display="none"
             explosao2.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornarcentro()
              posicao1=0
              playStarted=false
              //jogarStarted=false
              score=0
              mostraScore()
              
             }, "350");
           }
         if (posicao2 > 578) {
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             
             play11Started=true
               
             score=score+1
             mostraScore()
             play11Started=true
             if(score>=2 && !play12Started){
            play12()
            play12Started=false
        }  
           
       }
       
     }
     play11Id = requestAnimationFrame(play11);
     
 }

 function play12() {
    posicao1=0
    //console.log( "posicao2 "+posicao2)
     const cardDireita = document.querySelector(".cardireita");
     const explosao3=document.getElementById("explosao3")
     if (posicao3<765 && posicao2 >= 188 && play12Started==false ) {
        
         posicao3 = posicao3 + velocidade;
         in3.style.top = posicao3 + 'px';
        
         if(posicao3>578 && cardDireita.style.display==="block"){
             
             
             in3.style.position = "absolute";
             in3.style.top = "-188px";;
             cardDireita.style.display="none"
             explosao3.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornardireita()
              //jogarStarted=false
              score=0
              mostraScore()
              //const atualizaScore=document.querySelector(".score")
             // atualizaScore.value=score
             }, "350");
           }
         if (posicao3 > 578) {
             
             in3.style.position = "absolute";
             in3.style.top = "-188px";
             posicao3=-188-(765-578)
             score=score+1
             mostraScore()
             
             play13Started=false
             play14Started=false
             
            cancelAnimationFrame(play13Id)
            cancelAnimationFrame(play14Id)
            
            posicao2=0
            
            jogar5()
         }
         play12started=true
      play12Id = requestAnimationFrame(play12);
       
      

    }  
     
 }




function play13() {
    
     const explosao=document.querySelector(".explosao")
     const cardCentro = document.querySelector(".carcentro");
     
     if (posicao1 < 765 && play13Started==false) {
        //console.log( "posicao1 "+posicao1)
         posicao1 = posicao1 + velocidade;
         in2.style.top = posicao1 + 'px';
         if(cardCentro.style.display==="block" && posicao1>578){
             in2.style.position = "absolute";
             in2.style.top = "-188px";
             cardCentro.style.display="none"
             explosao2.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornarcentro()
              //jogarStarted=false
              score=0
              mostraScore()
              
            
             }, "350");
           }
         if (posicao1 > 578) {
             in2.style.position = "absolute";
             in2.style.top = "-188px";
            
             play13Started=true
             if(play15Started=false){
             posicao1=-188-(765-578)}
             score = score + 1;
             mostraScore()
       
         }
         
     }
      
     play13Id = requestAnimationFrame(play13);
     
 }

 function play14() {
      const explosao2=document.querySelector(".explosao2")
      const cardEsquerda = document.querySelector(".caresquerda");
     if (posicao2 < 765 && posicao1 >= 188 && play14Started==false) {
         posicao2 = posicao2 + velocidade;
         in1.style.top = posicao2 + 'px';
         if(posicao2>578 && cardEsquerda.style.display==="block"){

             in1.style.position = "absolute";
             in1.style.top = "-188px";;
             cardEsquerda.style.display="none"
             explosao.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornaresqurda()
              posicao1=0
              playStarted=false
              //jogarStarted=false
              score=0
              mostraScore()
              
             }, "350");
           }
         if (posicao2 > 700) {
             in1.style.position = "absolute";
             in1.style.top = "-188px";
             
             play11Started=true
               
             score=score+1
             mostraScore()
             play14Started=true
             if(score>=2 && !play15Started){
            play15()
            play15Started=false
        }  
           
       }
       
     }
     play14Id = requestAnimationFrame(play14);
     
 }

 function play15() {
    posicao1=0
    //console.log( "posicao2 "+posicao2)
     const cardDireita = document.querySelector(".cardireita");
     const explosao3=document.getElementById("explosao3")
     if (posicao3<765 && posicao2 >= 188 && play15Started==false ) {
        
         posicao3 = posicao3 + velocidade;
         in3.style.top = posicao3 + 'px';
        
         if(posicao3>578 && cardDireita.style.display==="block"){
             
             
             in3.style.position = "absolute";
             in3.style.top = "-188px";;
             cardDireita.style.display="none"
             explosao3.style.display="block"
             //parar()
             setTimeout(() => {
              alert("Game Over")
              parar()
              retornardireita()
              //jogarStarted=false
              score=0
              mostraScore()
              //const atualizaScore=document.querySelector(".score")
             // atualizaScore.value=score
             }, "350");
           }
         if (posicao3 > 578) {
             
             in3.style.position = "absolute";
             in3.style.top = "-188px";
             posicao3=-188-(765-578)
             score=score+1
             mostraScore()
             
             playStarted=false
             play2Started=false
             
            cancelAnimationFrame(playId)
            cancelAnimationFrame(play2Id)
            
            posicao2=0
            
            jogar()
         }
         play15started=true
      play15Id = requestAnimationFrame(play15);
       
      

    }  
     
 }





 function score(){
    let score=0
    score=score+1
}

function mostraScore(){
     const atualizaScore=document.querySelector(".score")
     atualizaScore.value=score
}
 
function zerarPosicoes(){
    posicao1 = 0;
    posicao2 = 0;
    posicao3 = 0;
    console.log("zerar posiçoes")
}

 function parar() {
      pausa=false
     cancelAnimationFrame(play3Id);
     cancelAnimationFrame(play2Id);
     cancelAnimationFrame(playId);
      cancelAnimationFrame(play6Id);
     cancelAnimationFrame(play5Id);
     cancelAnimationFrame(play4Id);
     cancelAnimationFrame(play9Id);
     cancelAnimationFrame(play8Id);
     cancelAnimationFrame(play7Id);
    cancelAnimationFrame(play10Id);
     cancelAnimationFrame(play11Id);
     cancelAnimationFrame(play12Id);
     in3.style.position = "absolute";
             in3.style.top = "-188px";
            // posicao3=-188-(765-578)
      in2.style.position = "absolute";
             in2.style.top = "-188px";
     in1.style.position = "absolute";
             in1.style.top = "-188px";
     score=0
     playStarted=false
     play2Started=false
     posicao1 = 0;
     posicao2 = 0;
     posicao3 = 0;
     mostraScore()
 }

function pausar(){
     
      pausa=true
      console.log(pausa)
      cancelAnimationFrame(play3Id);
     cancelAnimationFrame(play2Id);
     cancelAnimationFrame(playId);
      cancelAnimationFrame(play6Id);
     cancelAnimationFrame(play5Id);
     cancelAnimationFrame(play4Id);
     cancelAnimationFrame(play9Id);
     cancelAnimationFrame(play8Id);
     cancelAnimationFrame(play7Id);
     cancelAnimationFrame(play10Id);
     cancelAnimationFrame(play11Id);
     cancelAnimationFrame(play12Id);
} 

function retomar(){
   pausa=false
   if(jogar1Ativa==true){
        console.log("estou aqui")
           jogar()}
   else if(jogar2Ativa=="true"){
           jogar2()
     }else if(jogar3Ativa==true){
           jogar3()
      }
   }

 document.addEventListener('keyup', function(event){
          
          
          if(event.code==="Space" /*|| event.key==="Space"*/&& pausa==false){
              pausar()          
       }     
})
 document.addEventListener('keyup', function(event){
      const tecla=event.code
      console.log(tecla)
     
     if(event.code==="Enter" && pausa==true){
      
      retomar()
}
})



