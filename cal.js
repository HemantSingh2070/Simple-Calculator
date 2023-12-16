let b1 = document.getElementById("c1");
let b2 = document.getElementById("c2");
let b3 = document.getElementById("c3");
let b4 = document.getElementById("c4");
let b5 = document.getElementById("c5");
let b6 = document.getElementById("c6");
let b7 = document.getElementById("c7");
let b8 = document.getElementById("c8");
let b9 = document.getElementById("c9");
let b10 = document.getElementById("c10");
let b11 = document.getElementById("c11");
let b12 = document.getElementById("c12");
let b13 = document.getElementById("c13");
let b14 = document.getElementById("c14");
let b15 = document.getElementById("c15");
let b16 = document.getElementById("c16");
let b17 = document.getElementById("c17");
let b18 = document.getElementById("c18");
let b19 = document.getElementById("c19");
let b20 = document.getElementById("c20");
let b21 = document.getElementById("c21");
b1.innerHTML="Off";
function cal(){
b1.innerHTML="On";
let n1 = 0;
let n2 = 0;
let n3 = 0;
let char = ' '; 
function input0(){
    if (n2 == 0) {
        n1 = n1 * 10;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){n3 = n3 * 10;
        b1.innerHTML = n3;
        console.log('n3');}
}
function input1() {
    if (n2 == 0) {
        n1 = n1 * 10 + 1;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){n3 = n3 * 10 + 1;
        b1.innerHTML = n3;
        console.log('n3');}

}
function input2() {
    if (n2 == 0) {
        n1 = n1 * 10 + 2;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 2;
        b1.innerHTML = n3;
        console.log('n3');
    }

} function input3() {
    if (n2 == 0) {
        n1 = n1 * 10 + 3;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 3;
        b1.innerHTML = n3;
        console.log('n3');
    }


} function input4() {
    if (n2 == 0) {
        n1 = n1 * 10 + 4;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 4;
        b1.innerHTML = n3;
        console.log('n3');
    }

} function input5() {
    if (n2 == 0) {
        n1 = n1 * 10 + 5;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 5;
        b1.innerHTML = n3;
        console.log('n3');
    }

} function input6() {
    if (n2 == 0) {
        n1 = n1 * 10 + 6;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 6;
        b1.innerHTML = n3;
        console.log('n3');
    }

} function input7() {
    if (n2 == 0) {
        n1 = n1 * 10 + 7;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 7;
        b1.innerHTML = n3;
        console.log('n3');
    }

} function input8() {
    if (n2 == 0) {
        n1 = n1 * 10 + 8;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 8;
        b1.innerHTML = n3;
        console.log('n3');
    }

} function input9() {
    if (n2 == 0) {
        n1 = n1 * 10 + 9;
        b1.innerHTML = n1;
        console.log('n1');
    }
    if(n2 !=0){
        n3 = n3 * 10 + 9;
        b1.innerHTML = n3;
        console.log('n3');
    }

}
function charp(){
    b17.innerHTML=n1;
    b18.innerHTML='+';
    char ='+';
    n2=1;
    b1.innerHTML=' ';
}
function chars(){
    b17.innerHTML=n1;
    b18.innerHTML='-';
    char ='-';
    n2++;
    b1.innerHTML=' ';
}
function charm(){
    b17.innerHTML=n1;
    b18.innerHTML='*';
    char ='*';
    n2++
    b1.innerHTML=' ';
}
function chard(){
    b17.innerHTML=n1;
    b18.innerHTML='/';
    char ='/';
    n2++
    b1.innerHTML=' ';
}
function charmod(){
    b17.innerHTML=n1;
    b18.innerHTML='%';
    char ='%';
    n2++
    b1.innerHTML=' ';
}
function output(){
    let n = 0;
 switch(char){
    case '+':n=n1+n3;break;
    case '-':n=n1-n3;break;
    case '*':n=n1*n3;break;
    case '/':n=Math.floor(n1/n3);break;
    case '%':n=n1%n3;break;
 }
 console.log(n);
 b1.innerHTML=n;
 n1=n;
 n3=0;
 n2=0;
}
function del() {
    if (n2 == 0) {
        n1 = Math.floor(n1 / 10);
        console.log(n1);
        b1.innerHTML = n1;
    }
    else {
        n3 = Math.floor(n3 / 10);
        console.log(n3);
        b1.innerHTML = n1;
    }
}

b2.addEventListener('click', input1);
b3.addEventListener('click', input2);
b4.addEventListener('click', input3);
b6.addEventListener('click', input4);
b7.addEventListener('click', input5);
b8.addEventListener('click', input6);
b10.addEventListener('click', input7);
b11.addEventListener('click', input8);
b12.addEventListener('click', input9);
b16.addEventListener('click',input0);
b5.addEventListener('click',  charp);
b9.addEventListener('click', chars);
b13.addEventListener('click', charm);
b19.addEventListener('click', chard);
b20.addEventListener('click', charmod)
b15.addEventListener('click', del);
b2.addEventListener('click', input1);
b3.addEventListener('click', input2);
b4.addEventListener('click', input3);
b6.addEventListener('click', input4);
b7.addEventListener('click', input5);
b8.addEventListener('click', input6);
b10.addEventListener('click', input7);
b11.addEventListener('click', input8);
b12.addEventListener('click', input9);
b14.addEventListener('click',output);
}
b21.addEventListener('click',cal);
