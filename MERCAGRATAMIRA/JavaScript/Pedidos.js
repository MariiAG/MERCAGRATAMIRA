function Minutos(){

    var estado = 'En camino';
    var time = 70;

    while(time != 0){
        time = time - 10;
        document.getElementById('tiempo').value = time;
    }

    if (time == 0){
        estado = "Entregado";
        alert(estado);
        i = 0;
    }
    else{
        estado = "En Camino";
        alert(estado);
    }
}
