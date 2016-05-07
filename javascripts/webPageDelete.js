var deleteElement = document.getElementById('delete');
var divdelElement = document.getElementById('outputDelete');

deleteElement.onchange = function () {
    var selectedValue = deleteElement.options[deleteElement.selectedIndex].value;
    var submit = '<br><input type="submit" value="Eliminar">';
    if (selectedValue == 'empleado') {
        var id = 'ID:<br><input type="text" id="idd"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombred"><br>';
        var apellido = 'Apellido<br><input type="text" id="apellidod"><br>';
        var telefono = 'Telefono<br><input type="text" id="telefonod"><br>';
        var tipo = 'Tipo<br><input type="text" id="tipo"><br>'
        var form = '<form>' + id + nombre + apellido + telefono + tipo + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado empleado.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'servicio') {
        var idserv = 'ID:<br><input type="text" id="idserd"><br>';
        var idemp = 'ID empleado:<br><input type="text" id="idempd"><br>';
        var fecha = 'Fecha:<br><input type="date" id="fechad"><br>';
        var vehiculo = 'Vehiculo:<br><input type="text" id="vehiculod"><br>';
        var form = '<form>' + idserv + idemp + fecha + vehiculo + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado servicio.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'tipo') {
        var id = 'ID:<br><input type="text" id="idd"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombred"><br>';
        var form = '<form>' + id + nombre + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado tipo de empleado.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'cliente') {
        var id = 'ID:<br><input type="text" id="id"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombred"><br>';
        var direccion = 'Direccion:<br><input type="text" id="direcciond"><br>';
        var telefono = 'Telefono<br><input type="text" id="telefonod"><br>';
        var form = '<form>' + id + nombre + direccion + telefono + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado cliente.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'precios') {
        var id = 'ID cliente:<br><input type="text" id="idd"><br>';
        var idm = 'ID material:<br><input type="text" id="idmd"><br>';
        var precio = 'Precio:<br><input type="text" id="preciod"><br>';
        var form = '<form>' + id + idm + precio + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado precios.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'remisiones') {
        var id = 'ID:<br><input type="text" id="id"><br>';
        var ids = 'ID servicio:<br><input type="text" id="idsd"><br>';
        var idc = 'ID cliente:<br><input type="text" id="idcd"><br>';
        var idm = 'ID material:<br><input type="text" id="idmd"><br>';
        var fact = 'Facturada: <input type="radio" id="factd"><br>';
        var nfact = 'No facturada: <input type="radio" id="nfactd"><br>'
        var form = '<form>' + id + ids + idc + idm + fact + nfact + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado remisiones.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'material') {
        var id = 'ID cliente:<br><input type="text" id="idd"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombred"><br>';
        var form = '<form>' + id + nombre + submit + '</form>';
        divdelElement.innerHTML = '<p> </p><p>Has seleccionado material.</p>' + form + '<p> </p>';
    }
};