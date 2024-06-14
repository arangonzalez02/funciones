//DESPLEGABLE

let mapa = new Map([
  ["España", "Madrid"],
  ["Francia", "Paris"],
  ["Italia", "Roma"],
  ["Portugal", "Lisboa"],
]);

let select = document.querySelector("#paises");
for (let [pais, capital] of mapa) {
  let paisOp = document.createElement("option");
  paisOp.textContent = pais;
  paisOp.setAttribute("id", pais); //poner un id a los países
  select.appendChild(paisOp);
}
select.addEventListener("change", function () {
  let capitalS = mapa.get(select.value); //indice valor
  //get es recuperar el valor que tiene el mapa en la clave se lee en el select
  document.querySelector("#capital").innerHTML = "La capital es " + capitalS;
  document.querySelector("#" + capitalS).style.border = "2px solid black";
});

let imagenes = document.querySelectorAll("img"); //crea un array con todas las imágenes
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseover", function () {
    imagenes[i].style.width = "350px";
    imagenes[i].style.height = "200px";
  });
  imagenes[i].addEventListener("mouseout", function () {
    imagenes[i].style.width = "300px";
    imagenes[i].style.height = "150px";
  });
}
