const inputServicios = document.getElementById("inputServios");
const inputBlog = document.getElementById("inputBlog");
const inputContactos = document.getElementById("inputContactos");
const inputAcNosotros = document.getElementById("inputAcNosotros");

const servicios = document.getElementById("servicios");
const blog = document.getElementById("blog");
const contactos = document.getElementById("contactos");
const acercaDeNosotros = document.getElementById("acercaDeNosotros");

servicios.classList.remove("ocultar");

const serviciosBoton = document.querySelector(".serviciosBm");
serviciosBoton.addEventListener("click", activarServicio)
function activarServicio (){
    if(inputServicios.checked){
        inputServicios.checked = false;

        servicios.classList.add("ocultar")
    }else{
        inputServicios.checked = true;
        inputBlog.checked = false;
        inputContactos.checked = false;
        inputAcNosotros.checked = false;

        servicios.classList.remove("ocultar");
        blog.classList.add("ocultar");
        acercaDeNosotros.classList.add("ocultar");
        contactos.classList.add("ocultar");
    }
        
}

const blogBoton = document.querySelector(".blogBm");
blogBoton.addEventListener("click", activarBlog)
function activarBlog (){
    if(inputBlog.checked){
        inputBlog.checked = false;

        blog.classList.add("ocultar")
    }else{

        inputServicios.checked = false;
        inputBlog.checked = true;
        inputContactos.checked = false;
        inputAcNosotros.checked = false;

        blog.classList.remove("ocultar");
        servicios.classList.add("ocultar")
        acercaDeNosotros.classList.add("ocultar")
        contactos.classList.add("ocultar")
    }
}

const contactosBm = document.querySelector(".contactosBm");
contactosBm.addEventListener("click", activarContacto)
function activarContacto (){
    if(inputContactos.checked){
        inputContactos.checked = false;

        contactos.classList.add("ocultar")
    }else{

        inputServicios.checked = false;
        inputBlog.checked = false;
        inputContactos.checked = true;
        inputAcNosotros.checked = false;

        blog.classList.add("ocultar");
        servicios.classList.add("ocultar")
        acercaDeNosotros.classList.add("ocultar")
        contactos.classList.remove("ocultar")
    }
}


const acNosotrosBoton = document.querySelector(".acNosotrosBm");
acNosotrosBoton.addEventListener("click", activarAcNosotros)
function activarAcNosotros (){
    if(inputAcNosotros.checked){
        inputAcNosotros.checked = false;

        acercaDeNosotros.classList.add("ocultar")
    }else{

        inputServicios.checked = false;
        inputBlog.checked = false;
        inputContactos.checked = false;
        inputAcNosotros.checked = false;

        blog.classList.add("ocultar");
        servicios.classList.add("ocultar")
        acercaDeNosotros.classList.remove("ocultar")
        contactos.classList.add("ocultar")
    }
}

const inputNoServicio = document.querySelector(".inputCheck")

const noServicio = document.querySelector("#noServicio")
const botonNoServicio = document.querySelector(".botonNoServicio");
botonNoServicio.addEventListener("click", activarNoServicio);
function activarNoServicio(){
    if(inputNoServicio.checked){
        inputNoServicio.checked = false;
        noServicio.classList.add("ocultar")
    }else{
        inputNoServicio.checked = true;
        noServicio.classList.remove("ocultar")
    }

}