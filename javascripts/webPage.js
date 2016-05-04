var selectElement = document.getElementById('selector');
var divElement = document.getElementById('output');

selectElement.onchange = function () {
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedValue == 'empleado') {
        var id = 'ID:<br><input type="text" id="id"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombre"><br>';
        var apellido = 'Apellido<br><input type="text" id="apellido"><br>';
        var telefono = 'Telefono<br><input type="text" id="telefono"><br>';
        var tipo = 'Tipo<br><input type="text" id="tipo"><br>'
        var form = '<form>' + id + nombre + apellido + telefono + tipo + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado empleado.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'servicio') {
        var idserv = 'ID:<br><input type="text" id="idser"><br>';
        var idemp = 'ID:<br><input type="text" id="idemp"><br>';
        var fecha = 'Fecha:<br><input type="date" id="fecha"><br>';
        var vehiculo = 'Vehiculo:<br><input type="text" id="vehiculo"><br>';
        var form = '<form>' + idserv + idemp + fecha + vehiculo + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado servicio.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'tipo') {
        var id = 'ID:<br><input type="text" id="id"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombre"><br>';
        var form = '<form>' + id + nombre + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado tipo de empleado.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'cliente') {
        var id = 'ID:<br><input type="text" id="id"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombre"><br>';
        var direccion = 'Direccion:<br><input type="text" id="direccion"><br>';
        var telefono = 'Telefono<br><input type="text" id="telefono"><br>';
        var form = '<form>' + id + nombre + direccion + telefono + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado cliente.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'precios') {
        var id = 'ID cliente:<br><input type="text" id="id"><br>';
        var idm = 'ID material:<br><input type="text" id="idm"><br>';
        var precio = 'Precio:<br><input type="text" id="precio"><br>';
        var form = '<form>' + id + idm + precio + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado cliente.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'remisiones') {
        var id = 'ID:<br><input type="text" id="id"><br>';
        var ids = 'ID servicio:<br><input type="text" id="ids"><br>';
        var idc = 'ID cliente:<br><input type="text" id="idc"><br>';
        var idm = 'ID material:<br><input type="text" id="idm"><br>';
        var fact = 'Facturada:<br><input type="radio" id="fact"><br>';
        var nfact = 'No facturada:<br><input type="radio" id="nfact"><br>'
        var form = '<form>' + id + ids + idc + idm + fact + nfact + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado cliente.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'material') {
        var id = 'ID cliente:<br><input type="text" id="id"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombre"><br>';
        var form = '<form>' + id + nombre + '</form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado cliente.</p>' + form + '<p> </p>';
    }
};