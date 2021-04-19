llenar();

function llenar() {

    var tbodyy = document.querySelector('#cuadrosOrdenes tbody');
    var ubicarOrden = document.getElementById('cuadrosOrdenes');

    var aProducto = JSON.parse(localStorage.getItem('ProductosTabla')),
        aFecha = JSON.parse(localStorage.getItem('FechaOrden')),
        aFactura = JSON.parse(localStorage.getItem('NumFacturaOrden')),
        aCliente = JSON.parse(localStorage.getItem('ClienteOrden')),
        aIdCliente = JSON.parse(localStorage.getItem('IDClienteOrden')),
        aEstado = JSON.parse(localStorage.getItem('EstadoOrden')),
        aResponsable = JSON.parse(localStorage.getItem('ResponsableOrden')),
        aPago = JSON.parse(localStorage.getItem('MetodoPago')),
        aCantidadD=JSON.parse(localStorage.getItem('CantidadDisponible')),
        aPrecioTotal=JSON.parse(localStorage.getItem('PrecioTotal')),
        aValorOrden=JSON.parse(localStorage.getItem('ValorOrden'));

    var id2 = getUrlVars()["id"];
    console.log(id2);
    if(id2!=undefined){
        for (var i = 0; i < aIdCliente.length; i++) {
            if(aIdCliente[i]==id2){
                var unaOrden = document.createElement('div'),
                acciones = document.createElement('div'),
                botonModificar = document.createElement('a'),
                botonEliminar = document.createElement('a'),
                botonConsultar = document.createElement('a'),
                SeccCarac = document.createElement('div'),
                CuadroText1 = document.createElement('div'),
                nFecha = document.createElement('label'),
                valorFecha = document.createElement('h4'),
                CuadroText2 = document.createElement('div'),
                nCliente = document.createElement('label'),
                valorCliente = document.createElement('h4'),
                CuadroText3 = document.createElement('div'),
                nResponsable = document.createElement('label'),
                valorResponsable = document.createElement('h4'),
                CuadroText4 = document.createElement('div'),
                nEstado = document.createElement('label'),
                valorEstado = document.createElement('h4'),
                CuadroText5 = document.createElement('div'),
                nTotal = document.createElement('label'),
                valorTotal = document.createElement('h4');
                
            SeccCarac.setAttribute('id', i);

            acciones.className = 'btn-ordenes-mod';
            botonModificar.textContent = "create";
            botonModificar.className = 'material-icons';
            botonModificar.href = 'o-modificar-orden.html?id' + '=' + i;
            botonEliminar.textContent = "delete_forever";
            botonEliminar.className = 'material-icons';
            botonEliminar.setAttribute('id', 'numEliminar');
            botonEliminar.href = 'javascript:verVentana(' + i + ')';
            botonConsultar.className = 'material-icons';
            botonConsultar.textContent = 'search';
            botonConsultar.href = 'o-ver-orden.html?id' + '=' + i;
            //botonEliminar.href = 'javascript:eliminar(' + i + ')';
            //botonEliminar.onclick = 'javascript:abrir()';
            SeccCarac.className = 'caracteristicas';
            CuadroText1.className = 'cuadro-texto';
            CuadroText2.className = 'cuadro-texto';
            CuadroText3.className = 'cuadro-texto';
            CuadroText4.className = 'cuadro-texto';
            CuadroText5.className = 'cuadro-texto';
            nFecha.textContent = 'Fecha'
            nCliente.textContent = 'Cliente';
            nResponsable.textContent = 'Responsable';
            valorEstado.setAttribute('id','valorColorEstado');
            nEstado.textContent = 'Estado';
            nTotal.textContent = 'Total';




            var nodoTextCliente = document.createTextNode(aCliente[i]),
                nodoTextResponsable = document.createTextNode(aResponsable[i]),
                nodoTextTotal = document.createTextNode(aValorOrden[i]),
                nodoTextFecha = document.createTextNode(aFecha[i]),
                nodoTextEstado = document.createTextNode(aEstado[i]);

            console.log('Estado: ' + aEstado[i]);
            if (aEstado[i] === 'Terminado') {
                //console.log(colorEstado);
                valorEstado.className = 'estado-terminado';
            } else {
                var colorEstado = document.getElementById("valorColorEstado");
                //console.log(colorEstado);
                acciones.appendChild(botonModificar);
                valorEstado.className = 'estado-proceso';
            }

            //acciones.appendChild(botonConsultar);
            //acciones.appendChild(botonEliminar);
            acciones.appendChild(botonConsultar);
            valorFecha.appendChild(nodoTextFecha);
            valorCliente.appendChild(nodoTextCliente);
            valorResponsable.appendChild(nodoTextResponsable);
            valorEstado.appendChild(nodoTextEstado);
            valorTotal.appendChild(nodoTextTotal);

            CuadroText1.appendChild(nFecha);
            CuadroText1.appendChild(valorFecha);
            SeccCarac.appendChild(CuadroText1);
            CuadroText2.appendChild(nCliente);
            CuadroText2.appendChild(valorCliente);
            SeccCarac.appendChild(CuadroText2);
            CuadroText3.appendChild(nResponsable);
            CuadroText3.appendChild(valorResponsable);
            SeccCarac.appendChild(CuadroText3);
            CuadroText4.appendChild(nEstado);
            CuadroText4.appendChild(valorEstado);
            SeccCarac.appendChild(CuadroText4);
            CuadroText5.appendChild(nTotal);
            CuadroText5.appendChild(valorTotal);
            SeccCarac.appendChild(CuadroText5);

            unaOrden.appendChild(SeccCarac);
            unaOrden.appendChild(acciones);

            ubicarOrden.appendChild(unaOrden);
            }
        }
    }

    else if(id2==undefined){
        var nCantidadOrden = aFecha.length;

        document.addEventListener('DOMContentLoaded', function () {
        var template = ``;
        
            for (var i = 0; i < nCantidadOrden; i++){
                var unaOrden = document.createElement('div'),
                    acciones = document.createElement('div'),
                    botonModificar = document.createElement('a'),
                    botonEliminar = document.createElement('a'),
                    botonConsultar = document.createElement('a'),
                    SeccCarac = document.createElement('div'),
                    CuadroText1 = document.createElement('div'),
                    nFecha = document.createElement('label'),
                    valorFecha = document.createElement('h4'),
                    CuadroText2 = document.createElement('div'),
                    nCliente = document.createElement('label'),
                    valorCliente = document.createElement('h4'),
                    CuadroText3 = document.createElement('div'),
                    nResponsable = document.createElement('label'),
                    valorResponsable = document.createElement('h4'),
                    CuadroText4 = document.createElement('div'),
                    nEstado = document.createElement('label'),
                    valorEstado = document.createElement('h4'),
                    CuadroText5 = document.createElement('div'),
                    nTotal = document.createElement('label'),
                    valorTotal = document.createElement('h4');
                    
                SeccCarac.setAttribute('id', i);

                acciones.className = 'btn-ordenes-mod';
                botonModificar.textContent = "create";
                botonModificar.className = 'material-icons';
                botonModificar.href = 'o-modificar-orden.html?id' + '=' + i;
                botonEliminar.textContent = "delete_forever";
                botonEliminar.className = 'material-icons';
                botonEliminar.setAttribute('id', 'numEliminar');
                botonEliminar.href = 'javascript:verVentana(' + i + ')';
                botonConsultar.className = 'material-icons';
                botonConsultar.textContent = 'search';
                botonConsultar.href = 'o-ver-orden.html?id' + '=' + i;
                //botonEliminar.href = 'javascript:eliminar(' + i + ')';
                //botonEliminar.onclick = 'javascript:abrir()';
                SeccCarac.className = 'caracteristicas';
                CuadroText1.className = 'cuadro-texto';
                CuadroText2.className = 'cuadro-texto';
                CuadroText3.className = 'cuadro-texto';
                CuadroText4.className = 'cuadro-texto';
                CuadroText5.className = 'cuadro-texto';
                nFecha.textContent = 'Fecha'
                nCliente.textContent = 'Cliente';
                nResponsable.textContent = 'Responsable';
                valorEstado.setAttribute('id','valorColorEstado');
                nEstado.textContent = 'Estado';
                nTotal.textContent = 'Total';




                var nodoTextCliente = document.createTextNode(aCliente[i]),
                    nodoTextResponsable = document.createTextNode(aResponsable[i]),
                    nodoTextTotal = document.createTextNode(aValorOrden[i]),
                    nodoTextFecha = document.createTextNode(aFecha[i]),
                    nodoTextEstado = document.createTextNode(aEstado[i]);

                console.log('Estado: ' + aEstado[i]);
                if (aEstado[i] === 'Terminado') {
                    //console.log(colorEstado);
                    valorEstado.className = 'estado-terminado';
                } else {
                    var colorEstado = document.getElementById("valorColorEstado");
                    //console.log(colorEstado);
                    acciones.appendChild(botonModificar);
                    valorEstado.className = 'estado-proceso';
                }

                //acciones.appendChild(botonConsultar);
                //acciones.appendChild(botonEliminar);
                acciones.appendChild(botonConsultar);
                valorFecha.appendChild(nodoTextFecha);
                valorCliente.appendChild(nodoTextCliente);
                valorResponsable.appendChild(nodoTextResponsable);
                valorEstado.appendChild(nodoTextEstado);
                valorTotal.appendChild(nodoTextTotal);

                CuadroText1.appendChild(nFecha);
                CuadroText1.appendChild(valorFecha);
                SeccCarac.appendChild(CuadroText1);
                CuadroText2.appendChild(nCliente);
                CuadroText2.appendChild(valorCliente);
                SeccCarac.appendChild(CuadroText2);
                CuadroText3.appendChild(nResponsable);
                CuadroText3.appendChild(valorResponsable);
                SeccCarac.appendChild(CuadroText3);
                CuadroText4.appendChild(nEstado);
                CuadroText4.appendChild(valorEstado);
                SeccCarac.appendChild(CuadroText4);
                CuadroText5.appendChild(nTotal);
                CuadroText5.appendChild(valorTotal);
                SeccCarac.appendChild(CuadroText5);

                unaOrden.appendChild(SeccCarac);
                unaOrden.appendChild(acciones);

                ubicarOrden.appendChild(unaOrden);
               
            }
        });
    }
}
/*function eliminar(index) {
    var pNombre = JSON.parse(localStorage.getItem('Nombre')),
        pCodigo = JSON.parse(localStorage.getItem('Codigo')),
        pMarca = JSON.parse(localStorage.getItem('Marca')),
        pModelo = JSON.parse(localStorage.getItem('Modelo')),
        pVitrina = JSON.parse(localStorage.getItem('Vitrina')),
        pBodega = JSON.parse(localStorage.getItem('Bodega')),
        pCantidad = JSON.parse(localStorage.getItem('Cantidad')),
        pPrecio = JSON.parse(localStorage.getItem('Precio')),
        pDescripcion = JSON.parse(localStorage.getItem('Descripcion')),
        pImagen = JSON.parse(localStorage.getItem('Imagen'));

    pNombre.splice(index, 1);
    pCodigo.splice(index, 1);
    pMarca.splice(index, 1);
    pModelo.splice(index, 1);
    pVitrina.splice(index, 1);
    pBodega.splice(index, 1);
    pCantidad.splice(index, 1);
    pPrecio.splice(index, 1);
    pDescripcion.splice(index, 1);
    pImagen.splice(index, 1);


    localStorage.setItem('Nombre', JSON.stringify(pNombre));
    localStorage.setItem('Codigo', JSON.stringify(pCodigo));
    localStorage.setItem('Marca', JSON.stringify(pMarca));
    localStorage.setItem('Modelo', JSON.stringify(pModelo));
    localStorage.setItem('Vitrina', JSON.stringify(pVitrina));
    localStorage.setItem('Bodega', JSON.stringify(pBodega));
    localStorage.setItem('Cantidad', JSON.stringify(pCantidad));
    localStorage.setItem('Precio', JSON.stringify(pPrecio));
    localStorage.setItem('Descripcion', JSON.stringify(pDescripcion));
    localStorage.setItem('Imagen', JSON.stringify(pImagen));
    console.log(pNombre);

    llenar();
}*/
function verVentana(index) {
    console.log('entre a VerVentana');
    console.log(index);
    var mostrarVentana = document.getElementById('vent');
    textVent1 = document.createElement('h2');
    textVent2 = document.createElement('h4');
    botonSi = document.createElement('a');
    botonNo = document.createElement('a');

    textVent1.textContent = '¿ Está seguro que desea eliminar esta orden?';
    textVent2.textContent = 'Esta acción no se podrá deshacer';
    botonSi.className = 'si';
    botonSi.textContent = 'Si';
    botonSi.id = 'borrar_producto';
    //botonSi.onclick = 'eliminar(' + index + ')';
    botonSi.href = 'javascript:eliminar(' + index + ')';

    botonNo.className = 'no';
    botonNo.textContent = 'No';
    botonNo.href = 'o-listar-orden.html';
    //abrir();
    mostrarVentana.appendChild(textVent1);
    mostrarVentana.appendChild(textVent2);
    mostrarVentana.appendChild(botonSi);
    mostrarVentana.appendChild(botonNo);
    document.getElementById("vent").style.display = "block";
    document.getElementById("vent2").display = "none";
}

function eliminar(index) {
    document.getElementById("vent").style.display = "block";

    aFactura = JSON.parse(localStorage.getItem('NumFacturaOrden'));
    aCliente = JSON.parse(localStorage.getItem('ClienteOrden'));
    aIdCliente = JSON.parse(localStorage.getItem('IDClienteOrden'));
    aResponsable = JSON.parse(localStorage.getItem('ResponsableOrden'));
    aPago = JSON.parse(localStorage.getItem('MetodoPagoOrden'));
    aProductosTabla = JSON.parse(localStorage.getItem('ProductosTabla'));
    aFecha = JSON.parse(localStorage.getItem('FechaOrden'));
    aValorOrden = JSON.parse(localStorage.getItem('ValorOrden'));
    aEstado = JSON.parse(localStorage.getItem('EstadoOrden'));

    aFactura.splice(index, 1);
    aCliente.splice(index, 1);
    aIdCliente.splice(index, 1);
    aResponsable.splice(index, 1);
    aPago.splice(index, 1);
    aProductosTabla.splice(index, 1);
    aFecha.splice(index, 1);
    aEstado.splice(index, 1);
    aValorOrden.splice(index, 1);


    localStorage.setItem('FechaOrden', JSON.stringify(aFecha));
    localStorage.setItem('NumFacturaOrden', JSON.stringify(aFactura));
    localStorage.setItem('ClienteOrden', JSON.stringify(aCliente));
    localStorage.setItem('IDClienteOrden', JSON.stringify(aIdCliente));
    localStorage.setItem('ResponsableOrden', JSON.stringify(aResponsable));
    localStorage.setItem('MetodoPagoOrden', JSON.stringify(aPago));
    localStorage.setItem('ProductosTabla', JSON.stringify(aProductosTabla));
    localStorage.setItem('ValorOrden', JSON.stringify(aValorOrden));
    localStorage.setItem('EstadoOrden', JSON.stringify(aEstado));

    location.reload();

}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}