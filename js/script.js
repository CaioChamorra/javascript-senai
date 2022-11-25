function validar() {
    let nome = document.getElementById("nome").value;

    if (nome == "") {
        document.getElementById("nome").style.border = " 3px solid #ff1a1a";
        document.getElementById("erronome").style.display = "inline";
        return false;
    } else {
        document.getElementById("nome").style.border = "1px solid #000"
        document.getElementById("erronome").style.display = "none";
    }

    alert(nome);

    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("email").style.border = " 3px solid #ff1a1a";
        document.getElementById("erroemail").style.display = "inline";
        return false;
    } else {
        document.getElementById("email").style.border = "1px solid #000"
        document.getElementById("erroemail").style.display = "none";

        alert(email);
    }

    let aval = document.getElementById("aval").value;
    aval = parseInt(aval);

    if (aval < 1 || aval > 5) {
        document.getElementById("aval").style.border = " 3px solid #ff1a1a";
        document.getElementById("erroaval").style.display = "inline";
        return false;
    } else {
        document.getElementById("aval").style.border = "1px solid #000"
        document.getElementById("erroaval").style.display = "none";
    }

    alert("Avaliação: " + aval);

    let aceite = document.getElementById("aceite").checked;
    console.log(aceite);

    if (aceite) {
        document.getElementById("erroaceite").style.display = "none";
    } else {
        document.getElementById("erroaceite").style.display = "inline";
        return false;
    }
    alert("Aceitado!")
}

function limpar() {
    document.getElementById("nome").style.border = "1px solid #000";
    document.getElementById("email").style.border = "1px solid #000";
    document.getElementById("aval").style.border = "1px solid #000";

    document.getElementById("erronome").style.display = "none";
    document.getElementById("erroemail").style.display = "none";
    document.getElementById("erroaval").style.display = "none";
    document.getElementById("erroaceite").style.display = "none";
}


