 /*
         Codigo:4
    Objetivo: mas DOM
    Fecha: 9 de octubre 
    autor: By nandez REN
    */
function operaciones() {
    

    let x = parseFloat(document.getElementById("numero1").value);
    let y = parseFloat(document.getElementById("numero2").value);
    let z = parseInt(document.getElementById("operacion").value);
    let r = 0;

    if (z === 1) {
        r = x + y;} 

    if (z === 2) {
        r = x - y;}

    if (z === 3) {
        r = x * y;}  

    if (z === 4) {
           r= x / y;}

    if (z === 5) {
        r = (x * y) / 100;}

    if (z === 6) {
        r = Math.pow(x, y);}  
        
         document.getElementById("resultado").value = r;
}
