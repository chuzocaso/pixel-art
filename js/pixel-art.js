$(document).ready(function () {
	crearGrillaColores();
	crearGrillaPixeles()
});
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorColor = document.getElementById("indicador-de-color");
var indicadorColorMensaje = document.getElementById("indicador-de-color-mensaje");
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Cambio el indicador-de-color al colorActual
    indicadorColor.style.background = colorActual;
    indicadorColorMensaje.innerHTML = "Pincel: " + colorActual;
  })
);
//creacion de paleta de colores manipulando el DOM
function crearGrillaColores() {
  for (let i = 0; i < nombreColores.length; i++) {
	  var div = document.createElement("div");
	  div.style.backgroundColor = nombreColores[i];
    div.className = "color-paleta";
    //incorporamos funcionalidad de Seleccion de color cambiando el "indicador-de-color" y su mensaje, al clickear en grilla de colores
	  div.addEventListener("click", function () {
		  colorClickeado = this.style.backgroundColor
      indicadorColor.style.background = colorClickeado;
      indicadorColorMensaje.innerHTML = "Pincel: " + colorClickeado;
	  });
	  paleta.appendChild(div);
  }
}
//creacion de grilla de pixeles manipulando el DOM
function crearGrillaPixeles() {
	for (let i = 0; i < 1749; i++) {
    var div = document.createElement("div");
    //incorporamos funcionalidad de Pintado de pixeles
    div.addEventListener("mousedown", function () {
      colorActual = indicadorColor.style.backgroundColor
      this.style.backgroundColor = colorActual;
    });
    //incorporamos funcionalidad de pintado en movimiento solo cuando el mouse esta apretado
    div.addEventListener("mouseover", function () {
      if (mouseApretado) {
        colorActual = indicadorColor.style.backgroundColor
        this.style.backgroundColor = colorActual;        
      }
    });
    grillaPixeles.appendChild(div);
	}
}
//detectamos cuando el mouse esta apretado
var mouseApretado = false
$(document).mousedown(function () {
  mouseApretado = true;
});
$(document).mouseup(function () {
  mouseApretado = false;
});

//borrado de pantalla cambiando grilla-pixeles
var $botonBorrar = $("#borrar");
$botonBorrar.click(function () {
  var $pixeles = $("#grilla-pixeles div");
  $pixeles.animate({backgroundColor: "white"},2000);
})

//cargar superheroes
$('.imgs li img').click(function(){
  // referencia a la imagen en la cual hice click
  var imgActual = $(this);
  // attributo id de la imagen
  var attrId = imgActual.attr('id');
  cargarSuperheroe(window[attrId]);
});

//guardado de imagen
var $botonGuardar = $("#guardar");
$botonGuardar.click(guardarPixelArt)