boxNews();




function create(){
    document.getElementById("ventNot").style="display:block";
}
function off(){
 document.getElementById("ventNot").style="display:none";
}
function joinClass(){
    document.getElementById("tit").innerHTML="Unirse";
    document.getElementById("txt").style="margin-right:20%";
    document.getElementById("txt").style="margin-left:30%";
    document.getElementById("txt").innerHTML="Ingresa el identificador del curso: ";
    document.getElementById("caja").style="display:none";
    document.getElementById("vent").style="display:block";
    document.getElementById("vent").style="margin-left:20%";

    document.getElementById("btn").innerHTML="Unirse al curso ";
}

function cancel(){
    document.getElementById("menu").style="display:none";
    document.getElementById("vent").style="display:none";
    document.getElementById("caja").style="display:block";
 
}

function createClass(){
    document.getElementById("vent").style="height:200px";
    document.getElementById("vent").style="width:200px";
    document.getElementById("tit").innerHTML="Crear";
    document.getElementById("txt").style="margin-right:20%";
    document.getElementById("txt").style="margin-left:34%";
   
    document.getElementById("txt").innerHTML="Ingresa el nombre del curso: ";
    document.getElementById("caja").style="display:none";
    document.getElementById("vent").style="display:block";
    document.getElementById("vent").style="margin-left:20%";
    document.getElementsByTagName("body").style="overflow:hidden";
    document.getElementById("btn").innerHTML="Crear Curso ";
}
function boxNews(){
    let nombre ="Pedro ";
    let mensaje = document.createTextNode ("Ha subido un nuevo material ");
    nombre.appendChild(mensaje);
    document.body.nombre.mensaje;
}
