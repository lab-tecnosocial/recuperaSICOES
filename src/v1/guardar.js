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