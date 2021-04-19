//localStorage.clear();
var aFactura=[],
	aCliente=[],
	aIdCliente=[],
	aResponsable = [],
	aEstado = [],
	aFecha=[],
	aPago = [],
	aIntermediario = [],
	aProductosTabla =[],
	aProducto=[],
	aCodigo=[],
	aMarca=[],
	aModelo=[],
	aCantidad=[],
	aPrecio=[],
	aCantidadD=[],
	aPrecioTotal = [],
	aValorCot = [];
x = [];
y = [];
z = [];


var nFecha = hoyFecha(),
	nFactura = numFactura();
document.getElementById('numFecha').value = nFecha;
document.getElementById('numFac').value = nFactura;
console.log('jhg: ' + nFactura);

var elementobotonAnadir = document.querySelector('#btnAnadir');
elementobotonAnadir.addEventListener('click', registrarProducto);
var elementobotonGuardar = document.querySelector('#btnGrabar');
elementobotonGuardar.addEventListener('click', guardarCotizacion);
elementobotonGuardar.addEventListener('click', enProceso);
//var elementobotonConcretar = document.querySelector('#Concretar');

var nNombre = JSON.parse(localStorage.getItem('Nombre'));
var nNomCli = JSON.parse(localStorage.getItem('NombreCliente'));
var listaP = document.querySelector('#productO');
var listaC = document.querySelector('#nomClient');
var nProducto,
	nCodigo,
	nMarca,
	nModelo,
	nCantidad,
	nCantidadD,
	nPrecio,
	nvalorOrden,
	nnombrClient,
	nidclient;
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
for (var i = 0; i < nNomCli.length; i++) {
	console.log('hay' + nNomCli.length + 'productos registrados');
	var option = document.createElement('option');

	var nodooption = document.createTextNode(nNomCli[i]);
	console.log(nodooption);
	nodooption.value = nNomCli[i];
	console.log(nodooption.value);
	option.appendChild(nodooption);
	console.log(option);
	console.log(option.value);

	listaC.appendChild(option);
}
function llenarCasillasProducto() {
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
function llenarCasillasCliente() {
	console.log('jelouuuuuuuuuuuuuu');

	var cliClient = document.getElementById('nomClient');
	var ocliente = cliClient.value;

	var LNomCli = JSON.parse(localStorage.getItem('NombreCliente')),
		LidCli = JSON.parse(localStorage.getItem('IDCliente'));

	for (var i = 0; i < LNomCli.length; i++) {
		console.log('entrooooo');
		console.log('hay' + LNomCli.length + 'registradosssss');
		if (ocliente == LNomCli[i]) {
			console.log('entroooo33333');
			nnombrClient = LNomCli[i]
			console.log(nProducto);
			nidclient = LidCli[i];

		}
	}
	document.getElementById('IdC').value = nidclient;
}
function registrarProducto(){

	nCantidad = document.querySelector('#Cant').value;
	console.log(nCantidad);

	if (nCantidad.length === 0 || nCodigo.length === 0 || nCantidad < 1) {
		alert('Ingrese el producto y una cantidad valida');
		return;
	}

	document.getElementById('CodigoP').value = '';
	document.getElementById('MarcaP').value = '';
	document.getElementById('ModeloP').value = '';
	document.getElementById('Precio').value = '';
	document.getElementById('productO').value = '';
	document.getElementById('Cant').value = '';


	aProducto.push(nProducto);
	aCodigo.push(nCodigo);
	aMarca.push(nMarca);
	aModelo.push(nModelo);
	aCantidad.push(nCantidad);
	aCantidadD.push(nCantidadD);
	aPrecio.push(nPrecio);
	console.log(aProducto);

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
function llenarTabla() {
	var nPrecioTotal = [];
	var tbody = document.querySelector('#tablaProductos tbody');

	tbody.innerHTML = '';

	console.log('HAy' + aProducto.length + ' productos');
	for (var i = 0; i < aProducto.length; i++) {

		var fila = document.createElement('tr');
		nPrecioTotal[i] = (parseInt(aCantidad[i])) * (parseInt(aPrecio[i]));

		console.log('Se cree : ' + nPrecioTotal[i]);
		
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



		var nodoProducto = document.createTextNode(aProducto[i]),
			nodoCodigo = document.createTextNode(aCodigo[i]),
			nodoMarca = document.createTextNode(aMarca[i]),
			nodoModelo = document.createTextNode(aModelo[i]),
			nodoCantidad = document.createTextNode(aCantidad[i]),
			nodoCantidadD = document.createTextNode(aCantidad[i]);
			nodoPrecio = document.createTextNode(aPrecio[i]),
			nodoPrecioTotal = document.createTextNode(nPrecioTotal[i])

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
	console.log('Probando' + aPrecioTotal[0]);

	var suma = 0;
	var Total = 0;

	for (var i = 0; i < nPrecioTotal.length; i++) {
		suma = nPrecioTotal[i];
		Total = suma + Total;

		aPrecioTotal.push(nPrecioTotal[i]);

	}

	var celdaTotal = document.querySelector('#CeldaTotal textarea');
	celdaTotal.innerHTML = '';
	
	var nodoTotal = document.createTextNode(Total);
	celdaTotal.appendChild(nodoTotal);
	console.log(Total);
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
function guardarCotizacion() {

	if (aProducto.length > 0) {

	} else {
		alert('Debe agregar al menos un producto');
		return;
	}
	if (document.querySelector('#IdC').value.length === 0 || document.querySelector('#nomClient').value.length === 0) {

		alert('Seleccione un cliente');
		return;
	}

	aIntermediario.push(aProducto);
	aIntermediario.push(aCodigo);
	aIntermediario.push(aMarca);
	aIntermediario.push(aModelo);
	aIntermediario.push(aCantidad);
	aIntermediario.push(aPrecio);
	//aIntermediario.push(aPrecioTotal);

	//console.log(aCodigo);
	console.log('cantidad de ordenes: ' + aIntermediario[1]);



	var nFactura = document.querySelector('#numFac').value,
		nCliente = document.querySelector('#nomClient').value,
		nIdCliente = document.querySelector('#IdC').value,
		//nPago = value,
		nTotal = document.querySelector('#vorden').value;
	//console.log('Se supone' + nPago);


	if (localStorage.getItem('NumFacturaCot') !== null) {
		aFactura = JSON.parse(localStorage.getItem('NumFacturaCot'));
		aCliente = JSON.parse(localStorage.getItem('ClienteCot'));
		aIdCliente = JSON.parse(localStorage.getItem('IDClienteCot'));
		aProductosTabla = JSON.parse(localStorage.getItem('ProductosTablaCot'));
		aFecha = JSON.parse(localStorage.getItem('FechaCot'));
		aValorCot = JSON.parse(localStorage.getItem('ValorCot'));
	}


	aFecha.push(nFecha)
	aProductosTabla.push(aIntermediario);
	aFactura.push(nFactura);
	aCliente.push(nCliente);
	aIdCliente.push(nIdCliente);
	aValorCot.push(nTotal);

	localStorage.setItem('FechaCot', JSON.stringify(aFecha));
	localStorage.setItem('NumFacturaCot', JSON.stringify(aFactura));
	localStorage.setItem('ClienteCot', JSON.stringify(aCliente));
	localStorage.setItem('IDClienteCot', JSON.stringify(aIdCliente));
	localStorage.setItem('ProductosTablaCot', JSON.stringify(aProductosTabla));
	localStorage.setItem('ValorCot', JSON.stringify(aValorCot));

	x = JSON.parse(localStorage.getItem('ProductosTablaCot'));
	y = x[0][0][0];
	z = x[0][0][1];
	abrir();
	console.log('intento mostrar nombre 1: ' + y + ' z: ' + z);
}
function borrar(index) {
	aProducto.splice(index, 1);
	aCodigo.splice(index, 1);
	aMarca.splice(index, 1);
	aModelo.splice(index, 1);
	aCantidad.splice(index, 1);
	aPrecio.splice(index, 1);
	aCantidadD.splice(index, 1);
	aPrecioTotal.splice(index, 1);

	llenarTabla();
}

function hoyFecha() {
	var hoy = new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth() + 1;
	var yyyy = hoy.getFullYear();

	dd = addZero(dd);
	mm = addZero(mm);

	return dd + '/' + mm + '/' + yyyy;
}
function addZero(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i;
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
function abrir() {
	document.getElementById("vent").style.display = "block";
	document.getElementById("vent2").display = "none";
}
function abrir2() {
	document.getElementById("vent2").style.display = "block";
	document.getElementById("vent").style.display = "none";
}

function cerrar() {
	document.getElementById("vent").style.display = "none";
	document.getElementById("vent2").style.display = "none";
}

function pasarATerminado() {
	abrir2();

	var id = getUrlVars()["id"];
	pEstado = JSON.parse(localStorage.getItem('EstadoOrden'));
	//console.log('entre a ppasar a terminado: ' + pEstado);
	//console.log('entre a ppasar a terminado: ' + pEstado[id]);
	pEstado[id] = 'Terminado';
	//console.log('entre a ppasar a terminado: ' + pEstado[id]);
	//console.log('entre a ppasar a terminado: ' + pEstado);
	localStorage.setItem('EstadoOrden', JSON.stringify(pEstado));

}
function numFactura() {
	var numerito,tama,num,num2=0;
try{
	numerito = JSON.parse(localStorage.getItem('NumFacturaCot'));
		if(numerito !== 'undefined'){
		tama = numerito.length,
		num = numerito[tama - 1],
		num2 = parseInt(num) + parseInt(1);
	
}else{
		num2 = 0;
}
} catch (e){}
		

	return num2;
}

function imprimir() {
	cerrar();
	window.print();
}