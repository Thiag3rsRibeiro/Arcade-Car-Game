document.addEventListener('keyup', function(event) {
      const card=document.querySelector(".cardireita")
      const cardc=document.querySelector(".carcentro")
      const carde=document.querySelector(".caresquerda")
 
      
       if(carde.style.visibility=="hidden" && cardc.style.visibility=="visible" && event.key=="ArrowLeft"){
         
         carde.style.visibility="visible"
         cardc.style.visibility="hidden"
      console.log("2")
      }else if(cardc.style.visibility=="visible" && carde.style.visibility=="hidden" && event.key=="ArrowRight"){
         
         card.style.visibility="visible"
         cardc.style.visibility="hidden"
         carde.style.visibility="hidden"
      console.log("3")
      }else if(event.key=="ArrowLeft" && card.style.visibility=="visible"){
         
         card.style.visibility="hidden"
         carde.style.visibility="hidden"
         cardc.style.visibility="visible"
     console.log("4")
      }else if( event.key=="ArrowRight"){
         
         carde.style.visibility="hidden"
         cardc.style.visibility="visible"
         console.log("1")
      
      }
    });
function retornaresqurda(){
    const in5=document.getElementById("in5")
   const carde=document.querySelector(".caresquerda")
   const explosao=document.getElementById("explosao")
   carde.style.display="block"
   explosao.style.display="none"
}
function retornarcentro(){
    const inc5=document.getElementById("inc5")
   const cardc=document.querySelector(".carcentro")
   const explosao2=document.getElementById("explosao2")
   cardc.style.display="block"
   explosao2.style.display="none"
}
function retornardireita(){
    const ind5=document.getElementById("ind5")
   const card=document.querySelector(".cardireita")
   const explosao3=document.getElementById("explosao3")
   card.style.display="block"
   explosao3.style.display="none"
}

function jogar(){

function visivel(){
   const in1=document.getElementById("in1")
     in1.style.visibility="visible"
}
function esconder(){
     const in1=document.getElementById("in1")
     in1.style.visibility="hidden"
    console.log(in1)
}
 setTimeout(() => {
  visivel()
}, "500");
 
setTimeout(() => {
  esconder()
  
}, "1000");

function visivel2(){
   const in2=document.getElementById("in2")
     in2.style.visibility="visible"
}
function esconder2(){
     const in2=document.getElementById("in2")
     in2.style.visibility="hidden"
    console.log(in2)
}
 setTimeout(() => {
  visivel2()
}, "1000");
 
setTimeout(() => {
  esconder2()
}, "1500");

function visivel3(){
   const in3=document.getElementById("in3")
     in3.style.visibility="visible"
}
function esconder3(){
     const in3=document.getElementById("in3")
     in3.style.visibility="hidden"
    
}
 setTimeout(() => {
  visivel3()
}, "1500");
 
setTimeout(() => {
  esconder3()
  console.log("Delayed for 1 second.");
}, "2000");

function visivel4(){
   const in4=document.getElementById("in4")
     in4.style.visibility="visible"
}
function esconder4(){
     const in4=document.getElementById("in4")
     in4.style.visibility="hidden"
    
}
 setTimeout(() => {
  visivel4()
  console.log("Delayed for 1 second.");
}, "2000");
 
setTimeout(() => {
  esconder4()
}, "2500");

function visivel5(){
   const in5=document.getElementById("in5")
   const carde=document.querySelector(".caresquerda")
   const explosao=document.getElementById("explosao")
     in5.style.display="block"
    if(in5.style.display=="block" && carde.style.visibility=="visible"){
    in5.style.display="none"
    carde.style.display="none"
    explosao.style.display="block"
    clearInterval(intervalId)
    setTimeout(() => {
    alert("Game Over")
    parar()
    retornaresqurda()
}, "350");

}
}
function esconder5(){
     const in5=document.getElementById("in5")
     in5.style.display="none"
    
}
 timeoutId=setTimeout(() => {
  visivel5()
}, "2500");
 
setTimeout(() => {
  esconder5()
}, "3000");


/*coluna centro*/

function visivelc1(){
   const inc1=document.getElementById("inc1")
     inc1.style.visibility="visible"
}
function esconderc1(){
     const inc1=document.getElementById("inc1")
     inc1.style.visibility="hidden"
}
 setTimeout(() => {
  visivelc1()
}, "3500");
 
setTimeout(() => {
  esconderc1()
}, "4000");

function visivelc2(){
   const inc2=document.getElementById("inc2")
     inc2.style.visibility="visible"
}
function esconderc2(){
     const inc2=document.getElementById("inc2")
     inc2.style.visibility="hidden"
}
 setTimeout(() => {
  visivelc2()
}, "4000");
 
setTimeout(() => {
  esconderc2()
}, "4500");

function visivelc3(){
   const inc3=document.getElementById("inc3")
     inc3.style.visibility="visible"
}
function esconderc3(){
     const inc3=document.getElementById("inc3")
     inc3.style.visibility="hidden"
}
 setTimeout(() => {
  visivelc3()
}, "4500");
 
setTimeout(() => {
  esconderc3()
}, "5000");

function visivelc4(){
   const inc4=document.getElementById("inc4")
     inc4.style.visibility="visible"
}
function esconderc4(){
     const inc4=document.getElementById("inc4")
     inc4.style.visibility="hidden"
    
}
 setTimeout(() => {
  visivelc4()

}, "5000");
 
setTimeout(() => {
  esconderc4()
}, "5500");

function visivelc5(){
   const inc5=document.getElementById("inc5")
   const cardc=document.querySelector(".carcentro")
   const explosao2=document.getElementById("explosao2")
     inc5.style.display="block"
    if(inc5.style.display=="block" && cardc.style.visibility=="visible"){
    inc5.style.display="none"
    cardc.style.display="none"
    explosao2.style.display="block"
    clearInterval(intervalId)
    setTimeout(() => {
    alert("Game Over")
    parar()
    retornarcentro()
}, "350");
}
}
function esconderc5(){
     const inc5=document.getElementById("inc5")
     inc5.style.display="none"
    
}
 setTimeout(() => {
  visivelc5()
}, "5500");
 
setTimeout(() => {
  esconderc5()
}, "6000");

/*coluna direita*/
function visiveld1(){
   const ind1=document.getElementById("ind1")
     ind1.style.visibility="visible"
}
function esconderd1(){
     const ind1=document.getElementById("ind1")
     ind1.style.visibility="hidden"
}
 setTimeout(() => {
  visiveld1()
}, "6000");
 
setTimeout(() => {
  esconderd1()
}, "6500");

function visiveld2(){
   const ind2=document.getElementById("ind2")
     ind2.style.visibility="visible"
}
function esconderd2(){
     const ind2=document.getElementById("ind2")
     ind2.style.visibility="hidden"
}
 setTimeout(() => {
  visiveld2()
}, "6500");
 
setTimeout(() => {
  esconderd2()
}, "7000");

function visiveld3(){
   const ind3=document.getElementById("ind3")
     ind3.style.visibility="visible"
}
function esconderd3(){
     const ind3=document.getElementById("ind3")
     ind3.style.visibility="hidden"
}
 setTimeout(() => {
  visiveld3()
}, "7000");
 
setTimeout(() => {
  esconderd3()
}, "7500");

function visiveld4(){
   const ind4=document.getElementById("ind4")
     ind4.style.visibility="visible"
}
function esconderd4(){
     const ind4=document.getElementById("ind4")
     ind4.style.visibility="hidden"
    
}
 setTimeout(() => {
  visiveld4()

}, "7500");
 
setTimeout(() => {
  esconderd4()
}, "8000");

function visiveld5(){
   const ind5=document.getElementById("ind5")
   const card=document.querySelector(".cardireita")
   const explosao3=document.getElementById("explosao3")
     ind5.style.display="block"
    if(ind5.style.display=="block" && card.style.visibility=="visible"){
    ind5.style.display="none"
    card.style.display="none"
    explosao3.style.display="block"
    clearInterval(intervalId)
    setTimeout(() => {
    alert("Game Over")
    parar()
    retornardireita()
}, "350");

}
}
function esconderd5(){
     const ind5=document.getElementById("ind5")
     ind5.style.display="none"
    
}
 setTimeout(() => {
  visiveld5()
}, "8000");
 
setTimeout(() => {
  esconderd5()
}, "8500");

/*Término do primeiro loop*/
function visivel(){
   const in1=document.getElementById("in1")
     in1.style.visibility="visible"
}
function esconder(){
     const in1=document.getElementById("in1")
     in1.style.visibility="hidden"
    console.log(in1)
}
 setTimeout(() => {
  visivel()
}, "8500");
 
setTimeout(() => {
  esconder()
  
}, "8750");

function visivel2(){
   const in2=document.getElementById("in2")
     in2.style.visibility="visible"
}
function esconder2(){
     const in2=document.getElementById("in2")
     in2.style.visibility="hidden"
    console.log(in2)
}
 setTimeout(() => {
  visivel2()
}, "8750");
 
setTimeout(() => {
  esconder2()
}, "9000");

function visivel3(){
   const in3=document.getElementById("in3")
     in3.style.visibility="visible"
}
function esconder3(){
     const in3=document.getElementById("in3")
     in3.style.visibility="hidden"
    
}
 setTimeout(() => {
  visivel3()
}, "9000");
 
setTimeout(() => {
  esconder3()
  console.log("Delayed for 1 second.");
}, "9250");

function visivel4(){
   const in4=document.getElementById("in4")
     in4.style.visibility="visible"
}
function esconder4(){
     const in4=document.getElementById("in4")
     in4.style.visibility="hidden"
    
}
 setTimeout(() => {
  visivel4()
  console.log("Delayed for 1 second.");
}, "9250");
 
setTimeout(() => {
  esconder4()
}, "9500");

function visivel5(){
   const in5=document.getElementById("in5")
   const carde=document.querySelector(".caresquerda")
   const explosao=document.getElementById("explosao")
     in5.style.display="block"
    if(in5.style.display=="block" && carde.style.visibility=="visible"){
    in5.style.display="none"
    carde.style.display="none"
    explosao.style.display="block"
    clearInterval(intervalId)
    setTimeout(() => {
    alert("Game Over")
    parar()
    retornaresqurda()
}, "350");

}
}
function esconder5(){
     const in5=document.getElementById("in5")
     in5.style.display="none"
    
}
 timeoutId=setTimeout(() => {
  visivel5()
}, "9500");
 
setTimeout(() => {
  esconder5()
}, "9750");


/*coluna centro*/

function visivelc1(){
   const inc1=document.getElementById("inc1")
     inc1.style.visibility="visible"
}
function esconderc1(){
     const inc1=document.getElementById("inc1")
     inc1.style.visibility="hidden"
}
 setTimeout(() => {
  visivelc1()
}, "9750");
 
setTimeout(() => {
  esconderc1()
}, "10000");

function visivelc2(){
   const inc2=document.getElementById("inc2")
     inc2.style.visibility="visible"
}
function esconderc2(){
     const inc2=document.getElementById("inc2")
     inc2.style.visibility="hidden"
}
 setTimeout(() => {
  visivelc2()
}, "10000");
 
setTimeout(() => {
  esconderc2()
}, "10250");

function visivelc3(){
   const inc3=document.getElementById("inc3")
     inc3.style.visibility="visible"
}
function esconderc3(){
     const inc3=document.getElementById("inc3")
     inc3.style.visibility="hidden"
}
 setTimeout(() => {
  visivelc3()
}, "10250");
 
setTimeout(() => {
  esconderc3()
}, "10500");

function visivelc4(){
   const inc4=document.getElementById("inc4")
     inc4.style.visibility="visible"
}
function esconderc4(){
     const inc4=document.getElementById("inc4")
     inc4.style.visibility="hidden"
    
}
 setTimeout(() => {
  visivelc4()

}, "10500");
 
setTimeout(() => {
  esconderc4()
}, "10750");

function visivelc5(){
   const inc5=document.getElementById("inc5")
   const cardc=document.querySelector(".carcentro")
   const explosao2=document.getElementById("explosao2")
     inc5.style.display="block"
    if(inc5.style.display=="block" && cardc.style.visibility=="visible"){
    inc5.style.display="none"
    cardc.style.display="none"
    explosao2.style.display="block"
    clearInterval(intervalId)
    setTimeout(() => {
    alert("Game Over")
    parar()
    retornarcentro()
}, "350");
}
}
function esconderc5(){
     const inc5=document.getElementById("inc5")
     inc5.style.display="none"
    
}
 setTimeout(() => {
  visivelc5()
}, "10750");
 
setTimeout(() => {
  esconderc5()
}, "11000");

/*coluna direita*/
function visiveld1(){
   const ind1=document.getElementById("ind1")
     ind1.style.visibility="visible"
}
function esconderd1(){
     const ind1=document.getElementById("ind1")
     ind1.style.visibility="hidden"
}
 setTimeout(() => {
  visiveld1()
}, "11000");
 
setTimeout(() => {
  esconderd1()
}, "11250");

function visiveld2(){
   const ind2=document.getElementById("ind2")
     ind2.style.visibility="visible"
}
function esconderd2(){
     const ind2=document.getElementById("ind2")
     ind2.style.visibility="hidden"
}
 setTimeout(() => {
  visiveld2()
}, "11250");
 
setTimeout(() => {
  esconderd2()
}, "11500");

function visiveld3(){
   const ind3=document.getElementById("ind3")
     ind3.style.visibility="visible"
}
function esconderd3(){
     const ind3=document.getElementById("ind3")
     ind3.style.visibility="hidden"
}
 setTimeout(() => {
  visiveld3()
}, "11500");
 
setTimeout(() => {
  esconderd3()
}, "11750");

function visiveld4(){
   const ind4=document.getElementById("ind4")
     ind4.style.visibility="visible"
}
function esconderd4(){
     const ind4=document.getElementById("ind4")
     ind4.style.visibility="hidden"
    
}
 setTimeout(() => {
  visiveld4()

}, "11750");
 
setTimeout(() => {
  esconderd4()
}, "12000");

function visiveld5(){
   const ind5=document.getElementById("ind5")
   const card=document.querySelector(".cardireita")
   const explosao3=document.getElementById("explosao3")
     ind5.style.display="block"
    if(ind5.style.display=="block" && card.style.visibility=="visible"){
    ind5.style.display="none"
    card.style.display="none"
    explosao3.style.display="block"
    clearInterval(intervalId)
    setTimeout(() => {
    alert("Game Over")
    parar()
    retornardireita()
}, "350");

}
}
function esconderd5(){
     const ind5=document.getElementById("ind5")
     ind5.style.display="none"
    
}
 setTimeout(() => {
  visiveld5()
}, "12250");
 
setTimeout(() => {
  esconderd5()
}, "12500");

}
/*Término da função jogar*/
 const intervalId=setInterval(jogar,12500)

function parar(){
        clearInterval(intervalId)
}
