   /*
         Codigo:2
    Objetivo: Conocer el DOM
    Fecha: 2 de octubre 
    autor: By nandez REN
    */


function mostrar(){
    console.log("Dentro de la funcion");

    let nom=document.getElementById("nombre").value;
    let edad=document.getElementById("edad").value;
    let sex=document.getElementById("sexo").value;
    let discord=document.getElementById("discord").value;
    let nacion=document.getElementById("nacionalidad").value;
    
alert("Sus valores son Nombre : " + nom + "\n Edad : " + edad + "\n Sexo : " + sex + "\n Discord : " + discord + "\n Nacionalidad : " + nacion);
}