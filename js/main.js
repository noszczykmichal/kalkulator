"use strict";

//pobranie wszystkich przycisków
let display=document.getElementById('display');
let button9=document.getElementById('button9');
let button8=document.getElementById('button8');
let button7=document.getElementById('button7');
let button6=document.getElementById('button6');
let button5=document.getElementById('button5');
let button4=document.getElementById('button4');
let button3=document.getElementById('button3');
let button2=document.getElementById('button2');
let button1=document.getElementById('button1');
let button0=document.getElementById('button0');
let buttonDel=document.getElementById('buttonDel');
let buttonPercent=document.getElementById('buttonPercent');
let buttonPlus=document.getElementById('buttonPlus');
let buttonMinus=document.getElementById('buttonMinus');
let buttonMultiply=document.getElementById('buttonMultiply');
let buttonDivide=document.getElementById('buttonDivide')
let buttonDot=document.getElementById('buttonDot');
let buttonEquals=document.getElementById('buttonEquals');
let currentlyDisplayed=display.innerText;

//funkcje obsługujące wyświetlanie kolejnych przycicków na ekranie kalkulatora

function calButton9(){
    let contentButton9=button9.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton9;
}

function calButton8(){
    let contentButton8=button8.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton8;
}

function calButton7(){
    let contentButton7=button7.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton7;
}

function calButton6(){
    let contentButton6=button6.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton6;
}

function calButton5(){
    let contentButton5=button5.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton5;
}

function calButton4(){
    let contentButton4=button4.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton4;
}

function calButton3(){
    let contentButton3=button3.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton3;
}

function calButton2(){
    let contentButton2=button2.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton2;
}

function calButton1(){
    let contentButton1=button1.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton1;
}

function calButton0(){
    let contentButton0=button0.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButton0;
}

//funkcje obsługujące znaki specialne

function calButtonDel(){
    let contentDel=display.innerText;
    let newContent=contentDel.slice(0,-1);
    display.innerText=newContent;
}

function calButtonPercent(){
    let contentBtnPercent=buttonPercent.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentBtnPercent;
}

function calButtonPlus(){
    let contentButtonPlus=buttonPlus.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButtonPlus;
}

function calButtonMinus(){
    let contentButtonMinus=buttonMinus.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButtonMinus;
}

function calButtonMultiply(){
    let contentButtonMultiply=buttonMultiply.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButtonMultiply;
}

function calButtonDivide(){
    let contentButtonDivide=buttonDivide.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButtonDivide;
}

function calButtonDot(){
    let contentButtonDot=buttonDot.innerText;
    currentlyDisplayed=display.innerText;
    display.innerText=currentlyDisplayed+contentButtonDot;
}

//addEventy dla każdego przycisku

button9.addEventListener('click', calButton9);
button8.addEventListener('click', calButton8);
button7.addEventListener('click', calButton7);
button6.addEventListener('click', calButton6);
button5.addEventListener('click', calButton5);
button4.addEventListener('click', calButton4);
button3.addEventListener('click', calButton3);
button2.addEventListener('click', calButton2);
button1.addEventListener('click', calButton1);
button0.addEventListener('click', calButton0);

//znaki specjalne

buttonDel.addEventListener('click', calButtonDel);
buttonPercent.addEventListener('click', calButtonPercent);
buttonPlus.addEventListener('click', calButtonPlus);
buttonMinus.addEventListener('click', calButtonMinus);
buttonMultiply.addEventListener('click', calButtonMultiply);
buttonDivide.addEventListener('click', calButtonDivide);
buttonDot.addEventListener('click', calButtonDot);

//funkcja licząca

function calculate(){
    let contentDisplay=display.innerText;
    let arrDisplay=contentDisplay.split('');
    let newDisplay=[];
    //po wciśnięciu przycicku '=' w tele odpalana jest pętla po to żeby wyciąć wszystkie pojawiające się znaki 'x' i zastąpić je właściwym operatorem mnożenia
    for(let i=0; i<arrDisplay.length; i++){
        if(arrDisplay[i]!== 'x'){
            newDisplay.push(arrDisplay[i])
        } else{newDisplay.push('*')}
    }
    // console.log('nowa:', newDisplay);
    let newDisplayTostring= newDisplay.join('');
    
    let calculateAll=eval(newDisplayTostring);
    
    display.innerText=calculateAll;
}



buttonEquals.addEventListener('click', calculate)
