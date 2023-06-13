alumnos=[];

function submit(){
    var alumno1=document.getElementById("nombre1").value; 
    var alumno2=document.getElementById("nombre2").value; 
    var alumno3=document.getElementById("nombre3").value; 
    var alumno4=document.getElementById("nombre4").value; 

    alumos.push(nombre1);
    alumos.push(nombre2);
    alumos.push(nombre3);
    alumos.push(nombre4);

    document.getElementById("ver_nombre").inerHTML= alumnos;
}
