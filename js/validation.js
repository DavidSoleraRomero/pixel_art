/* Validación de JS para formulario de Contacto
   Para el archivo index.html en PIXEL_ART_B5_JS */

function validaComments() {
    let id = document.getElementById("comments").value
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("commentsHelp").style.visibility="visible";
        document.getElementById("comments").classList.add("form-novalidado");
        return false;
    }
    document.getElementById("commentsHelp").style.visibility="hidden";
    document.getElementById("comments").classList.remove("form-novalidado");
    return true;
}

function validaCheckbox() {
    let id = document.getElementById("check"); 
    if (id.checked) {
        document.getElementById("checkHelp").style.visibility="visible";
        document.getElementById("check").classList.rempve("form-novalidado");
        return true;
    }
    document.getElementById("checkHelp").style.visibility="visible";
    document.getElementById("check").classList.add("form-novalidado");
    return false;
}

function validaSelect() {
    let id = document.getElementById("motivo").value;
    if (id == 0) {
        document.getElementById("motivoHelp").style.visibility="visible";
        document.getElementById("motivo").classList.add("form-novalidado");
        return false;
    }
    document.getElementById("motivoHelp").style.visibility="hidden";
    document.getElementById("motivo").classList.remove("form-novalidado");
    return true;
}

function validaEmail() {
    let id = document.getElementById("email").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("emailHelp").style.visibility="visible";
        document.getElementById("email").classList.add("form-novalidado");
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,7})+$/;
    if (emailRegex.test(id)) {
        document.getElementById("emailHelp").style.visibility="hidden";
        document.getElementById("email").classList.remove("form-novalidado");
        return true;
    } else {
        document.getElementById("emailHelp").style.visibility="visible";
        document.getElementById("email").classList.add("form-novalidado");
        return false;
    }
}

function validaApellidos() {
    const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/;
    let id = document.getElementById("surnames").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "" | !nombreRegex.test(id)) {
        document.getElementById("surnamesHelp").style.visibility="visible";
        document.getElementById("surnames").classList.add("form-novalidado");
        return false;
    }
    document.getElementById("surnamesHelp").style.visibility="hidden";
    document.getElementById("surnames").classList.remove("form-novalidado");
    return true;
}

function validaNombre() {
    const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/;
    let id = document.getElementById("name").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "" | !nombreRegex.test(id))  {
        document.getElementById("nameHelp").style.visibility="visible";
        document.getElementById("name").classList.add("form-novalidado");
        return false;
    }
    document.getElementById("nameHelp").style.visibility="hidden";
    document.getElementById("name").classList.remove("form-novalidado");
    return true;
}

function validacion() {
    if (validaNombre() & validaApellidos() & validaEmail() & validaComments() & validaSelect() & validaCheckbox()) {
        return true;
    } else {
        alert("Rellene todos los campos indicados.");
        return false;
    }
}

function quitaErrores(id) {
    document.getElementById(id).classList.remove("form-novalidado");
    document.getElementById(id + "Help").style.visibility="hidden";
}