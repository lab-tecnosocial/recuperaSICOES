var arregloBi = [];
console.log('Tabla con ' + arregloBi.length + ' registros');
var pag = document.querySelector("#tablaAvanzada_paginate > nav > ul > li.active").textContent;

function capturaTabla() {
    nFilas = document.querySelector('#tablaAvanzada > tbody').childElementCount;
    for (i = 1; i <= nFilas; i++) {
        let fila = [];
        for (j = 1; j <= 20; j++) {
            if (j === 1) {
                fila.push(document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            } 
            else if (j === 2) {
                let str = document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML;
                fila.push('"' + str + '"');
            } 
            
            else if (j >= 3 && j <= 4) {
                fila.push(document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            }

            else if (j === 5) {
                let str = document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML;
                str = str.replace(/"/g, "'");
                str = str.replace(/\n/g, " ");
                fila.push('"' + str + '"');
            } 
            else if (j >= 6 && j <= 9) {
                fila.push(document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            }
            else if (j === 10) {
                let stringArch = "";
                let archivos = document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).querySelectorAll('a');
                for (let i = 0; i < archivos.length; i++) {
                    stringArch += i + 1 + "." + archivos[i].innerText + " "
                }
                fila.push(stringArch);
            }
            else if (j === 11) {
                let stringForm = "";
                let forms = document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).querySelectorAll('a');
                for (let i = 0; i < forms.length; i++) {
                    stringForm += i+ 1 + "." + forms[i].innerText + " "
                }
                fila.push(stringForm);
            } 
            else if (j === 12) {
                fila.push(document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).firstElementChild.href);
            
            }  
            else if (j === 13) {
                let str = document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML;
                fila.push('"' + str + '"');
            } 
            else if (j >= 14 && j <= 20) {
                fila.push(document.querySelector(`#tablaAvanzada > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            }
        }
        arregloBi.push(fila);
    }
    console.log('Tabla con ' + arregloBi.length + ' registros');
    pag++;
    busquedadraw(`${pag}`);
}

function guardarTabla() {
    let archivo = 'cuce, entidad, tipo_contratacion, modalidad, objeto, estado, subasta, fecha_presentacion, fecha_publicacion, archivos, formularios, ficha_proceso, persona_contacto, garantia, costo_pliego, arpc, reunion_aclaracion, fecha_adjudicacion_desierta, departamento, normativa\n';
    arregloBi.forEach(function (fila) {
        archivo += fila.join(',');
        archivo += '\n';
    });

    console.log('Descargando: ' + 'tabla con ' + arregloBi.length + ' registros.');
    let elementOculto = document.createElement('a');
    elementOculto.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(archivo);
    elementOculto.target = '_blank';
    elementOculto.download = 'datos.csv';
    elementOculto.click();

}

var nPag = Number(document.querySelector('#tablaAvanzada_paginate > nav > ul > li:nth-child(5) > a').textContent);
var nRegEsp = Number(document.querySelector('#tablaAvanzada_paginate > div.dataTables_info').textContent.match(/\d+/)[0]);
var nSegundos = 5;
var tiempoMin = (nSegundos * nPag) / 60;

console.log(`Se recorreran automáticamente ${nPag} páginas, buscando ${nRegEsp} registros, cada ${nSegundos} segundos.
La captura se completarán en un tiempo aproximado de ${tiempoMin.toFixed(1)} minutos.`);

var intervaloCaptura = setInterval(() => {
    capturaTabla();
    if(pag === nPag){
        capturaTabla();
        clearInterval(intervaloCaptura);
        console.log(`Captura terminada.
Se recolectaron ${arregloBi.length} de ${nRegEsp} registros.
Descargando...`);
        guardarTabla();
    }
}, nSegundos * 1000);