var updateElement = document.getElementById('update');
var updivElement = document.getElementById('outputUpdate');

updateElement.onchange = function () {
    var selectedValue = updateElement.options[updateElement.selectedIndex].value;
    var submit = '<input type="submit" value="Actualizar">';
    if (selectedValue == 'empleado') {
        var id = 'ID:<br><input type="text" id="idu"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombreu"><br>';
        var apellido = 'Apellido<br><input type="text" id="apellidou"><br>';
        var telefono = 'Telefono<br><input type="text" id="telefonou"><br>';
        var tipo = 'Tipo<br><input type="text" id="tipo"><br>'
        var form = '<form>' + id + nombre + apellido + telefono + tipo + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado empleado.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'servicio') {
        var idserv = 'ID:<br><input type="text" id="idseru"><br>';
        var idemp = 'ID empleado:<br><input type="text" id="idempu"><br>';
        var fecha = 'Fecha:<br><input type="date" id="fechau"><br>';
        var vehiculo = 'Vehiculo:<br><input type="text" id="vehiculou"><br>';
        var form = '<form>' + idserv + idemp + fecha + vehiculo + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado servicio.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'tipo') {
        var id = 'ID:<br><input type="text" id="idu"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombreu"><br>';
        var form = '<form>' + id + nombre + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado tipo de empleado.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'cliente') {
        var id = 'ID:<br><input type="text" id="idu"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombreu"><br>';
        var direccion = 'Direccion:<br><input type="text" id="direccionu"><br>';
        var telefono = 'Telefono<br><input type="text" id="telefonou"><br>';
        var form = '<form>' + id + nombre + direccion + telefono + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado cliente.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'precios') {
        var id = 'ID cliente:<br><input type="text" id="idu"><br>';
        var idm = 'ID material:<br><input type="text" id="idmu"><br>';
        var precio = 'Precio:<br><input type="text" id="preciou"><br>';
        var form = '<form>' + id + idm + precio + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado precios.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'remisiones') {
        var id = 'ID:<br><input type="text" id="idu"><br>';
        var ids = 'ID servicio:<br><input type="text" id="idsu"><br>';
        var idc = 'ID cliente:<br><input type="text" id="idcu"><br>';
        var idm = 'ID material:<br><input type="text" id="idmu"><br>';
        var fact = 'Facturada: <input type="radio" id="factu"><br>';
        var nfact = 'No facturada: <input type="radio" id="nfactu"><br>'
        var form = '<form>' + id + ids + idc + idm + fact + nfact + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado remisiones.</p>' + form + '<p> </p>';
    } else if (selectedValue == 'material') {
        var id = 'ID cliente:<br><input type="text" id="idu"><br>';
        var nombre = 'Nombre:<br><input type="text" id="nombreu"><br>';
        var form = '<form>' + id + nombre + submit + '</form>';
        updivElement.innerHTML = '<p> </p><p>Has seleccionado material.</p>' + form + '<p> </p>';
    }
};
