llenar();
function llenar() {
    function $(selector) {
        return document.querySelector(selector);
    }
    var tbody = document.querySelector('#cuadrosClientes tbody');
    var ubicarCliente = document.getElementById('cuadrosClientes');
    

    var pNombreCliente = JSON.parse(localStorage.getItem('NombreCliente')),
        pIDCliente = JSON.parse(localStorage.getItem('IDCliente'));

    //console.log('ID: ',pID[1]);

    var nCantidadClientes = pNombreCliente.length;

    document.addEventListener('DOMContentLoaded', function () {
    var template = ``;
        for (var i = 0; i < nCantidadClientes; i++){
            var unCliente = document.createElement('div'),
                seccImag = document.createElement('div'),
                unImag = document.createElement('img'),
                seccCara = document.createElement('div'),
                cuadroText1 = document.createElement('div'),
                textId = document.createElement('label'),
                valorId = document.createElement('h4'),
                cuadroText2 = document.createElement('div'),
                textCliente = document.createElement('label'),
                valorCliente = document.createElement('h4'),
                seccBotMod = document.createElement('div'),
                botonModificar = document.createElement('a'),
                botonEliminar = document.createElement('a'),
                seccBotCliente = document.createElement('div'),
                botonListCotiz = document.createElement('a'),
                botonListOrden = document.createElement('a');

            unCliente.setAttribute('id', i);

            seccImag.className = 'img-producto';
            unImag.src = '../images/insertar-imagen-cliente.jpg';
            unImag.alt = 'Insertar-imagen';
            seccCara.className = 'caracteristicas';
            cuadroText1.className = 'cuadro-texto';
            cuadroText2.className = 'cuadro-texto';
            textId.textContent = 'ID';
            textCliente.textContent = 'Cliente';
            seccBotMod.className = 'btn-clientes-mod';
            botonModificar.textContent = "create";
            botonModificar.className = 'material-icons';
            botonModificar.href = 'o-modificar-cliente.html?id' + '=' + i;
            botonEliminar.textContent = "delete_forever";
            botonEliminar.className = 'material-icons';
            botonEliminar.setAttribute('id', 'numEliminar');
            //botonEliminar.onclick = "location.href='javascript:eliminar(i)'";
            botonEliminar.href = 'javascript:verVentana(' + i + ')';
            botonEliminar.onclick = 'javascript:abrir()';
            seccBotCliente.className = 'btns-clientes';
            botonListCotiz.href = 'o-listar-cotizaciones.html?id' + '=' + pIDCliente[i];
            botonListCotiz.textContent = 'Cotizaciones';
            botonListOrden.href = 'o-listar-orden.html?id' + '=' + pIDCliente[i];
            botonListOrden.textContent = 'Ordenes de trabajo';

            var nodoTextNombre = document.createTextNode(pNombreCliente[i]),
                nodoTextIdCli = document.createTextNode(pIDCliente[i]);

            valorCliente.appendChild(nodoTextNombre);
            valorId.appendChild(nodoTextIdCli);

            seccImag.appendChild(unImag);
            cuadroText1.appendChild(textId);
            cuadroText1.appendChild(valorId);
            cuadroText2.appendChild(textCliente);
            cuadroText2.appendChild(valorCliente);
            seccCara.appendChild(cuadroText1);
            seccCara.appendChild(cuadroText2);
           // seccBotMod.appendChild(botonEliminar);
           // seccBotMod.appendChild(botonModificar);
            seccBotCliente.appendChild(botonListCotiz);
            seccBotCliente.appendChild(botonListOrden);

            unCliente.appendChild(seccImag);
            unCliente.appendChild(seccCara);
            unCliente.appendChild(seccBotMod);
            unCliente.appendChild(seccBotCliente);

            ubicarCliente.appendChild(unCliente);

            /*template += `
                <div>
                <div class="img-producto">
                    <img src="../images/insertar-imagen-cliente.jpg" alt="Insertar-imagen" />
                </div>
                <div class="caracteristicas">
                    <div class="cuadro-texto">
                        <label>ID</label>
                        <h4>${pIDCliente[i]}</h4>
                    </div>
                    <div class="cuadro-texto">
                        <label>Cliente</label>
                        <h4>${pNombreCliente[i]}</h4>
                    </div>
                </div>
                <div class="btn-clientes-mod">
                    <input type="button" title="Eliminar" class="material-icons" value="delete_forever" onclick="location.href='javascript:abrir()'">
                    <input type="button" title="Modificar" class="material-icons" value="create" onclick="location.href='a-modificar-cliente.html'">
                </div>
                <div class="btns-clientes">
                    <a href="a-listar-cotizaciones.html">Cotizaciones</a>
                    <a href="a-listar-orden.html">Ordenes de trabajo</a>
                </div>
            </div>
            `;
        $("#cuadrosClientes").innerHTML = template;*/
    }
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

    textVent1.textContent = '¿ Está seguro que desea eliminar este cliente?';
    textVent2.textContent = 'Esta acción no se podrá deshacer';
    botonSi.className = 'si';
    botonSi.textContent = 'Si';
    botonSi.id = 'borrar_producto';
    //botonSi.onclick = 'eliminar(' + index + ')';
    botonSi.href = 'javascript:eliminar(' + index + ')';

    botonNo.className = 'no';
    botonNo.textContent = 'No';
    botonNo.href = 'a-listar-clientes.html';
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
    document.getElementById("vent").style.display = "block";

    var pNombreCliente = JSON.parse(localStorage.getItem('NombreCliente')),
        pIDCliente = JSON.parse(localStorage.getItem('IDCliente'));

    pNombreCliente.splice(index, 1);
    pIDCliente.splice(index, 1);

    localStorage.setItem('NombreCliente', JSON.stringify(pNombreCliente));
    localStorage.setItem('IDCliente', JSON.stringify(pIDCliente));

    location.reload();
}