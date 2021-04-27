//Secciones del menú  ***************** traer el menu hacia adelante en vista de pantalla de PC
function Item(etiqueta, direccion){
    this.get = function(){
        return this.nombre
    };
    this.direcion = direccion,
    this.nombre = etiqueta;
    this.cuerpo = function(){
        return '<li class="nav-item"><a class="nav-link active" aria-current="page" href="'+this.direcion+'">'+this.get()+'</a></li>';
    }
}
 var menuItemsEs = ['Sobre mi', 'Proyectos', 'Contacto']

var seccionesMenu = document.getElementById("menu-items");

for (let index = 0; index < menuItemsEs.length; index++) {
  const element = new Item(menuItemsEs[index], "#" + menuItemsEs[index]); 
  seccionesMenu.innerHTML += element.cuerpo();
}

//Tarjetas
var contenidoTarj1 = '<article class="col-6 col-12-xsmall work-item"><a href="http://www.iee.uy" ><img src="images/fulls/logo iee.jpeg" alt="",border = solid class="image fit thumb"/></a><h3>Desarrollo de pagina web y tienda on line</h3><p>Realice el desarrollo de la pagina web y del e-commerce para empresa de venta de articulos de seguridad electr&oacute;nica.</p></article>';
var contenidoTarj2 = '<article class="col-6 col-12-xsmall work-item"><a href="https://consultorio-nutricional-viera.000webhostapp.com/"><img src="images/thumbs/02.jpg" alt="" class="image fit thumb" /></a><h3>P&aacute;gina y app web "Consultorio Nutricional"</h3><p>Como proyecto de fin de curso de "Programador PHP", realice una p&aacute;gina web y una app de gesti&oacute;n de un consultorio nutricional.</p></article>';
var contenidoTarj3 = '<article class="col-6 col-12-xsmall work-item"><a href="images/fulls/03.jpg" class="image fit thumb"><img src="images/thumbs/03.jpg" alt="" /></a><h3>App de escritorio para gesti&oacute;n de tramites</h3><p>Proyecto realizado de fin de curso de "Analista programador". Se realiz&oacute; una app de escritorio en lenguaje C#, para la gesti&oacute;n por parte del personal de tramites disponibles.</p></article>';
var contenidoTarj4 = '<article class="col-6 col-12-xsmall work-item"><img src="images/thumbs/04.jpg" alt="" class="image fit thumb"/></a><h3>App web para gesti&oacute;n tramites</h3><p>Como complemento de la app de escritorio, se realizo una app web, donde los usuarios registrados pueden realizar la reserva de hora para hacer un tramite, y consultar el estado del mismo.</p></article>';


var arregloTarjetas = [{
    cuerpo: contenidoTarj1,
},
{
    cuerpo: contenidoTarj2,
},
{
    cuerpo: contenidoTarj3,
},
{
    cuerpo: contenidoTarj4
}
];

var tarjeta = document.getElementById('card');
console.log(tarjeta);
console.log(arregloTarjetas);

for (let index = 0; index < arregloTarjetas.length; index++) {
    tarjeta.innerHTML += arregloTarjetas[index].cuerpo
}

//iconos contacto
var iconWapp = '<li><a href="linkedin.com/in/eliana-viera/" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>';
var iconGit  = '<li><a href="https://github.com/eliana-viera/" class="icon brands fa-github"><span class="label">Github</span></a></li>';
var iconLink = '<li><a href="https://api.whatsapp.com/send?phone=+59898178857" class="icon brands fa-whatsapp"><span class="label">Dribbble</span></a></li>';
var mail     = '<li><a href="mailto:eliana.viera01@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>';

function Icon(etiquetaIcon){
    this.get = function(){
        return this.etiquetaIcon
    };
    this.etiquetaIcon = etiquetaIcon;
    this.cuerpo = function(){
        return this.get();
    }
}

var iconList = [iconWapp, iconGit, iconLink, mail];

var seccionesIcons = document.getElementById("icons");

for (let index = 0; index < iconList.length; index++) {
  const element = new Icon(iconList[index]); 
  seccionesIcons.innerHTML += element.cuerpo();
}
