function Ingresar(){
    var user = document.getElementById('usuario').value;
    var passwd = document.getElementById('contraseña').value;
    if (user == "admin@mercagratamira.com"){
        if (passwd == "12345"){
            location.href="Inicio.html";
        }
        else{
            alert("usuario o contraseña incorrecta");
        }
    }
}