function hora_segundos() {
    var Tiempo = new Date();
    var total_segundos = 0;

    var hora = (Tiempo.getHours() < 9) ? "0" + Tiempo.getHours() : Tiempo.getHours();
    var minutos = (Tiempo.getMinutes() < 9) ? "0" + Tiempo.getMinutes() : Tiempo.getMinutes();
    var segundos = (Tiempo.getSeconds() < 9) ? "0" + Tiempo.getSeconds() : Tiempo.getSeconds();

    total_segundos = ((Tiempo.getHours() * 3600) + (Tiempo.getMinutes() * 60) + (Tiempo.getSeconds()));

    alert('Hora actual: ' + hora + ':' + minutos + ':' + segundos + '\n' + 'Segundos totales: ' + total_segundos);

}

function area_triangulo() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    resultado_area = ((base * altura) / 2);

    alert('Resultado del área: ' + resultado_area);
}

function raiz_cuadrada() {
    var numero = document.getElementById("numero").value;
    var resultado_raiz = Math.sqrt(numero);
    redondeado = Math.round(resultado_raiz * 1000) / 1000;
    alert('Resultado de la raíz: ' + redondeado);

}

function longitud_texto() {
    var texto = document.getElementById("texto").value;
    alert('Longitud de la Cadena: ' + texto.length);

}

function concatenar_arrays() {
    var array1 = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes");
    var array2 = new Array("Sábado", "Domingo");
    alert('Cadena concatenada: ' + array1.concat(array2));
}

function version_navegador() {
    alert("Versión del navegador: " + navigator.appVersion);
}

function ancho_altura_pantalla() {
    alert('Ancho: ' + window.screen.width + ', ' + 'Altura: ' + window.screen.height);
}