var selectElement = document.getElementById('selector');
var divElement = document.getElementById('output');

selectElement.onchange = function () {
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedValue == 'empleado') {
        var id = '<input type="text" name="id">';
        var form = '<form>First name:<br>' + id + '<br></form>';
        divElement.innerHTML = '<p> </p><p>Has seleccionado empleado.</p>' + form;
    } else if (selectedValue == 'saab') {
        divElement.innerHTML = '<p> </p><p>saab3</p>';
    } else if (selectedValue == 'mercedes') {
        divElement.innerHTML = '<p> </p><p>mercedes1</p>';
    }
};