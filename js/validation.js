/* Validación de JS para formulario de Contacto
   Para el archivo index.html en PIXEL_ART_B5_JS */

function validaComments() {
    let id = document.getElementById("floatingTextarea").value
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("commentsHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("commentsHelp").style.visibility="hidden";
    return true;
}

function validaCheckbox() {
    let id = document.getElementById("exampleCheck1"); 
    if (id.checked) {
        document.getElementById("checkHelp").style.visibility="visible";
        return true;
    }
    document.getElementById("checkHelp").style.visibility="visible";
    return false;
}

function validaSelect() {
    let id = document.getElementById("motivo").value;
    if (id == 0) {
        document.getElementById("motivoHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("motivoHelp").style.visibility="hidden";
    return true;
}

function validaEmail() {
    let id = document.getElementById("exampleInputEmail1").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("emailHelp").style.visibility="visible";
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(id)) {
        document.getElementById("emailHelp").style.visibility="hidden";
        return true;
    } else {
        document.getElementById("emailHelp").style.visibility="visible";
        return false;
    }
}

function validaApellidos() {
    let id = document.getElementById("surnames").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("surnamesHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("surnamesHelp").style.visibility="hidden";
    return true;
}

function validaNombre() {
    let id = document.getElementById("name").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "")  {
        document.getElementById("nameHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("nameHelp").style.visibility="hidden";
    return true;
}

function validacion() {
    if (validaNombre() && validaApellidos() && validaEmail() && validaComments() && validaSelect() && validaCheckbox()) {
        return true;
    } else {
        alert("Rellene todos los campos indicados.");
        return false;
    }
}