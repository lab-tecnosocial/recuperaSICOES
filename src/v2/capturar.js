function capturaTabla() {
    for (i = 1; i <= 10; i++) {
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