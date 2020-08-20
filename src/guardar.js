function guardarTabla() {
    let archivo = 'CUCE, Entidad, Tipo contratacion, Modalidad, Objeto de contratacion, Estado, Fecha presentacion, Fecha pubicacion, Archivos, Formularios, Ficha\n';
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