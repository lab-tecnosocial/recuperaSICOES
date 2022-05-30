var nPag = Number(document.querySelector('#tablaAvanzada_paginate > nav > ul > li:nth-child(5) > a').textContent);
var nRegEsp = Number(document.querySelector('#tablaAvanzada_paginate > div.dataTables_info').textContent.match(/\d+/)[0]);
var nSegundos = 5;
var tiempoMin = (nSegundos * nPag) / 60;

console.log(`Se recorreran automáticamente ${nPag} páginas, buscando ${nRegEsp} registros, cada ${nSegundos} segundos.
La captura se completarán en un tiempo aproximado de ${tiempoMin.toFixed(1)} minutos.`);

var intervaloCaptura = setInterval(() => {
    capturaTabla();
    if(pag === nPag + 1){
        clearInterval(intervaloCaptura);
        console.log(`Captura terminada.
Se recolectaron ${arregloBi.length} de ${nRegEsp} registros.
Descargando...`);
        guardarTabla();
    }
}, nSegundos * 1000);