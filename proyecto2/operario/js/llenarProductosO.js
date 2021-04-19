llenar();
//console.log('hola');
function llenar() {/*
    function $(selector) {
        return document.querySelector(selector);
    }
    */
    var tbodyy = document.querySelector('#cuadrosProductos tbody');
    var ubicarProducto = document.getElementById('cuadrosProductos');

    //tbody.innerHTML = '';

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

    //console.log('Nombre: ',pNombre[1]);

    var nCantidadProductos = pNombre.length;

    document.addEventListener('DOMContentLoaded', function () {
    var template = ``;
    
        for (var i = 0; i < nCantidadProductos; i++){
            var unProduc = document.createElement('div'),
                NomProduc = document.createElement('div'),
                botonModificar = document.createElement('a'),
                botonEliminar = document.createElement('a'),
                SeccImgProducto = document.createElement('div'),
                ImgProducto = document.createElement('img'),
                SeccCarac = document.createElement('div'),
                CuadroText1 = document.createElement('div'),
                gCodigo = document.createElement('label'),
                valorCodigo = document.createElement('h4'),
                CuadroText2 = document.createElement('div'),
                gMarca = document.createElement('label'),
                valorMarca = document.createElement('h4'),
                CuadroText3 = document.createElement('div'),
                gModelo = document.createElement('label'),
                valorModelo = document.createElement('h4'),
                CuadroText4 = document.createElement('div'),
                gVitrina = document.createElement('label'),
                valorVitrina = document.createElement('h4'),
                CuadroText5 = document.createElement('div'),
                gBodega = document.createElement('label'),
                valorBodega = document.createElement('h4'),
                CuadroText6 = document.createElement('div'),
                gCantidad = document.createElement('label'),
                valorCantidad = document.createElement('h4'),
                CuadroText7 = document.createElement('div'),
                gPrecio = document.createElement('label'),
                valorPrecio = document.createElement('h4'),
                CuadroText8 = document.createElement('div'),
                valorDescripcion = document.createElement('h4');

            NomProduc.setAttribute('id', i);

            //

            //unProduc.id('unProducto');
            //NomProduc.id('tituloProducto');
            NomProduc.className = 'titulo-producto';
            SeccImgProducto.className = 'img-producto';
            botonModificar.textContent = "create";
            botonModificar.className = 'material-icons';
            botonModificar.href = 'a-modificar-producto.html?id' + '=' + i;
            botonEliminar.textContent = "delete_forever";
            botonEliminar.className = 'material-icons';
            botonEliminar.setAttribute('id', 'numEliminar');
            //botonEliminar.onclick = "location.href='javascript:eliminar(i)'";
            botonEliminar.href = 'javascript:verVentana(' + i + ')';
            botonEliminar.onclick = 'javascript:abrir()';
            ImgProducto.src = 'pImagen';
            ImgProducto.alt = 'Insertar-imagen';
            SeccCarac.className = 'caracteristicas';
            CuadroText1.className = 'cuadro-texto';
            CuadroText2.className = 'cuadro-texto';
            CuadroText3.className = 'cuadro-texto';
            CuadroText4.className = 'cuadro-texto';
            CuadroText5.className = 'cuadro-texto';
            CuadroText6.className = 'cuadro-texto';
            CuadroText7.className = 'cuadro-texto';
            CuadroText8.className = 'descripcion';
            gCodigo.textContent = 'Codigo';
            gMarca.textContent = 'Marca';
            gModelo.textContent = 'Modelo';
            gVitrina.textContent = 'Vitrina';
            gBodega.textContent = 'Bodega';
            gCantidad.textContent = 'Disponibles';
            gPrecio.textContent = 'Precio';


            //elementoBotonEliminar.addEventListener('click', eliminar());


            var nodoTextNombre = document.createTextNode(pNombre[i]),
                nodoTextCodigo = document.createTextNode(pCodigo[i]),
                nodoTextMarca = document.createTextNode(pMarca[i]),
                nodoTextModelo = document.createTextNode(pModelo[i]),
                nodoTextVitrina = document.createTextNode(pVitrina[i]),
                nodoTextBodega = document.createTextNode(pBodega[i]),
                nodoTextCantidad = document.createTextNode(pCantidad[i]),
                nodoTextPrecio = document.createTextNode(pPrecio[i]),
                nodoTextDescripcion = document.createTextNode(pDescripcion[i]);

            NomProduc.appendChild(nodoTextNombre);
           // NomProduc.appendChild(botonEliminar);
            //NomProduc.appendChild(botonModificar);
            valorCodigo.appendChild(nodoTextCodigo);
            valorMarca.appendChild(nodoTextMarca);
            valorModelo.appendChild(nodoTextModelo);
            valorVitrina.appendChild(nodoTextVitrina);
            valorBodega.appendChild(nodoTextBodega);
            valorCantidad.appendChild(nodoTextCantidad);
            valorPrecio.appendChild(nodoTextPrecio);
            valorDescripcion.appendChild(nodoTextDescripcion);

            SeccImgProducto.appendChild(ImgProducto);
            CuadroText1.appendChild(gCodigo);
            CuadroText1.appendChild(valorCodigo);
            SeccCarac.appendChild(CuadroText1);
            CuadroText2.appendChild(gMarca);
            CuadroText2.appendChild(valorMarca);
            SeccCarac.appendChild(CuadroText2);
            CuadroText3.appendChild(gModelo);
            CuadroText3.appendChild(valorModelo);
            SeccCarac.appendChild(CuadroText3);
            CuadroText4.appendChild(gVitrina);
            CuadroText4.appendChild(valorVitrina);
            SeccCarac.appendChild(CuadroText4);
            CuadroText5.appendChild(gBodega);
            CuadroText5.appendChild(valorBodega);
            SeccCarac.appendChild(CuadroText5);
            CuadroText6.appendChild(gCantidad);
            CuadroText6.appendChild(valorCantidad);
            SeccCarac.appendChild(CuadroText6);
            CuadroText7.appendChild(gPrecio);
            CuadroText7.appendChild(valorPrecio);
            SeccCarac.appendChild(CuadroText7);
            CuadroText8.appendChild(valorDescripcion);

            unProduc.appendChild(NomProduc);
            unProduc.appendChild(SeccImgProducto);
            unProduc.appendChild(SeccCarac);
            unProduc.appendChild(CuadroText8);

            ubicarProducto.appendChild(unProduc);
            /*
        template += `
                <div id="unProducto">
                <div class="titulo-producto" id="tituloProducto">
                    ${pNombre[i]}
                    <!--
                    <a title="Eliminar" class="material-icons"  id="btn-eliminar">delete_forever</a>
                    <a title="Modificar" class="material-icons"  id="btn-modificar">create</a>
                    --!>
                </div>
                <div class="img-producto">
                    <img src="${pImagen[i]}" alt="Insertar-imagen" />
                </div>
                <div class="caracteristicas">
                    <div class="cuadro-texto">
                        <label>Codigo</label>
                        <h4>${pCodigo[i]}</h4 >
                    </div>
                    <div class="cuadro-texto">
                        <label>Marca</label>
                        <h4>${pMarca[i]}</h4>
                    </div>
                    <div class="cuadro-texto">
                        <label>Modelo</label>
                        <h4>${pModelo[i]}</h4>
                    </div>
                    <div class="cuadro-texto">
                        <label>Vitrina</label>
                        <h4>${pVitrina[i]}</h4>
                    </div>
                    <div class="cuadro-texto">
                        <label>Bodega</label>
                        <h4>${pBodega[i]}</h4>
                    </div>
                    <div class="cuadro-texto">
                        <label>Disponibles</label>
                        <h4>${pCantidad[i]}</h4>
                    </div>
                    <div class="cuadro-texto">
                        <label>Precio</label>
                        <h4>$ ${pPrecio[i]}</h4>
                    </div>
                </div>
                <div class="descripcion">
                    <h4>${pDescripcion[i]}</h4>
                </div>
            </div>
            `;
        $("#cuadrosProductos").innerHTML = template;
        var ubicarbotonModificar = document.getElementById('tituloProducto'),
            ubicarbotonEliminar = document.getElementById('tituloProducto');
        var botonModificar = document.createElement('a'),
            botonEliminar = document.createElement('a');
        botonModificar.textContent = "create";
        botonModificar.className = 'material-icons';
        botonModificar.href = 'a-modificar-producto.html';
        botonEliminar.textContent = "delete_forever";
        botonEliminar.className = 'material-icons';
        botonEliminar.href = 'a-eliminar-producto.html';

        ubicarbotonModificar.appendChild(botonModificar);
        ubicarbotonEliminar.appendChild(botonEliminar);*/
        }
        //console.log(NomProduc);
    });
}
function verVentana(index) {
    console.log('entre a VerVentana');
    console.log(index);
    var mostrarVentana = document.getElementById('vent');
    textVent1 = document.createElement('h2');
    textVent2 = document.createElement('h4');
    botonSi = document.createElement('a');
    botonNo = document.createElement('a');

    textVent1.textContent = '¿ Está seguro que desea eliminar este producto?';
    textVent2.textContent = 'Esta acción no se podrá deshacer';
    botonSi.className = 'si';
    botonSi.textContent = 'Si';
    botonSi.id = 'borrar_producto';
    //botonSi.onclick = 'eliminar(' + index + ')';
    botonSi.href = 'javascript:eliminar(' + index + ')';

    botonNo.className = 'no';
    botonNo.textContent = 'No';
    botonNo.href = 'a-listar-productos.html';
    //abrir();
    mostrarVentana.appendChild(textVent1);
    mostrarVentana.appendChild(textVent2);
    mostrarVentana.appendChild(botonSi);
    mostrarVentana.appendChild(botonNo);
    document.getElementById("vent").style.display = "block";
    document.getElementById("vent2").display = "none";
}
function eliminar(index) {

    console.log('entre a eliminar');
    console.log(index);
    /*
    var mostrarVentana = document.getElementById('vent');
    textVent1 = document.createElement('h2');
    textVent2 = document.createElement('h4');
    botonSi = document.createElement('input');
    botonNo = document.createElement('input');

    textVent1.textContent = '¿ Está segur&#64; que desea eliminar este producto?';
    textVent2.textContent = 'Esta acción no se podrá deshacer';
    botonSi.type = 'button';
    botonSi.className = 'si';
    botonSi.value = 'Si';
    botonSi.id = 'borrar_producto';
    botonSi.onclick = '';

    botonNo.type = 'button';
    botonNo.className = 'no';
    botonNo.value = 'No';
    //abrir();
    mostrarVentana.appendChild(textVent1);
    mostrarVentana.appendChild(textVent2);
    mostrarVentana.appendChild(botonSi);
    mostrarVentana.appendChild(botonNo);*/

    document.getElementById("vent").style.display = "block";

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

    location.reload();
}