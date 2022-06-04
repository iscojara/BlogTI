
/*
const paginas=[
    {
        nombre:"PRINCIPAL",
        enlace:"index.html",
        subpagina:[]
    },
    {
        nombre:"PROCESO DE INICIO", 
        enlace:"#",
        subpagina:[
            {
                nombre: "DESARROLLAR EL ACTA DE LA CONSTITUCIÓN DEL PROYECTO",
                enlace: "fase-inicio1.html"
            },
            {
                nombre: "IDENTIFICAR A LOS INTERESADOS",
                enlace: "fase-inicio2.html"
            }
        ]
    },
    {
        nombre: "PROCESO DE PLANIFICACIÓN",
        enlace: "#",
        subpagina:[
            {
                nombre: "PLAN PARA LA DIRECCIÓN DEL PROYECTO",
                enlace: "fase-planI0.html"
            },
            {
                nombre: "PLANIFICAR LA GESTIÓN DEL ALCANCE",
                enlace: "fase-plani1.html"
            },
            {
                nombre: "RECOPILAR REQUISITOS",
                enlace: "fase-plani2.html"
            },
            {
                nombre: "DEFINIR EL ALCANCE",
                enlace: "fase-plani3.html"
            },
            {
                nombre: "CREAR LA EDT",
                enlace: "fase-plani4.html"
            }
        ]
    },  
    {
        nombre: "EN PROCESO",
        enlace: "#",
        subpagina:[
            
        ]
    }
];
var resultado="";
/* llenar los links en el nav
for(var i=0;i<paginas.length;i++){
    if(i==0){
        resultado+="<li><a href='"+paginas[i].enlace+"'>"+paginas[i].nombre+"</a></li>";
    }else{
        resultado+="<li><a href='"+paginas[i].enlace+"'>"+paginas[i].nombre+"</a><ul>";
        for(var j=0;j<paginas[i].subpagina.length;j++){
            resultado+="<li><a href='"+paginas[i].subpagina[j]['enlace']+"'>"+paginas[i].subpagina[j]['nombre']+"</a><li>";
        }
        resultado+="</ul></li>";
    }    
}
document.getElementById("nav").innerHTML=resultado;
*/
// Scroll up
document.getElementById("button-up").addEventListener("click",ScrollUp);

function ScrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if(currentScroll > 0){
        window.requestAnimationFrame(ScrollUp);
        window.scrollTo(0,currentScroll-(currentScroll/10));
        buttonUp.style.transform = "scale(0)";     
    }

}
buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 100){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}