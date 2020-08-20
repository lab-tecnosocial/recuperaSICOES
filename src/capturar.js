function capturaTabla() {
    for (i = 1; i <= 10; i++) {
        let fila = [];
        for (j = 1; j <= 11; j++) {
            if (j >= 1 && j <= 4) {
                fila.push(document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            } else if (j === 5) {
                let str = document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML;
                str = str.replace(/"/g, "'");
                fila.push('"' + str + '"');
            } else if (j >= 6 && j <= 8) {
                fila.push(document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).innerHTML);
            }
            else if (j === 9) {
                let stringArch = "";
                let archivos = document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).querySelectorAll('a');
                for (let i = 0; i < archivos.length; i++) {
                    stringArch += i+ 1 + "." + archivos[i].innerText + " "
                }
                fila.push(stringArch);
            }
            else if (j === 10) {
                let stringForm = "";
                let forms = document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).querySelectorAll('a');
                for (let i = 0; i < forms.length; i++) {
                    stringForm += i+ 1 + "." + forms[i].innerText + " "
                }
                fila.push(stringForm);
            } else if (j === 11) {
                fila.push(document.querySelector(`#tablaSimple > tbody > tr:nth-child(${i}) > td:nth-child(${j})`).firstElementChild.href);
            }
        }
        arregloBi.push(fila);
    }
    console.log('Tabla con ' + arregloBi.length + ' registros');
    pag++;
    busquedadraw(`${pag}`);
}