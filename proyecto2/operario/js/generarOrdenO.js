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
	aRestante = [],
	aPrecio=[],
	aCantidadD=[],
	aPrecioTotal = [],
	aValorOrden = [];
x = [];
y = [];
z = [];
cerrar();
var nFactura = numFactura();

document.getElementById('numFac').value = nFactura;

var elementobotonAnadir = document.querySelector('#btnAnadir');
elementobotonAnadir.addEventListener('click', registrarProducto);
var elementobotonGuardar = document.querySelector('#Guardar');
elementobotonGuardar.addEventListener('click', guardarOrden);
//elementobotonGuardar.addEventListener('click', enProceso);
var elementobotonConcretar = document.querySelector('#Concretar');
elementobotonConcretar.addEventListener('click', guardarOrden1);
//elementobotonConcretar.addEventListener('click', terminado);
//elementobotonConcretar.addEventListener('click', pasarATerminado);
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
var xd = parseInt(aProducto.length);
	for (var i = 0; i < (xd + 1); i++) {
		if (aCodigo[i] == document.getElementById('CodigoP').value) {
			alert('Ya ingresó este producto');
			return;
		}
		//console.log('HAy' + document.getElementById('CodigoP').value + ' doggies ' + aCodigo[i]);
	}
	document.getElementById('CodigoP').value = '';
	document.getElementById('MarcaP').value = '';
	document.getElementById('ModeloP').value = '';
	document.getElementById('Precio').value = '';
	document.getElementById('productO').value = '';
	document.getElementById('Cant').value = '';

	if (parseInt(nCantidadD) < parseInt(nCantidad)) {
		alert('La cantidad disponible es ' + nCantidadD);
		var nk = parseInt(nCantidad) + parseInt(nCantidadD);
		console.log('Cantidad disponible: ' + nCantidadD + ' requerido ' + nCantidad + ' ' + nk);
		return;
	}
	var nRestante = parseInt(nCantidadD) - parseInt(nCantidad) ;
	//-------------

	aProducto.push(nProducto);
	aCodigo.push(nCodigo);
	aMarca.push(nMarca);
	aModelo.push(nModelo);
	aCantidad.push(nCantidad);
	aCantidadD.push(nCantidadD);
	aPrecio.push(nPrecio);
	aRestante.push(nRestante);
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
function guardarOrden() {

	var tipo = document.getElementsByName('Pago');
	var value;

	if (tipo[0].checked) {
		value = "Efectivo";
	} else if (tipo[1].checked){
		value = "Tar Credito";
	} else if (tipo[2].checked) {
		value = "PSE";
	}
	//if ((tipo[0].checked || tipo[1].checked || tipo[2].checked) && (document.getElementById('Resp').length === 0) && aProducto.length > 0) {
	if ((tipo[0].checked || tipo[1].checked || tipo[2].checked) ) {	
	
	} else {
		alert('Seleccione un método de pago');
		return;
	}
	if ( aProducto.length > 0) {

	} else {
		alert('Debe agregar al menos un producto');
		return;
	}
	if (document.querySelector('#Resp').value.length !== 0) {

	} else {
		alert('Ingrese el nombre del responsable');
		return;
	}
	//console('Aqui vamos: ' + document.querySelector('#Resp').length);
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

	console.log('jelouuuuuuuuuuuuuu');
	//console.log(aCodigo);
	console.log('cantidad de ordenes: ' + aIntermediario[1]);

	

	var nFactura = document.querySelector('#numFac').value,
		nCliente = document.querySelector('#nomClient').value,
		nIdCliente = document.querySelector('#IdC').value,
		nResponsable = document.querySelector('#Resp').value,
		nPago = value,
		nTotal = document.querySelector('#vorden').value,
		nFecha = hoyFecha();
		//console.log('Se supone' + nPago);
		

		if(localStorage.getItem('NumFacturaOrden') !== null){
			aFactura = JSON.parse(localStorage.getItem('NumFacturaOrden'));
			aCliente = JSON.parse(localStorage.getItem('ClienteOrden'));
			aIdCliente = JSON.parse(localStorage.getItem('IDClienteOrden'));
			aResponsable = JSON.parse(localStorage.getItem('ResponsableOrden'));
			aPago = JSON.parse(localStorage.getItem('MetodoPagoOrden'));
			aProductosTabla = JSON.parse(localStorage.getItem('ProductosTabla'));
			aFecha = JSON.parse(localStorage.getItem('FechaOrden'));
			aValorOrden = JSON.parse(localStorage.getItem('ValorOrden'));
		}


	aFecha.push(nFecha)
	aProductosTabla.push(aIntermediario);
	aFactura.push(nFactura);
	aCliente.push(nCliente);
	aIdCliente.push(nIdCliente);
	aResponsable.push(nResponsable);
	aPago.push(nPago);
	aValorOrden.push(nTotal);

	localStorage.setItem('FechaOrden', JSON.stringify(aFecha));
	localStorage.setItem('NumFacturaOrden',JSON.stringify(aFactura));
	localStorage.setItem('ClienteOrden',JSON.stringify(aCliente));
	localStorage.setItem('IDClienteOrden',JSON.stringify(aIdCliente));
	localStorage.setItem('ResponsableOrden',JSON.stringify(aResponsable));
	localStorage.setItem('MetodoPagoOrden', JSON.stringify(aPago));
	localStorage.setItem('ProductosTabla', JSON.stringify(aProductosTabla));
	localStorage.setItem('ValorOrden', JSON.stringify(aValorOrden));

	x = JSON.parse(localStorage.getItem('ProductosTabla'));
	y = x[0][0][0];
	z = x[0][0][1];
	console.log('intento mostrar nombre 1: ' + y + ' z: ' + z);
	enProceso();
	abrir();

}
function guardarOrden1() {

	var tipo = document.getElementsByName('Pago');
	var value;

	if (tipo[0].checked) {
		value = "Efectivo";
	} else if (tipo[1].checked){
		value = "Tar Credito";
	} else if (tipo[2].checked) {
		value = "PSE";
	}
	//if ((tipo[0].checked || tipo[1].checked || tipo[2].checked) && (document.getElementById('Resp').length === 0) && aProducto.length > 0) {
	if ((tipo[0].checked || tipo[1].checked || tipo[2].checked) ) {	
	
	} else {
		alert('Seleccione un método de pago');
		return;
	}
	if ( aProducto.length > 0) {

	} else {
		alert('Debe agregar al menos un producto');
		return;
	}
	if (document.querySelector('#Resp').value.length !== 0) {

	} else {
		alert('Ingrese el nombre del responsable');
		return;
	}
	//console('Aqui vamos: ' + document.querySelector('#Resp').length);
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

	console.log('jelouuuuuuuuuuuuuu');
	//console.log(aCodigo);
	console.log('cantidad de ordenes: ' + aIntermediario[1]);

	

	var nFactura = document.querySelector('#numFac').value,
		nCliente = document.querySelector('#nomClient').value,
		nIdCliente = document.querySelector('#IdC').value,
		nResponsable = document.querySelector('#Resp').value,
		nPago = value,
		nTotal = document.querySelector('#vorden').value,
		nFecha = hoyFecha();
		//console.log('Se supone' + nPago);
		

		if(localStorage.getItem('NumFacturaOrden') !== null){
			aFactura = JSON.parse(localStorage.getItem('NumFacturaOrden'));
			aCliente = JSON.parse(localStorage.getItem('ClienteOrden'));
			aIdCliente = JSON.parse(localStorage.getItem('IDClienteOrden'));
			aResponsable = JSON.parse(localStorage.getItem('ResponsableOrden'));
			aPago = JSON.parse(localStorage.getItem('MetodoPagoOrden'));
			aProductosTabla = JSON.parse(localStorage.getItem('ProductosTabla'));
			aFecha = JSON.parse(localStorage.getItem('FechaOrden'));
			aValorOrden = JSON.parse(localStorage.getItem('ValorOrden'));
		}


	aFecha.push(nFecha)
	aProductosTabla.push(aIntermediario);
	aFactura.push(nFactura);
	aCliente.push(nCliente);
	aIdCliente.push(nIdCliente);
	aResponsable.push(nResponsable);
	aPago.push(nPago);
	aValorOrden.push(nTotal);

	localStorage.setItem('FechaOrden', JSON.stringify(aFecha));
	localStorage.setItem('NumFacturaOrden',JSON.stringify(aFactura));
	localStorage.setItem('ClienteOrden',JSON.stringify(aCliente));
	localStorage.setItem('IDClienteOrden',JSON.stringify(aIdCliente));
	localStorage.setItem('ResponsableOrden',JSON.stringify(aResponsable));
	localStorage.setItem('MetodoPagoOrden', JSON.stringify(aPago));
	localStorage.setItem('ProductosTabla', JSON.stringify(aProductosTabla));
	localStorage.setItem('ValorOrden', JSON.stringify(aValorOrden));

	x = JSON.parse(localStorage.getItem('ProductosTabla'));
	y = x[0][0][0];
	z = x[0][0][1];
	console.log('intento mostrar nombre 1: ' + y + ' z: ' + z);
	abrir2();
	terminado();
	disminuirCantidad();
}
function cerrar() {
	document.getElementById("vent").style.display = "none";
	document.getElementById("vent2").style.display = "none";
}
function abrir() {
	document.getElementById("vent").style.display = "block";
	document.getElementById("vent2").display = "none";
}
function abrir2(){
    document.getElementById("vent2").style.display="block";
    document.getElementById("vent").style.display="none";
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
	aRestante.splice(index, 1);

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
function enProceso(){
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

function numFactura() {
	var numerito,tama,num,num2=0;
try{
	numerito = JSON.parse(localStorage.getItem('NumFacturaOrden'));
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
function disminuirCantidad() {
	console.log('Codigo: ' + aCodigo + ' quitar ' + aCantidad + ' disponible ' + aCantidadD + ' quedan ' + aRestante);
	var posPro;
	//console.log('hay : ' + todosProductos + 'Productos');
	console.log('hay : ' + aRestante.length + ' para disminuir');
	//console.log(todosProductos.length + aRestante.length  );
	for (var i = 0; i < aCodigo.length; i++) {
		var myPro = aCodigo[i],
			elim = aRestante[i],
			quitar = aCantidad[i];
		sub(myPro,elim,quitar);
		console.log('zoila: ' + myPro);
	}

	//console.log('hay : ' + JSON.parse(todosProductos).length + 'Productos');
	console.log('hay : ' + aRestante.length + ' para disminuir');
}
function sub(index,elim,quitar) {
	//console.log('resultado resta: ' + aRestante);
	var num = parseInt(index);
	//var este = JSON.parse(aRestante);
	//console.log('con parse: '+ +' sin parse '+);
	var todosProductos = JSON.parse(localStorage.getItem('Codigo'));
	var vitri = JSON.parse(localStorage.getItem('Vitrina'));
	var bodeg = JSON.parse(localStorage.getItem('Bodega'));
	var lcantidad = JSON.parse(localStorage.getItem('Cantidad'));
	//console.log('vector de cantidad antes: ' + lcantidad + ' resultado resta: ' + index + ' num '+ num);
	for (var i = 0; i < todosProductos.length; i++) {
		if (todosProductos[i] == index) {
			lcantidad[i] = elim;
			localStorage.setItem('Cantidad', JSON.stringify(lcantidad));
			//console.log('El id del producto es: ' + i);
			//console.log('A ' + lcantidad[i] + ' quedo en' + aRestante[num]);
			if (vitri[i] >= quitar) {
				vitri[i] = vitri[i] - quitar;
				localStorage.setItem('Vitrina', JSON.stringify(vitri));
				console.log('Vitrina puede solo');
			} else {
				console.log('Vitrina no puede solo');
				var sepaso = quitar - vitri[i];
				vitri[i] = 0;
				bodeg[i] = bodeg[i] - sepaso;

				localStorage.setItem('Vitrina', JSON.stringify(vitri));
				localStorage.setItem('Bodega', JSON.stringify(bodeg));
            }
		}
		//console.log('No funciona: ' + index +' '+ todosProductos[i]);
	}
	//console.log('vector de cantidad despues:' + lcantidad);

	
}