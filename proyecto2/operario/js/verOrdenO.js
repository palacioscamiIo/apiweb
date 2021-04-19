
var tbody = document.querySelector('#tablaProductos tbody');

//tbody.innerHTML = '';
var aEstado = JSON.parse(localStorage.getItem('EstadoOrden'));
	pFactura = JSON.parse(localStorage.getItem('NumFacturaOrden'));
	pCliente = JSON.parse(localStorage.getItem('ClienteOrden'));
	pIdCliente = JSON.parse(localStorage.getItem('IDClienteOrden'));
	pResponsable = JSON.parse(localStorage.getItem('ResponsableOrden'));
	pPago = JSON.parse(localStorage.getItem('MetodoPagoOrden'));
	pNomPro = JSON.parse(localStorage.getItem('ProductosTabla'));
	pFecha = JSON.parse(localStorage.getItem('FechaOrden'));
	pEstado = JSON.parse(localStorage.getItem('EstadoOrden'));
pValorOrden = JSON.parse(localStorage.getItem('ValorOrden'));
mostrarDatos();

function mostrarDatos() {
	var id = getUrlVars()["id"];
	var nPrecioTotal = [];

	console.log('Todo Prod: ' + pNomPro);


	var qNumFacturaOrden = pFactura[id],
		qCliente = pCliente[id],
		qIdCliente = pIdCliente[id],
		qResponsable = pResponsable[id],
		qPago = pPago[id],
		qEstado = pEstado[id],
		//qProductosTabla = pProductosTabla[id],
		qFecha = pFecha[id],
		qValorOrden = pValorOrden[id];


	//console.log('Aqui voy: ' + qProductosTabla);


	//console.log('La orden tiene' + qProductosTabla[0].length + ' productos');

	document.querySelector('#numFac').value = qNumFacturaOrden;
	document.querySelector('#nomClient').value = qCliente;
	document.querySelector('#IdC').value = qIdCliente;
	document.querySelector('#Resp').value = qResponsable;
	document.querySelector('#estado').value = qEstado;

	//valorEstado = JSON.parse(document.getElementById('estado'));
	valorEstado = document.getElementById('estado');
	//console.log('Estado aqui: ' + qEstado + ' y ' + valorEstado);
	if (qEstado === 'Terminado') {
		//console.log('casi que no entro');
		valorEstado.setAttribute('class','estado-terminado');
	} else {
		//var colorEstado = document.getElementById("valorColorEstado");
		//console.log(colorEstado);
		//console.log('casi que si entro');
		valorEstado.className = 'estado-proceso';
	}

if (qPago === 'Efectivo') {
	document.querySelector('#Efectivo').setAttribute('checked','');
} else if (qPago === 'Tar Credito') {
	document.querySelector('#Credito').setAttribute('checked', '');
} else if (qPago === 'PSE') {
	document.querySelector('#PSE').setAttribute('checked', '');
}

	for (var i = 0; i < pNomPro[id][0].length; i++) {

		var fila = document.createElement('tr');
		nPrecioTotal[i] = (parseInt(pNomPro[id][4][i]) * (parseInt(pNomPro[id][5][i])));


		var celdaProducto = document.createElement('td'),
			celdaCodigo = document.createElement('td'),
			celdaMarca = document.createElement('td'),
			celdaModelo = document.createElement('td'),
			celdaCantidad = document.createElement('td'),
			celdaPrecio = document.createElement('td'),
			celdaPrecioTotal = document.createElement('td');

		var pValorTotal = pNomPro[id][4][i] * pNomPro[id][5][i];

		var nodoProducto = document.createTextNode(pNomPro[id][0][i]),
			nodoCodigo = document.createTextNode(pNomPro[id][1][i]),
			nodoMarca = document.createTextNode(pNomPro[id][2][i]),
			nodoModelo = document.createTextNode(pNomPro[id][3][i]),
			nodoCantidad = document.createTextNode(pNomPro[id][4][i]),
			nodoPrecio = document.createTextNode(pNomPro[id][5][i]),
			nodoPrecioTotal = document.createTextNode(pValorTotal);

		celdaProducto.appendChild(nodoProducto);
		celdaCodigo.appendChild(nodoCodigo);
		celdaMarca.appendChild(nodoMarca);
		celdaModelo.appendChild(nodoModelo);
		celdaCantidad.appendChild(nodoCantidad);
		celdaPrecio.appendChild(nodoPrecio);
		celdaPrecioTotal.appendChild(nodoPrecioTotal);

		fila.appendChild(celdaProducto);
		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaMarca);
		fila.appendChild(celdaModelo);
		fila.appendChild(celdaCantidad);
		fila.appendChild(celdaPrecio);
		fila.appendChild(celdaPrecioTotal);


		tbody.appendChild(fila);
		
	}

	var suma = 0;
	var Total = 0;

	for (var i = 0; i < nPrecioTotal.length; i++) {
		suma = nPrecioTotal[i];
		Total = suma + Total;

		//aPrecioTotal.push(nPrecioTotal[i]);

	}

	var celdaTotal = document.querySelector('#CeldaTotal textarea');
	celdaTotal.innerHTML = '';

	var nodoTotal = document.createTextNode(Total);
	celdaTotal.appendChild(nodoTotal);
	console.log(Total);
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}