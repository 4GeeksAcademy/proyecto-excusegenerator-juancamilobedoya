window.onload=()=>{
    let ramdomnumber=Math.random()*10;
    document.querySelector("#excusa").innerHTML=generadorexcusas();
}
let generadorexcusas=()=>{

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let whoEXCUSE = Math.floor(Math.random()*who.length);
let actionEXCUSE = Math.floor(Math.random()* action.length);
let whatEXCUSE = Math.floor(Math.random()* what.length);
let whenEXCUSE = Math.floor(Math.random()* when.length);

    return who[whoEXCUSE] + " " + action[actionEXCUSE] + " " + what[whatEXCUSE] + " " + when[whenEXCUSE];
}
