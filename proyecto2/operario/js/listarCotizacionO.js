llenar();

function llenar() {

    var tbodyy = document.querySelector('#cuadrosCotizaciones tbody');
    var ubicarCot = document.getElementById('cuadrosCotizaciones');

    var aProducto = JSON.parse(localStorage.getItem('ProductosTablaCot')),
        aFecha = JSON.parse(localStorage.getItem('FechaCot')),
        aFactura = JSON.parse(localStorage.getItem('NumFacturaCot')),
        aCliente = JSON.parse(localStorage.getItem('ClienteCot')),
        aIdCliente = JSON.parse(localStorage.getItem('IDClienteCot')),
        aCantidadD = JSON.parse(localStorage.getItem('CantidadDisponibleCot')),
        aPrecioTotal = JSON.parse(localStorage.getItem('PrecioTotalCot')),
        aValorCot = JSON.parse(localStorage.getItem('ValorCot'));


    var id = getUrlVars()["id"];
    console.log(id);
    if(id!=undefined){
        for (var i = 0; i < aIdCliente.length; i++) {
            if(aIdCliente[i]==id){
                var unaCot = document.createElement('div'),
                acciones = document.createElement('div'),
                botonModificar = document.createElement('a'),
                botonImprimir = document.createElement('a'),
                botonDetalle = document.createElement('a'),
                SeccCarac = document.createElement('div'),
                CuadroText1 = document.createElement('div'),
                nFecha = document.createElement('label'),
                valorFecha = document.createElement('h4'),
                CuadroText2 = document.createElement('div'),
                nCliente = document.createElement('label'),
                valorCliente = document.createElement('h4'),
                CuadroText3 = document.createElement('div'),
                nId = document.createElement('label'),
                valorId = document.createElement('h4'),
                CuadroText5 = document.createElement('div'),
                nTotal = document.createElement('label'),
                valorTotal = document.createElement('h4');

            SeccCarac.setAttribute('id', i);

            acciones.className = 'btn-Cotes-mod';
            botonModificar.textContent = "create";
            botonModificar.className = 'material-icons';
            botonModificar.href = 'a-modificar-cotizacion.html?id' + '=' + i;
            botonImprimir.textContent = "print";
            botonImprimir.className = 'material-icons';
            botonImprimir.setAttribute('id', 'numImprimir');
            botonImprimir.href = 'javascript:imprimir2('+ i +')';
            botonDetalle.className = 'material-icons';
            botonDetalle.textContent = 'search';
            botonDetalle.href = 'a-ver-cotizacion.html?id' + '=' + i;
            //botonImprimir.href = 'javascript:Imprimir(' + i + ')';
            //botonImprimir.onclick = 'javascript:abrir()';
            SeccCarac.className = 'caracteristicas';
            CuadroText1.className = 'cuadro-texto';
            CuadroText2.className = 'cuadro-texto';
            CuadroText3.className = 'cuadro-texto';
            CuadroText5.className = 'cuadro-texto';
            nFecha.textContent = 'Fecha'
            nCliente.textContent = 'Cliente';
            nId.textContent = 'ID';
            nTotal.textContent = 'Total';




            var nodoTextCliente = document.createTextNode(aCliente[i]),
                nodoTextId = document.createTextNode(aIdCliente[i]),
                nodoTextTotal = document.createTextNode(aValorCot[i]),
                nodoTextFecha = document.createTextNode(aFecha[i]);



            //acciones.appendChild(botonDetalle);
            acciones.appendChild(botonImprimir);
            acciones.appendChild(botonDetalle);
            acciones.appendChild(botonModificar);
            valorFecha.appendChild(nodoTextFecha);
            valorCliente.appendChild(nodoTextCliente);
            valorId.appendChild(nodoTextId);
            valorTotal.appendChild(nodoTextTotal);

            CuadroText1.appendChild(nFecha);
            CuadroText1.appendChild(valorFecha);
            SeccCarac.appendChild(CuadroText1);
            CuadroText2.appendChild(nCliente);
            CuadroText2.appendChild(valorCliente);
            SeccCarac.appendChild(CuadroText2);
            CuadroText3.appendChild(nId);
            CuadroText3.appendChild(valorId);
            SeccCarac.appendChild(CuadroText3);
            CuadroText5.appendChild(nTotal);
            CuadroText5.appendChild(valorTotal);
            SeccCarac.appendChild(CuadroText5);

            unaCot.appendChild(SeccCarac);
            unaCot.appendChild(acciones);

            ubicarCot.appendChild(unaCot);
            }
        }
    }

    else if(id==undefined){
        var nCantidadCot = aFecha.length;

        document.addEventListener('DOMContentLoaded', function () {
            var template = ``;

            for (var i = 0; i < nCantidadCot; i++) {
                var unaCot = document.createElement('div'),
                    acciones = document.createElement('div'),
                    botonModificar = document.createElement('a'),
                    botonImprimir = document.createElement('a'),
                    botonDetalle = document.createElement('a'),
                    SeccCarac = document.createElement('div'),
                    CuadroText1 = document.createElement('div'),
                    nFecha = document.createElement('label'),
                    valorFecha = document.createElement('h4'),
                    CuadroText2 = document.createElement('div'),
                    nCliente = document.createElement('label'),
                    valorCliente = document.createElement('h4'),
                    CuadroText3 = document.createElement('div'),
                    nId = document.createElement('label'),
                    valorId = document.createElement('h4'),
                    CuadroText5 = document.createElement('div'),
                    nTotal = document.createElement('label'),
                    valorTotal = document.createElement('h4');

                SeccCarac.setAttribute('id', i);

                acciones.className = 'btn-Cotes-mod';
                botonModificar.textContent = "create";
                botonModificar.className = 'material-icons';
                botonModificar.href = 'o-modificar-cotizacion.html?id' + '=' + i;
                botonImprimir.textContent = "print";
                botonImprimir.className = 'material-icons';
                botonImprimir.setAttribute('id', 'numImprimir');
                botonImprimir.href = 'javascript:imprimir2('+ i +')';
                botonDetalle.className = 'material-icons';
                botonDetalle.textContent = 'search';
                botonDetalle.href = 'o-ver-cotizacion.html?id' + '=' + i;
                //botonImprimir.href = 'javascript:Imprimir(' + i + ')';
                //botonImprimir.onclick = 'javascript:abrir()';
                SeccCarac.className = 'caracteristicas';
                CuadroText1.className = 'cuadro-texto';
                CuadroText2.className = 'cuadro-texto';
                CuadroText3.className = 'cuadro-texto';
                CuadroText5.className = 'cuadro-texto';
                nFecha.textContent = 'Fecha'
                nCliente.textContent = 'Cliente';
                nId.textContent = 'ID';
                nTotal.textContent = 'Total';




                var nodoTextCliente = document.createTextNode(aCliente[i]),
                    nodoTextId = document.createTextNode(aIdCliente[i]),
                    nodoTextTotal = document.createTextNode(aValorCot[i]),
                    nodoTextFecha = document.createTextNode(aFecha[i]);



                //acciones.appendChild(botonDetalle);
                acciones.appendChild(botonImprimir);
                acciones.appendChild(botonDetalle);
                acciones.appendChild(botonModificar);
                valorFecha.appendChild(nodoTextFecha);
                valorCliente.appendChild(nodoTextCliente);
                valorId.appendChild(nodoTextId);
                valorTotal.appendChild(nodoTextTotal);

                CuadroText1.appendChild(nFecha);
                CuadroText1.appendChild(valorFecha);
                SeccCarac.appendChild(CuadroText1);
                CuadroText2.appendChild(nCliente);
                CuadroText2.appendChild(valorCliente);
                SeccCarac.appendChild(CuadroText2);
                CuadroText3.appendChild(nId);
                CuadroText3.appendChild(valorId);
                SeccCarac.appendChild(CuadroText3);
                CuadroText5.appendChild(nTotal);
                CuadroText5.appendChild(valorTotal);
                SeccCarac.appendChild(CuadroText5);

                unaCot.appendChild(SeccCarac);
                unaCot.appendChild(acciones);

                ubicarCot.appendChild(unaCot);
               
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
function imprimir2(i) {
    location.href = 'o-ver-cotizacion.html?id' + '=' + i;
    setTimeout(llenar, 5000);
    window.print();
}

function eliminar(index) {
    document.getElementById("vent").style.display = "block";

    aFactura = JSON.parse(localStorage.getItem('NumFacturaCot'));
    aCliente = JSON.parse(localStorage.getItem('ClienteCot'));
    aIdCliente = JSON.parse(localStorage.getItem('IDClienteCot'));
    aProductosTabla = JSON.parse(localStorage.getItem('ProductosTablaCot'));
    aFecha = JSON.parse(localStorage.getItem('FechaCot'));
    aValorCot = JSON.parse(localStorage.getItem('ValorCot'));

    aFactura.splice(index, 1);
    aCliente.splice(index, 1);
    aIdCliente.splice(index, 1);
    aProductosTabla.splice(index, 1);
    aFecha.splice(index, 1);
    aValorCot.splice(index, 1);


    localStorage.setItem('FechaCot', JSON.stringify(aFecha));
    localStorage.setItem('NumFacturaCot', JSON.stringify(aFactura));
    localStorage.setItem('ClienteCot', JSON.stringify(aCliente));
    localStorage.setItem('IDClienteCot', JSON.stringify(aIdCliente));
    localStorage.setItem('ProductosTablaCot', JSON.stringify(aProductosTabla));
    localStorage.setItem('ValorCot', JSON.stringify(aValorCot));

    location.reload();

}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
