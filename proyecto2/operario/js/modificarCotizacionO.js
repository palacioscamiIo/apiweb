
var tbody = document.querySelector('#tablaProductos tbody');

//tbody.innerHTML = '';
	pFactura = JSON.parse(localStorage.getItem('NumFacturaCot'));
	pCliente = JSON.parse(localStorage.getItem('ClienteCot'));
	pIdCliente = JSON.parse(localStorage.getItem('IDClienteCot'));
	pNomPro = JSON.parse(localStorage.getItem('ProductosTablaCot'));
	pFecha = JSON.parse(localStorage.getItem('FechaCot'));
	pValorCot = JSON.parse(localStorage.getItem('ValorCot'));
mostrarDatos();
var nNombre = JSON.parse(localStorage.getItem('Nombre'));
var listaP = document.querySelector('#productO');
var nProducto,
	nCodigo,
	nMarca,
	nModelo,
	nCantidad,
	nCantidadD,
	nPrecio,
	nvalorOrden;
//listaP.innerHTML= '';

for (var i = 0; i < nNombre.length; i++) {
	console.log('hay' + nNombre.length + 'productos registrados');
	var option = document.createElement('option');

	var nodooption = document.createTextNode(nNombre[i]);
	console.log(nodooption);
	nodooption.value = nNombre[i];
	console.log(nodooption.value);
	option.appendChild(nodooption);
	console.log(option);
	console.log(option.value);


	listaP.appendChild(option);
}
function llenarCasillas() {
	console.log('jelouuuuuuuuuuuuuu');
	var Nombre = document.getElementById('productO');
	var oNombre = Nombre.value;
	console.log(oNombre);

	var LProductos = JSON.parse(localStorage.getItem('Nombre')),
		LCodigo = JSON.parse(localStorage.getItem('Codigo')),
		LMarca = JSON.parse(localStorage.getItem('Marca')),
		LModelo = JSON.parse(localStorage.getItem('Modelo')),
		LCantidad = JSON.parse(localStorage.getItem('Cantidad')),
		LPrecio = JSON.parse(localStorage.getItem('Precio'));


	for (var i = 0; i < LProductos.length; i++) {
		console.log('entrooooo');
		console.log('hay' + LProductos.length + 'registradosssss');
		console.log(LProductos[i]);
		if (oNombre == LProductos[i]) {
			console.log('entroooo33333');
			nProducto = LProductos[i]
			console.log(nProducto);
			nCodigo = LCodigo[i];
			nMarca = LMarca[i];
			nModelo = LModelo[i];
			nCantidadD = LCantidad[i];
			nPrecio = LPrecio[i];
		}
	}
	document.getElementById('CodigoP').value = nCodigo;
	document.getElementById('MarcaP').value = nMarca;
	document.getElementById('ModeloP').value = nModelo;
	document.getElementById('Precio').value = nPrecio;
}
function mostrarDatos() {
	var id = getUrlVars()["id"];
	var nPrecioTotal = [];

	var elementobotonAnadir = document.querySelector('#btnAnadir');
	elementobotonAnadir.addEventListener('click', registrarProducto);

	console.log('Todo Prod: ' + pNomPro);


	var qNumFacturaCot = pFactura[id],
	qCliente = pCliente[id],
	qIdCliente = pIdCliente[id],
	//qProductosTabla = pProductosTabla[id],
	qFecha = pFecha[id],
	qValorCot = pValorCot[id],
	btnModCot = document.querySelector('#btn-mod-orden'),
	btnGenCot = document.querySelector('#btn-gen-orden');



	//console.log('Aqui voy: ' + qProductosTabla);


	//console.log('La orden tiene' + qProductosTabla[0].length + ' productos');

	document.querySelector('#numFecha').value = qFecha;
	document.querySelector('#numFac').value = qNumFacturaCot;
	document.querySelector('#nomClient').value = qCliente;
	document.querySelector('#IdC').value = qIdCliente;


	btnModCot.addEventListener('click', modificar);
	//btnGenCot.addEventListener('click', pasarAOrden)
	for (var i = 0; i < pNomPro[id][0].length; i++) {

		var fila = document.createElement('tr');
		nPrecioTotal[i] = (parseInt(pNomPro[id][4][i]) * (parseInt(pNomPro[id][5][i])));


		var celdaEliminar = document.createElement('td'),
			botonEliminar = document.createElement('a'),
			celdaProducto = document.createElement('td'),
			celdaCodigo = document.createElement('td'),
			celdaMarca = document.createElement('td'),
			celdaModelo = document.createElement('td'),
			celdaCantidad = document.createElement('td'),
			celdaCantidadDisponible = document.createElement('td'),
			celdaPrecio = document.createElement('td'),
			celdaPrecioTotal = document.createElement('td');


		celdaEliminar.setAttribute('id', i);
		botonEliminar.setAttribute('id', i);

		var pValorTotal = pNomPro[id][4][i] * pNomPro[id][5][i];

		var nodoProducto = document.createTextNode(pNomPro[id][0][i]),
			nodoCodigo = document.createTextNode(pNomPro[id][1][i]),
			nodoMarca = document.createTextNode(pNomPro[id][2][i]),
			nodoModelo = document.createTextNode(pNomPro[id][3][i]),
			nodoCantidad = document.createTextNode(pNomPro[id][4][i]),
			nodoCantidadD = document.createTextNode(pNomPro[id][4][i]),
			nodoPrecio = document.createTextNode(pNomPro[id][5][i]),
			nodoPrecioTotal = document.createTextNode(pValorTotal);

		botonEliminar.className = 'boton2';
		botonEliminar.textContent = 'Eliminar';
		botonEliminar.href = 'javascript:borrar(' + i + ',' + id +')';

		celdaEliminar.appendChild(botonEliminar);
		celdaProducto.appendChild(nodoProducto);
		celdaCodigo.appendChild(nodoCodigo);
		celdaMarca.appendChild(nodoMarca);
		celdaModelo.appendChild(nodoModelo);
		celdaCantidad.appendChild(nodoCantidad);
		celdaCantidadDisponible.appendChild(nodoCantidadD);
		celdaPrecio.appendChild(nodoPrecio);
		celdaPrecioTotal.appendChild(nodoPrecioTotal);


		fila.appendChild(celdaEliminar);
		fila.appendChild(celdaProducto);
		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaMarca);
		fila.appendChild(celdaModelo);
		fila.appendChild(celdaCantidad);
		fila.appendChild(celdaCantidadDisponible);
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
function borrar(index1, index2) {

	var index2 = getUrlVars()["id"];
	//console.log('jelou: ' + aProductosTabla[0][index][0]);
	console.log('entre a eliminar');

	console.log('valor antes PNomPro' + pNomPro);
	pNomPro[index2][0].splice(index1, 1);
	pNomPro[index2][1].splice(index1, 1);
	pNomPro[index2][2].splice(index1, 1);
	pNomPro[index2][3].splice(index1, 1);
	pNomPro[index2][4].splice(index1, 1);
	pNomPro[index2][5].splice(index1, 1);
	//pNomPro[index2][6].splice(index1, 1);
	//aPrecioTotal.splice(index, 1);
	console.log('valor despues PNomPro' + pNomPro);

	var pInter = [],
		pProductoTabla = [];
	pInter.push(pNomPro);



	var intento = JSON.parse(localStorage.getItem('ProductosTablaCont'));
	console.log('Parce: ' + pInter);


	console.log('Productos: ' + pNomPro);


	llenarTabla(index2);
	//location.reload();
	//mostrarDatos();
}
function llenarTabla(id) {
	var nPrecioTotal = [];

	var id = getUrlVars()["id"];
	var tbody = document.querySelector('#tablaProductos tbody');

	tbody.innerHTML = '';
	console.log('id: '  + id)
	console.log('Se cree : ' + pNomPro[id][0].length);
	console.log('HAy' + pNomPro[id][0].length + ' productos');
	for (var i = 0; i < pNomPro[id][0].length; i++) {

		var fila = document.createElement('tr');
		nPrecioTotal[i] = (parseInt(pNomPro[id][4][i]) * (parseInt(pNomPro[id][5][i])));


		var celdaEliminar = document.createElement('td'),
			botonEliminar = document.createElement('a'),
			celdaProducto = document.createElement('td'),
			celdaCodigo = document.createElement('td'),
			celdaMarca = document.createElement('td'),
			celdaModelo = document.createElement('td'),
			celdaCantidad = document.createElement('td'),
			celdaCantidadDisponible = document.createElement('td'),
			celdaPrecio = document.createElement('td'),
			celdaPrecioTotal = document.createElement('td');


		celdaEliminar.setAttribute('id', i);
		botonEliminar.setAttribute('id', i);


		var pValorTotal = pNomPro[id][4][i] * pNomPro[id][5][i];

		var nodoProducto = document.createTextNode(pNomPro[id][0][i]),
			nodoCodigo = document.createTextNode(pNomPro[id][1][i]),
			nodoMarca = document.createTextNode(pNomPro[id][2][i]),
			nodoModelo = document.createTextNode(pNomPro[id][3][i]),
			nodoCantidad = document.createTextNode(pNomPro[id][4][i]),
			nodoCantidadD = document.createTextNode(pNomPro[id][4][i]),
			nodoPrecio = document.createTextNode(pNomPro[id][5][i]),
			nodoPrecioTotal = document.createTextNode(pValorTotal);

		botonEliminar.className = 'boton2';
		botonEliminar.textContent = 'Eliminar';
		botonEliminar.href = 'javascript:borrar(' + i + ')';

		celdaEliminar.appendChild(botonEliminar);
		celdaProducto.appendChild(nodoProducto);
		celdaCodigo.appendChild(nodoCodigo);
		celdaMarca.appendChild(nodoMarca);
		celdaModelo.appendChild(nodoModelo);
		celdaCantidad.appendChild(nodoCantidad);
		celdaCantidadDisponible.appendChild(nodoCantidadD);
		celdaPrecio.appendChild(nodoPrecio);
		celdaPrecioTotal.appendChild(nodoPrecioTotal);


		fila.appendChild(celdaEliminar);
		fila.appendChild(celdaProducto);
		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaMarca);
		fila.appendChild(celdaModelo);
		fila.appendChild(celdaCantidad);
		fila.appendChild(celdaCantidadDisponible);
		fila.appendChild(celdaPrecio);
		fila.appendChild(celdaPrecioTotal);


		tbody.appendChild(fila);

	}
	//console.log('Probando' + aPrecioTotal[0]);
	
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

	pValorCot[id] = Total;
	console.log('Holis' +pValorCot);
	/*
	var suma = 0;
	var Total = 0;

	for (var i = 0; i < aPrecioTotal.length; i++) {
		suma = aPrecioTotal[i];
		Total = suma + Total;
	}

	var celdaTotal = document.querySelector('#CeldaTotal h6')
	celdaTotal.innerHTML = '';
	var nodoTotal = document.createTextNode(Total);
	celdaTotal.appendChild(nodoTotal);
	localStorage.setItem('ValorOrden', JSON.stringify(Total));
	*/
}
function modificar() {
	console.log('entre a modificar: ' + pValorCot);
	localStorage.setItem('ProductosTablaCot', JSON.stringify(pNomPro));
	localStorage.setItem('ValorCot', JSON.stringify(pValorCot));
}
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}
function enProceso() {
	var nEstado = 'En proceso';

	if (localStorage.getItem('EstadoOrden') !== null) {
		aEstado = JSON.parse(localStorage.getItem('EstadoOrden'));
	}

	aEstado.push(nEstado);
	localStorage.setItem('EstadoOrden', JSON.stringify(aEstado));

}
function terminado() {
	var nEstado = 'Terminado';
	if (localStorage.getItem('EstadoOrden') !== null) {
		aEstado = JSON.parse(localStorage.getItem('EstadoOrden'));
	}
	aEstado.push(nEstado);
	localStorage.setItem('EstadoOrden', JSON.stringify(aEstado));

}
function pasarATerminado() {

	var id = getUrlVars()["id"];
	pEstado = JSON.parse(localStorage.getItem('EstadoOrden'));
	//console.log('entre a ppasar a terminado: ' + pEstado);
	//console.log('entre a ppasar a terminado: ' + pEstado[id]);
	pEstado[id] = 'Terminado';
	//console.log('entre a ppasar a terminado: ' + pEstado[id]);
	//console.log('entre a ppasar a terminado: ' + pEstado);
	localStorage.setItem('EstadoOrden', JSON.stringify(pEstado));

}
function registrarProducto() {

	var id = getUrlVars()["id"];
	var nCantidad = document.querySelector('#Cant').value;
	console.log(nCantidad);

	var cProducto = localStorage.getItem('ProductosTabla');
	/*	cCodigo = localStorage.getItem('CodigoOrden'),
		cMarca = localStorage.getItem('MarcaOrden'),
		cModelo = localStorage.getItem('ModeloOrden'),
		cCantidad = localStorage.getItem('CantidadOrden'),
		cPrecio = localStorage.getItem('PrecioOrden'),
		cCantidadD = localStorage.getItem('CantidadDisponibleOrden'),
		cPrecioTotal = localStorage.getItem('PrecioTotalOrden');
	//console.log(cProducto[ + '1' + ]);
	
	if (cProducto !== null) {
		aProducto = JSON.parse(nProducto);
		aCodigo = JSON.parse(nCodigo);
		aMarca = JSON.parse(nMarca);
		aModelo = JSON.parse(nModelo);
		aCantidad = JSON.parse(nCantidad);
		aPrecio = JSON.parse(nPrecio);
		//aCantidadD = JSON.parse(nCantidadD);
		aPrecioTotal = JSON.parse(nvalorOrden);
	}*/
	console.log('valor del id: ' + pNomPro[id][0]);
	pNomPro[id][0].push(nProducto);
	
	pNomPro[id][1].push(nCodigo);
	pNomPro[id][2].push(nMarca);
	pNomPro[id][3].push(nModelo);
	pNomPro[id][4].push(nCantidad);
	pNomPro[id][5].push(nPrecio);
	//console.log(aProducto);

	/*
		aProductosTabla.push(aProducto);
		aProductosTabla.push(aCodigo);
		aProductosTabla.push(aMarca);
		aProductosTabla.push(aModelo);
		aProductosTabla.push(aCantidad);
		aProductosTabla.push(aValorOrden);
		aProductosTabla.push(aPrecioTotal);
		//console.log(aCodigo);
		console.log('cantidad de ordenes: '+ aProductosTabla.length);
	
		localStorage.setItem('UnProducto', JSON.stringify(aProductosTabla));
		
		localStorage.setItem('NombreProductoOrden',JSON.stringify(aProducto));
		localStorage.setItem('CodigoOrden',JSON.stringify(aCodigo));
		localStorage.setItem('MarcaOrden',JSON.stringify(aMarca));
		localStorage.setItem('ModeloOrden',JSON.stringify(aModelo));
		localStorage.setItem('CantidadOrden',JSON.stringify(aCantidad));
		localStorage.setItem('PrecioOrden',JSON.stringify(aPrecio));
		localStorage.setItem('CantidadDisponibleOrden',JSON.stringify(aCantidadD));
		localStorage.setItem('PrecioTotalOrden',JSON.stringify(aPrecioTotal));
		*/
	llenarTabla();
}