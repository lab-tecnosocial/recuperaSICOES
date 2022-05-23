var arregloBi = [];
console.log('Tabla con ' + arregloBi.length + ' registros');
var pag = document.querySelector("#tablaSimple_paginate > nav > ul > li.active").textContent;

function capturaTabla() {
    for (i = 1; i <= 10; i++) {
        let fila = [];
        for (j = 1; j <= 12; j++) {
            if (j >= 1 && j <= 4) {
                fila.push(document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            } else if (j === 5) {
                let str = document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML;
                str = str.replace(/"/g, "'");
                fila.push('"' + str + '"');
            } else if (j >= 6 && j <= 9) {
                fila.push(document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            }
            else if (j === 10) {
                let stringArch = "";
                let archivos = document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).querySelectorAll('a');
                for (let i = 0; i < archivos.length; i++) {
                    stringArch += i+ 1 + "." + archivos[i].innerText + " "
                }
                fila.push(stringArch);
            }
            else if (j === 11) {
                let stringForm = "";
                let forms = document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).querySelectorAll('a');
                for (let i = 0; i < forms.length; i++) {
                    stringForm += i+ 1 + "." + forms[i].innerText + " "
                }
                fila.push(stringForm);
            } else if (j === 12) {
                fila.push(document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).firstElementChild.href);
            }
        }
        arregloBi.push(fila);
    }
    console.log('Tabla con ' + arregloBi.length + ' registros');
    pag++;
    busquedadraw(`${pag}`);
}

function guardarTabla() {
    let archivo = 'cuce, entidad, tipo_contratacion, modalidad, objeto, estado, subasta, fecha_presentacion, fecha_publicacion, archivos, formularios, ficha\n';
    arregloBi.forEach(function (fila) {
        archivo += fila.join(',');
        archivo += '\n';
    });

    console.log('Descargando: ' + 'tabla con ' + arregloBi.length + ' registros.');
    let elementOculto = document.createElement('a');
    elementOculto.href = 'data:text/csv;charset=utf-8,' + encodeURI(archivo);
    elementOculto.target = '_blank';
    elementOculto.download = 'datos.csv';
    elementOculto.click();

}